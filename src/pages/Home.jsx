import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div className=' text-xl text-center  '>
      <div className=' flex gap-5 text-xl justify-center mt-2 '>
        <Link to="/privacy-policy">PrivacyPolicy</Link>
        <Link to="/terms-and-conditions">Terms And Conditions</Link>
      </div>
    </div>
  )
}

export default Home