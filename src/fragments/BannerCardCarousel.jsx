import React from 'react'

const BannerCardCarousel = () => {
  return (
    <>
                    <div className="bg-zinc-800 h-[370px] rounded-lg border border-zinc-100 text-zinc-100 p-6">
                        <p className="font-semibold text-xl">BMW i4: M Sport</p>
                        <p className="text-zinc-300">Full - Electric Car</p>
                        <div className='flex justify-center'>
                            <img src="images/118.png" alt="bmw-i4" className="w-80" />
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="bg-zinc-600 p-2 rounded text-sm flex items-center gap-2">
                                Free Test Drive
                            </div>
                            <p className="font-semibold text-xl">$266.500</p>
                        </div>
                    </div>
                    <button className="uppercase text-zinc-100 bg-blue-500 w-full rounded-lg h-12 mt-6 text-md font-semibold text-sm">
                        make an offer
                    </button>
                    <div className="flex justify-between items-center mt-8">
                        <p className="text-xl font-medium text-zinc-100">01<span className="text-sm text-zinc-300">/5</span></p>
                        <div className="flex gap-3">
                            <div className="text-zinc-300 bg-zinc-900 border border-zinc-300 rounded-lg p-2 cursor-pointer transition duration-150 hover:bg-zinc-700">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-slot="icon" class="w-6 h-6">
                                    <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div className="text-zinc-300 bg-zinc-900 border border-zinc-300 rounded-lg p-2 cursor-pointer transition duration-150 hover:bg-zinc-700">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-slot="icon" class="w-6 h-6">
                                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
    </>
  )
}

export default BannerCardCarousel