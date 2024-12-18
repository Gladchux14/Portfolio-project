import React,{useRef} from 'react'
import Contactbanner from '../components/contactbanner';
import Linkbutton from '../components/linkbutton';
// import Picture from '../components/picture';
import hero from '/portfolio/desktop/hero.jpg'
import profile from '/detail/desktop/profile.jpg';
import Stack from '../components/stack';


const Homepage = () => {
    const aboutRef = useRef(null)

    function goToAbout() {
      if (!aboutRef) return
      aboutRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  
  return (
    <>
      <header className=" relative flex flex-col gap-6">
        <img src={hero} alt="hero-image" className='max-h-screen' />
        {/* <Picture type="homepage" name="image-homepage-hero" /> */}
        <div className="flex flex-col gap-8 items-start md:absolute md:bg-cyan-500 md:left-0 md:bottom-0 md:max-w-[514px] md:pt-14 md:pr-14 md:gap-12 xl:gap-[3.375rem] xl:max-w-[445px]">
          <h1 className="font-bold text-6xl tracking-h2 xl:text-h1 xl:leading-h1 xl:tracking-h1 p-5 ">
            Hey, I am Glad Chukwu and I love building beautiful websites that customers can interact with.
          </h1>
          <button className="flex bg-sky-950 text-white min-w-[200px] hover:bg-cyan group transition-colors" onClick={goToAbout}>
            <span className="self-stretch flex items-center px-4 bg-[#1d3445] group-hover:bg-[#56a292] transition-colors">
              <img src="/icons/down-arrows.svg" alt="Arrows icon" aria-hidden="true" className="group-hover:hidden" />
              <img
                src="/icons/down-arrows-light.svg"
                alt="Arrows light icon"
                aria-hidden="true"
                className="hidden w-[16px] group-hover:block"
              />
            </span>
            <span className="flex-1 py-4 text-center text-xs leading-4 uppercase tracking-[2px]">About me</span>
          </button>
        </div>
      </header>

      <section
        className="mt-24 mb-[7.125rem] flex flex-col gap-8 md:flex-row lg:mx-40 md:mx-20 mx-20 md:gap-[4.375rem] md:mb-24 xl:my-[9.375rem] xl:gap-[7.75rem]"
        ref={aboutRef}
      >
        <img src={profile} alt="profile pic" className='w-48 h-auto md:w-64 lg:w-80 xl:w-96 rounded-lg object-cover' />
        {/* <Picture type="homepage" name="image-homepage-profile" /> */}
        <div className="border-y-[1px] border-t-line pt-8 pb-[3.25rem] md:pt-[3.125rem] md:pb-[2.875rem] xl:max-w-[350px]">
          <h2 className="font-heading font-bold text-h2  leading-h2 tracking-h2">About Me</h2>
          <p className="mt-7 mb-6 text-basic">
            I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript and Tailwind CSS. When writing JavaScript code, I mostly use React. I’m based in Enugu, Nigeria, but I’m happy working remotely . When I’m not coding,
            you’ll find me reading and watching movies. I love being out in nature whether that’s going for a walk or run . I’d love you to check out
            my work.
          </p>
          <Linkbutton to="portfolio" text="Go to portfolio" className="hover:bg-slate-500" />
        </div>
      </section  >
    <section className='mt-24 mb-28 flex flex-col gap-8 md:gap-20 lg:mx-40 md:mx-20 mx-10' >
      <Stack/>
    </section>

      <Contactbanner />
    </>
  )
}

export default Homepage;