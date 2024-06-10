

import React from 'react'
import Linkbutton from './linkbutton'

const Contactbanner = () => {
  return (
    <section className="flex flex-col items-center lg:mx-48 md:mx-32 mx-16 gap-10 md:flex-row md:gap-8 mx- ">
    <h2 className="font-heading font-bold text-h2 leading-h2 tracking-h2 text-center md:text-left md:max-w-[350px]">
      Interested in doing a project together?
    </h2>
    <hr className="hidden md:block flex-1 border-line"></hr>
    <Linkbutton to="/contact" text="Contact me" />
  </section>
  )
}

export default Contactbanner;