import React from 'react'
import Linkbutton from './linkbutton'
// import Picture from './picture'

const Portfolioitem = ({item}) => {


    const {name, slug,website, description, imageUrl,images} = item
  return (
    <article className="portflio-item group flex flex-col gap-8 md:flex-row md:items-center md:gap-[4.25rem] xl:gap-[7.75rem] xl:odd:justify-end">
      <img src={imageUrl} alt="Project" className="w-1/2 h-auto " />
      {/* <Picture type="portfolio" name={images.thumbnail} /> */}
      <div className="flex flex-col items-start gap-6 py-6 border-y-[1px] border-y-line md:pt-8 md:pb-[3.125rem] md:gap-8  md:group-odd:-order-1 xl:max-w-[350px] xl:py-[6.375rem] xl:gap-[1.625rem]">
        <h2 className="font-heading font-bold text-h2 leading-h2 tracking-h2">{name}</h2>
        <p className="text-body-2 leading-body-2 text-basic">{description}</p>
        <Linkbutton to={website} text="View project" isNative={true} />
      </div>
    </article>
  )
}


export default Portfolioitem;