import FooterCard from "../fragments/FooterCard"

const Footer = () => {
  return (
    <div className='pt-20 bg-zinc-900 flex flex-col justify-center items-center'>
      <div className='w-[75rem] flex border-b border-zinc-500 pb-20'>
        <div>
          <img src="images/dinoco-logo.png" alt="" className='w-32'/>
        </div>
        <FooterCard 
          title="showroom"
          text1="Rent car"
          text2="New cars for sale"
          text3="Used cars for sale"
          text4="Sell your car"
          text5="Login as Dealer"
        />
        <FooterCard 
          title="about dinoco"
          text1="About Us"
          text2="How it works"
          text3="Testimony"
          text4="Career"
          text5="Dinoco Academy"
        />
        <FooterCard 
          title="help center"
          text1="FAQ"
          text2="Contact Us"
          text3="Office Location"
          text4="Privacy & Policy"
          text5="Term & Conditions"
        />
        <div className='text-zinc-100 flex flex-col gap-4 mx-16'>
          <h1 className='text-zinc-400 uppercase mb-2'>subscribe to our newsletter</h1>
          <p className="text-white text-sm">Get the latest discounts, promotions & exclusive benefits sent straight to your email</p>
          <div className="bg-white p-1 pl-4  rounded-lg flex justify-between mt-2">
            <input type="text" placeholder="Type you email" className="text-sm outline-none text-black"/>
            <button className="bg-blue-500 text-sm rounded-lg py-3 px-8 font-semibold ease-linear duration-100 hover:bg-black hover:text-white">Send</button>
          </div>
          <div className="flex gap-10 text-xl mt-2">
            <i class="fa-brands fa-instagram cursor-pointer"></i>
            <i class="fa-brands fa-linkedin-in cursor-pointer"></i>
            <i class="fa-brands fa-youtube cursor-pointer"></i>
            <i class="fa-brands fa-twitter cursor-pointer"></i>
          </div>
        </div>
      </div>
      <span className="text-zinc-200 my-10">©2024 All rights reserved by <span className="text-white font-semibold">Dinoco</span> built by Pramudya Diagusta</span>
    </div>
  )
}

export default Footer