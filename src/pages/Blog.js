import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import News from '../components/News/News'
import Footer from '../components/Footer/Footer'

function Blog() {
  return (
    <>
        <Navbar />
        <News 
          margin='14vh 0 0 0'
        />
        <Footer />
    </>
  )
}

export default Blog
