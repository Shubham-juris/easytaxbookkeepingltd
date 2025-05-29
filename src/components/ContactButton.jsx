import React from 'react'
import { Link } from 'react-router-dom'

function ContactButton() {
  return (
    <Link to='/ContactUs'>
    <button className='bg-black px-6 py-3 rounded-sm cursor-pointer text-white'>
        Contact Us
    </button>
    </Link>
  )
}

export default ContactButton