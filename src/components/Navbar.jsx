
function Navbar() {
  return (
    <>
      <div className='fixed z-[999] backdrop-blur-md w-full px-20 py-2 flex justify-between items-center'>
        <div className='logo font-["Ruska"] text-xl'>
        <h1>Tushkie</h1>
        </div>
        <div className='links font-["Neue"] flex gap-10'>
          {['Sevices', 'Our Work', 'About Us', 'Insights', 'contact'].map((item, index) => (
            <a key={index} className={`text-md capitalize font-light ${index === 4 && 'ml-32'}`}>{ item }</a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Navbar