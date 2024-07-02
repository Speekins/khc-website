import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [stateMessage, setStateMessage] = useState('')
  const sendEmail = (e: any) => {
    e.persist()
    e.preventDefault()
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
          console.log(result)
          setIsSubmitting(false)
          setTimeout(() => {
            setStateMessage('')
          }, 5000) // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later')
          console.log(error)
          setIsSubmitting(false)
          setTimeout(() => {
            setStateMessage('')
          }, 5000) // hide message after 5 seconds
        }
      )

    // Clears the form after sending the email
    e.target.reset()
  }
  return (
    <form onSubmit={sendEmail} className='flex font-sans font-thin w-screen'>
      <div className='flex flex-col w-1/2 items-end pr-10'>
        <input type="text" name="user_name" placeholder='Name' className='m-2 p-2 rounded-md w-1/2'/>
        <input type="email" name="user_email" placeholder='Email' className='m-2 p-2 rounded-md w-1/2'/>
        {stateMessage && <p className='font-thin text-xl text-slate-700'>{stateMessage}</p>}
      </div>
      <div className='flex flex-col w-1/2 justify-between items-center mr-10'>
        <textarea name="message" placeholder='Type message here...' className='w-2/3 h-96 m-2 p-2 rounded-md' />
        <input type="submit" value="Send" disabled={isSubmitting} className='text-lg bg-slate-500 border rounded-md p-2 m-2 w-40 hover:cursor-pointer hover:bg-slate-300 hover:duration-150' />
      </div>
    </form>
  )
}
export default ContactForm