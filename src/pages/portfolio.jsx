import React from 'react'
import Contactbanner from '../components/contactbanner';
import Portfolioitem from '../components/portfolioitem';
import {data} from '../data'

const Portfolio = () => {
  return (
    <>
    <section className="mt-10 mb-20 lg:mx-60 md:mx-40 mx-20 flex flex-col gap-[4.5rem] md:my-24 md:gap-20 xl:mb-[9.375rem]">
      <h1 className="sr-only">My portfolio</h1>
      {data.map(project => (
        <Portfolioitem key={project.id} item={project} />
      ))}
    </section>

    <Contactbanner />
  </>
  )
}

export default Portfolio;