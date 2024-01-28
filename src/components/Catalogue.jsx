import TypeCard from "../fragments/TypeCard"
import CarCard from "../fragments/CarCard"
import Button from "../elements/Button"

const Catalogue = () => {
  return (
    <section className='h-full py-32 flex justify-center items-center px-5 xl:px-0'>
        <div className='w-[75rem]'>
            <div className='text-center w-full'>
                <h1 className='text-4xl text-indigo-900 font-semibold'>Let's Find Your Dream Car</h1>
                <p className='text-slate-500 mt-6'>We recommend the very best an newest cars today. and also a friendly price for you</p>
            </div>
            <div className="flex flex-wrap gap-6 mt-16 justify-center xl:justify-start">
                <CarCard />
            </div>  
        </div>
    </section>
  )
}

export default Catalogue