import React,{ useId}  from 'react'
import emailjs from "emailjs-com";
import {useForm}  from 'react-hook-form'
import Sociallinks from '../components/sociallinks'


const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);
const Contact = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()


  const sendEmail = (data) => {
    console.log("Form submitted with data:", data); // Debug log
    // e.preventDefault(); // Prevent the form from refreshing the page
    const templateParams = {
      from_name: data.name,      // Make sure these match your EmailJS template parameters
      reply_to: data.email,
      message: data.message
    };
    console.log("Sending with template params:", templateParams); // Debug log

    emailjs
       .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,    // Changed
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    // e.target,
    templateParams,
    // data,
    import.meta.env.VITE_EMAILJS_USER_ID 
  )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
         reset(); // Clear the form
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Failed to send the message. Please try again later.");
        }
      );
  };


    const id = useId()
    const onError = (errors) => {
      console.log('Form errors:', errors);
    };

  // function onSubmit() {
  //   reset()
  // }
  return (
    <>
    <div className=' lg:mx-80 md:mx-40 mx-20 '>
    <section className="mt-10  border-y-[1px] border-y-line pt-6 pb-8 flex flex-col justify-between gap-6 md:mt-24 md:py-8 xl:py-12 xl:flex-row">
      <h1 className="font-heading  font-bold text-h2 leading-h2 tracking-h2 w-full xl:max-w-[350px]">Get in Touch</h1>
      <div className="flex flex-col gap-6 xl:max-w-[635px]">
        <p className="text-body-2 leading-body-2 xl:text-body-1 xl:leading-body-1">
          I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide
          range of opportunities. I’m a hard-working and positive person who will always approach each task with a
          sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the
          form.
        </p>
        <Sociallinks />
      </div>
    </section>

    <section className="flex flex-col justify-between gap-6 mt-8 md:gap-8 xl:mt-12 xl:flex-row  ">
      <h2 className="font-heading font-bold text-h2 leading-h2 tracking-h2 w-full xl:max-w-[350px]">Contact Me</h2>
      <form className="w-full flex flex-col gap-6 text-[0.8125rem] xl:max-w-[635px]" autoComplete="off" onSubmit={handleSubmit(sendEmail, onError)}>
        <div className="flex flex-col gap-2">
          <label htmlFor={id + 'name'} className="font-bold">
            Name
          </label>
          <input
            {...register('name', { required: true })}
            placeholder="Jane Appleseed"
            className="bg-input px-4 py-2  bg-blue-50 rounded leading-8 outline-cyan"
            id={id + 'name'}
            style={{ outlineColor: errors.name ? '#F43030' : '' }}
          />
          {errors.name && <p className="text-bright-red font-bold italic text-[0.625rem] leading-3 xl:text-xs">This field is required</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor={id + 'email'} className="font-bold">
            Email Address
          </label>
          <input
            {...register('email', { required: true, pattern: emailPattern })}
            placeholder="email@example.com"
            className="bg-blue-50 rounded px-4 py-2 leading-8 outline-cyan-950"
            id={id + 'email'}
            style={{ outlineColor: errors.email ? '#F43030' : '' }}
          />
          {errors.email && (
            <p className="text-bright-red font-bold italic text-[0.625rem] leading-3 xl:text-xl">This field is required</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor={id + 'message'} className="font-bold">
            Message
          </label>
          <textarea
            {...register('message', { required: true })}
            placeholder="How can I help?"
            className="bg-blue-50 rounded px-4 py-2 leading-8 min-h-24 outline-cyan-950"
            id={id + 'message'}
            style={{ outlineColor: errors.message ? '#F43030' : '' }}
          />
          {errors.message && (
            <p className="text-red-500 font-bold italic text-[0.625rem] leading-3 xl:text-xl">This field is required</p>
          )}
        </div>
        <button className="uppercase self-start bg-dark-blue text-white bg-indigo-950 rounded px-6 py-4 text-xs leading-4 tracking-[2px] hover:bg-cyan-500 transition-colors focus-visible:outline-cyan">
          Send message
        </button>
      </form>
    </section>
    </div>
  </>
  )
}

export default Contact;