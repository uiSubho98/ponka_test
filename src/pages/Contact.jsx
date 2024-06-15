import mapImage from "../assets/ponka_contactUs.png"
const Contact = () => {
  return (
    <div className='mt-12 mx-[10%] sm:mx-[15%] flex-col justify-center sm:justify-start'>
    <div className='mb-8 lg:text-center md:text-center sm:mb-12'>
        <h1 className='text-[2rem] font-semibold md:text-[2rem] lg:text-[3rem] sm:text-[1.5rem] flex sm:flex-row sm:justify-center'>Contact <span className='hidden sm:block sm:mx-[1rem]'> Us </span> </h1>
    </div>
    <div className='bg-[#FCF9F9] w-full h-full flex flex-col sm:flex-row py-1 sm:py-[5%] ring-1 ring-[#DAE8F0] rounded-md'>
     <div className='w-full sm:w-[50%] text-center'>
        <div className='lg:mx-[30%] md:mx-[25%] sm:mx-[15%] mx-4 px-2 my-2 sm:my-[10%] lg:my-[8%] lg:text-[1rem] md:text-[0.75rem] sm:text-[0.5rem] text-[1rem]'>
        <div className='text-[0.75rem] lg:text-[1rem]'>
        <h1 className='font-semibold mb-2 '>Collaborate for Impact</h1>
        </div>
        <div>
        <p className='text-[0.75rem] sm:text-[0.5rem] lg:text-[1rem] md:text-[0.6rem]'>Explore patnership opportunities with Ponka to leverage our experties, resources and network for mutual benifit.</p>
        </div>
        </div>
       
     </div>
     <div className='w-full sm:w-[50%] flex flex-col justify-start text-start '>
        <div className='mx-4 sm:mx-[10%] lg:mx-[5%] md:mx-[5%]'>
        <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  placeholder='Name'
                  required
                  className="block w-full sm:w-[80%] md:text-[0.75rem] lg:text-[1rem] sm:text-[1rem] text-[0.8rem] lg:h-10 md:h-6 sm:h-10 h-8 rounded-md border-1 border-[#DAE8F0] py-1.5 px-2 text-[#B6B6B6] shadow-sm ring-1 ring-inset ring-[#DAE8F0] outline-[#DAE8F0] "
                />
              </div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder='E-mail'
                  required
                  className="block w-full sm:w-[80%] md:text-[0.75rem] lg:text-[1rem] sm:text-[1rem] text-[0.8rem] lg:h-10 md:h-6 sm:h-10 h-8 rounded-md border-1 border-[#DAE8F0] py-1.5 px-2 text-[#B6B6B6] shadow-sm ring-1 ring-inset ring-[#DAE8F0] outline-[#DAE8F0] "
                  />
              </div>
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  type="message"
                  placeholder='Write Message'
                  required
                 className="block w-full sm:w-[80%] md:text-[0.75rem] lg:text-[1rem] sm:text-[1rem] text-[0.8rem] lg:h-28 md:h-16 sm:h-28 h-20 rounded-md border-1 border-[#DAE8F0] py-1 px-2 text-[#B6B6B6] shadow-sm ring-1 ring-inset ring-[#DAE8F0] outline-[#DAE8F0] "
                />
              </div>
              <div className="my-6 sm:mx-[25%] text-center">
                <button className='lg:px-[18%] md:px-[15%] px-[18%]  md:text-[0.75rem] lg:text-[0.8rem] sm:text-[1rem] text-[0.75rem] py-[2%] sm:bg-[#C7DCE8] rounded-md sm:text-[#012F6B] bg-[#012F6B] text-[#ffffff] font-semibold'>Send</button>
              </div>
        </div>
     
     </div>
    </div>

    <div className='my-8 border-2 border-black relative h-full'>
        <img src={mapImage} alt="ponka_contactUs" className="w-full" />
        <div className='absolute top-[40%] sm:top-[45%] sm:left-[45%] left-[28%] lg:left-[42%] md:left-[40%] rounded-md'>
    <div className='px-6 sm:px-8 lg:px-8 py-1 sm:py-1.5 lg:py-1 md:py-1 md:px-8 sm:bg-[#DAE8F0] bg-[#012F6B] rounded-sm sm:rounded-md '>
      <button className='text-[0.7rem] lg:text-[1rem] md:text-[0.75rem] rounded-md sm:text-[#012F6B] text-[#ffffff] font-semibold flex flex-row'>
        Show <span className='block sm:hidden mx-1'> on </span> maps</button>
    </div>
    </div>
    </div>

    </div>
  )
}

export default Contact
