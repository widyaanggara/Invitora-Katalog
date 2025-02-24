import React from 'react'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import Navbar from './components/Navbar'
import Benefits from './components/Benefits'
import Feature from './components/Feature'
import Faq from './components/Faq'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <main className='relative flex justify-center items-center flex-col mx-auto sm:px-10 px-5'>
      <Navbar />
      <Hero />
      <Catalog />
      {/* <Benefits /> */}
      <Feature />
      <Testimonials />
      <Pricing />
      <Faq />
    </main>
  )
}

export default App