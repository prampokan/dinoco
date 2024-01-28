import { useState } from "react"
import Button from "../elements/Button"
import axios from "axios"
import { useEffect } from "react"

const CarCard = () => {
  
  const [cars, setCars] = useState([])

  useEffect(()=> {
    getCars()
  }, [])

  const getCars = async() => {
    const response = await axios.get("http://localhost:5000/cars")
    setCars(response.data);
  }

  return (
    <>
        {!cars ? "server is off" : cars.map((car)=> (
        <div className='md:w-[24rem] bg-zinc-50 rounded-2xl p-6 shadow-sm ease-linear duration-100 hover:bg-white hover:shadow-xl' key={car.id}>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='font-semibold text-lg text-zinc-700'>{car.brand}: {car.name}</p>
                    <p className='text-zinc-400 mt-1'>{car.type}</p>
                </div>
                <div className='bg-white p-2 rounded-lg text-zinc-400 shadow-sm cursor-pointer ease-linear duration-100 hover:shadow hover:text-blue-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>
                </div>
            </div>
            <div className="my-5 md:h-[155px] overflow-hidden">
                <img src={car.url} alt="" className=""/>
            </div>
            <div className="flex justify-between items-center">
                <div className="bg-blue-100 text-blue-500 py-2 px-3 rounded text-sm font-medium">
                    Free Test Drive
                </div>
                <p className="font-semibold text-xl text-zinc-600">${car.price.toLocaleString()}</p>
            </div>
            <Button
                textColor="text-zinc-700"
                bgColor="bg-white"
                hover="hover:bg-zinc-900 hover:text-zinc-100"
            >
                Make an Offer
            </Button>
        </div>
        ))}
    </>
  )
}

export default CarCard