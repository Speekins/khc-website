import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [stateMessage, setStateMessage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (e: any) => {
    e.persist()
    e.preventDefault()
    clearError()
    console.log(name + " " + email + " " + message)
    if (!name || !email || !message) {
      handleError()
      return
    }

    setIsSubmitting(true)
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage('Message sent!')
          setIsSubmitting(false)
          setTimeout(() => {
            setStateMessage('')
          }, 5000)
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later')
          setIsSubmitting(false)
          setTimeout(() => {
            setStateMessage('')
          }, 5000)
        }
      )

    // Clears the form after sending the email
    e.target.reset()
    setName('')
    setEmail('')
    setMessage('')
  }

  function handleChange(event: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) {
    event.preventDefault()
    const name = event.target.name

    switch (name) {
      case 'user_name': setName(event.target.value)
      break
      case 'user_email': setEmail(event.target.value)
      break
      case 'message': setMessage(event.target.value)
      break
    }
  }

  function handleError() {
    let fields = ['user_name', 'user_email', 'message']

    fields.forEach(field => {
      if (!document.getElementsByName(field)[0].value) {
        document.getElementsByName(field)[0].style.border = '1px red solid'
      }
    })
    setStateMessage('Please fill out all required fields.')
    setIsSubmitting(false)
    setTimeout(() => {
      setStateMessage('')
    }, 5000)
  }

  function clearError() {
    let fields = ['user_name', 'user_email', 'message']

    fields.forEach(field => {
      document.getElementsByName(field)[0].style.border = ''
    })
  }

  return (
    <form onSubmit={sendEmail} className='flex font-sans font-thin w-screen'>
      <div className='flex flex-col w-1/2 items-end pr-10'>
        <input onChange={handleChange} type="text" name="user_name" placeholder='Name' className='m-2 p-2 rounded-md w-1/2'/>
        <input onChange={handleChange} type="email" name="user_email" placeholder='Email' className='m-2 p-2 rounded-md w-1/2'/>
        {stateMessage && <p className='font-thin text-xl text-slate-700'>{stateMessage}</p>}
      </div>
      <div className='flex flex-col w-1/2 justify-between items-center mr-10'>
        <textarea onChange={handleChange} name="message" placeholder='Type message here...' className='w-2/3 h-96 m-2 p-2 rounded-md'/>
        <input type="submit" value="Send" disabled={isSubmitting} className='text-lg bg-slate-500 border rounded-md p-2 m-2 w-40 hover:cursor-pointer hover:bg-slate-300 hover:duration-150'/>
      </div>
    </form>
  )
}

export default ContactForm