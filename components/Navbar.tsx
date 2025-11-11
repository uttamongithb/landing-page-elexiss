

const Navbar = () => {
  return (
    
    <div className="fixed w-full bg-[#030712] flex  justify-between items-center h-16 z-1">
      <div className="text-[#ffffff] ml-5">
        <h1 className="font-sans">Elexiss</h1>
      </div>

      <div>
  <ul className={`text-[#ffffff] text-[14px]  flex gap-6 font-semibold font-sans ml-28`}>
          <li><a href="/solutions" >Solutions</a></li>
          <li><a href="/company">Company</a></li>
          <li><a href="/licensing">Licensing</a></li>
          <li><a href="/resources">Resources</a></li>
        </ul>
      </div>


      <div className=" flex gap-2 mr-6">
        <button className={`text-[#030712] bg-[#ffffff] w-[70px] h-9 rounded-lg font-semibold text-[14px] text-center pb-px font-sans`}>Sign in</button>
        <button className={`bg-[#224eed] w-[105px] h-9 text-[#ffffff] rounded-lg text-[14px] font-semibold pb-px font-sans`}>Talk to sales</button>
      </div>
    </div>
  )
}

export default Navbar