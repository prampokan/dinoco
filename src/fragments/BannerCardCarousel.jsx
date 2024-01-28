import React from 'react'
import Button from '../elements/Button'
import { useState, useEffect } from 'react'
import axios from 'axios'

const BannerCardCarousel = () => {

  const [cars, setCars] = useState([])
  
  useEffect(()=> {
    getCars()
  }, [])

  const getCars = async() => {
    const response = await axios.get("http://localhost:5000/cars")
    setCars(response.data.slice(0, 5))
  }

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? cars.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
  }
  const nextSlide = () => {
        const isLastSlide = currentIndex === cars.length - 1
        const newIndex = isLastSlide ? cars.length - cars.length : currentIndex + 1 
        setCurrentIndex(newIndex)
  }

  return (
      <>
      {cars.length > 0 && (
        <div key={cars[currentIndex].id}>
            <div className="bg-zinc-800 h-[370px] rounded-lg border border-zinc-100 text-zinc-100 p-6">
                <div className='flex justify-between items-start'>
                    <div>
                        <p className="font-semibold text-xl">{cars[currentIndex].brand}: {cars[currentIndex].name}</p>
                        <p className="text-zinc-300">{cars[currentIndex].type}</p>
                    </div>
                    <div className='bg-white p-2 text-black font-bold rounded-md text-[12px]' >
                        NEW
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='h-[14rem] flex items-center overflow-hidden'>
                        <img src={cars[currentIndex].url} alt="bmw-i4" className="w-80 duration-500" />
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="bg-zinc-600 py-2 px-3 rounded text-sm flex items-center gap-2">
                        Free Test Drive
                    </div>
                    <p className="font-semibold text-xl">${cars[currentIndex].price.toLocaleString()}</p>
                </div>
            </div>
            <Button
                textColor="text-zinc-100"
                bgColor="bg-blue-500"
                hover="hover:text-zinc-900 hover:bg-zinc-100"
                profile="uppercase"
            >
                make an offer
            </Button>
            <div className="flex justify-between items-center mt-8">
                <p className="text-xl font-medium text-zinc-100">{currentIndex + 1}<span className="text-sm text-zinc-300">/5</span></p>
                <div className="flex gap-3">
                    <div onClick={prevSlide} className="text-zinc-300 bg-zinc-900 border border-zinc-300 rounded-lg p-2 cursor-pointer transition duration-150 hover:bg-zinc-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-slot="icon" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div onClick={nextSlide} className="text-zinc-300 bg-zinc-900 border border-zinc-300 rounded-lg p-2 cursor-pointer transition duration-150 hover:bg-zinc-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-slot="icon" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div> 
            </div>  
      )} 
    </>
  )
}

export default BannerCardCarousel