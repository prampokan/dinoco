import { useState } from "react"

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="flex bg-zinc-900 items-center justify-center w-full fixed px-5 xl:px-0 z-[999]">
            <div className="xl:flex w-[75rem] items-center justify-between py-3">
                <div className="text-zinc-100 bg-zinc-700 p-3 rounded hidden xl:flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-slot="icon" class="w-5 h-5">
                        <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                    </svg>
                    <select name="address" id="address" className="bg-zinc-700 text-white outline-none text-sm font-medium w-[210px]" >
                        <option value="semarang">
                            Semarang, Indonesia
                        </option>
                        <option value="jakarta">
                            Jakarta, Indonesia
                        </option>
                    </select>
                </div>
                <div className="flex items-center gap-4">
                    <img src="images/dinoco-logo.png" alt="" className="w-[40px]"/>
                    <h1 className="text-white font-bold text-2xl">Dinoco</h1>
                </div>
                <div onClick={() => setOpen(!open)} className="text-zinc-100 text-2xl absolute right-5 top-4 cursor-pointer xl:hidden">
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <div className={`xl:flex gap-10 bg-zinc-900 items-center absolute xl:static  w-full xl:z-auto z-[-1] left-0 xl:w-auto px-5 xl:px-0 pb-5 xl:pb-0 transition-all duration-300 ease-in ${open ? 'top-12 opacity-100' : 'top-[-100px] opacity-0 xl:opacity-100'}`}>
                    <div className="text-zinc-100 xl:mt-0 mt-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                    <div className="text-zinc-100 xl:my-0 my-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-slot="icon" class="w-5 h-5">
                            <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div className="xl:flex bg-zinc-700 p-2 gap-6 border border-gray-400 rounded">
                        <div className="text-zinc-100 flex items-center pl-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-slot="icon" class="w-5 h-5">
                                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div className="text-zinc-100 bg-zinc-400 p-1 rounded xl:mt-0 mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-slot="icon" class="w-5 h-5">
                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar