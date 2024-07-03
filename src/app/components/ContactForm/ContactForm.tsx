import React, { useState, useReducer } from 'react'
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

    if (!name) {
      return handleError('user_name')
    } else if (!email) {
      return handleError('user_email')
    } else if (!message) {
      return handleError('message')
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
          }, 5000) // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later')
          setIsSubmitting(false)
          setTimeout(() => {
            setStateMessage('')
          }, 5000) // hide message after 5 seconds
        }
      )

    // Clears the form after sending the email
    e.target.reset()
  }

  function handleChange(event: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) {
    event.preventDefault()
    if (event.target.name === 'user_name') {
      setName(event.target.value)
    } else if (name === 'user_email') {
      setEmail(event.target.value)
    } else {
      setMessage(event.target.value)
    }
  }

  function handleError(name:string) {
    document.getElementsByName(name)[0].style.border = '1px red solid'
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
        <input type="submit" value="Send" disabled={isSubmitting} className='text-lg bg-slate-500 border rounded-md p-2 m-2 w-40 hover:cursor-pointer hover:bg-slate-300 hover:duration-150' />
      </div>
    </form>
  )
}
export default ContactForm