import '../gradient.css';
import ServicesCard from '../fragments/ServicesCard';

const Services = () => {
    return (
        <section className="gradient h-full py-24 flex justify-center items-center px-5 xl:px-0">
            <div className='w-[75rem] xl:flex'>
                <div className='xl:w-1/2'>
                    <div className=''>
                        <h1 className='text-5xl font-semibold text-zinc-100'>All the service we will provide you</h1>
                        <p className='text-zinc-200 mt-8 leading-loose'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita fuga nobis atque nisi non aliquid maxime unde dolore, optio odio aspernatur dicta harum rerum ex rem quibusdam. Ut, velit cupiditate.</p>
                    </div>
                    <div className='md:flex gap-4 mt-10 xl:mt-32'>
                        <ServicesCard 
                            count="180K +"
                            text="active users"
                        />
                        <ServicesCard 
                            count="12K +"
                            text="good review"
                        />
                        <ServicesCard 
                            count="48K +"
                            text="car available"
                        />
                    </div>
                </div>
                <div className='xl:w-1/2 xl:pl-16 mt-10 xl:mt-0'>
                    <div className='bg-white shadow-xl rounded-xl divide-y divide-zinc-200'>
                        <div className='p-8'>
                            <div className='flex items-center gap-4'>
                                <h2 className='text-xl font-semibold capitalize'>rent car</h2>
                                <p className='text-sm text-zinc-500'>1.6K car availables</p>
                            </div>
                            <div className='flex mt-3'>
                                <p className='text-sm text-zinc-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus possimus assumenda molestiae inventore facere laborum, quae voluptas maxime vero corrupti!</p>
                                <div className='pl-10'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-slot="icon" class="w-6 h-6">
                                        <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='p-8'>
                            <div className='flex items-center gap-4'>
                                <h2 className='text-xl font-semibold capitalize'>buy car</h2>
                                <p className='text-sm text-zinc-500'>1.6K car availables</p>
                            </div>
                            <div className='flex mt-3'>
                                <p className='text-sm text-zinc-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus possimus assumenda molestiae inventore facere laborum, quae voluptas maxime vero corrupti!</p>
                                <div className='pl-10'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-slot="icon" class="w-6 h-6">
                                        <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='p-8'>
                            <div className='flex items-center gap-4'>
                                <h2 className='text-xl font-semibold capitalize'>sell car</h2>
                                <p className='text-sm text-zinc-500'>1.6K car availables</p>
                            </div>
                            <div className='flex mt-3'>
                                <p className='text-sm text-zinc-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus possimus assumenda molestiae inventore facere laborum, quae voluptas maxime vero corrupti!</p>
                                <div className='pl-10'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-slot="icon" class="w-6 h-6">
                                        <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services