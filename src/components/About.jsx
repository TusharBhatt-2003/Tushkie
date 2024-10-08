
function About() {
  return (
    <div className='w-full p-20 bg-[#c7d053] rounded-tl-3xl rounded-tr-3xl'>
        <h1 className='font-["Neue"] text-[4vw] leading-[4.5vw] tracking-tighter'>Tushkie is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
        <div className='w-full flex gap-5 mt-20 pt-10 border-t-[1px] border-[#294808] '>
            <div className='w-1/2 '>
                <h1 className='text-7xl'>Our Approach :</h1>
                <button className='flex gap-10 items-center px-5 py-6 mt-10 bg-black rounded-full text-white '>Read More
                <div className='w-5 h-5 bg-white rounded-full hover:scale-150'></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-3xl bg-[#1d6247dd]'></div>
        </div>
    </div>
  )
}

export default About