import TestimonyCard from "../fragments/TestimonyCard"
import Users from "../elements/Users"

const Testimony = () => {
    
  return (
    <section className='xl:flex justify-center items-center h-[35rem] px-5 xl:px-0 hidden'>
        <div className='w-[75rem] xl:flex gap-10 items-center'>
            <div className="xl:w-[70%]">
                <TestimonyCard />
            </div>
            <div className='w-[30%] my-5'>
                <h1 className="text-4xl font-semibold text-indigo-900">Dinoco's Client stories</h1>
                <p className="mt-5 leading-loose text-zinc-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odit recusandae cumque iure porro suscipit.</p>
                <div className="flex mt-10">
                    <Users 
                        position=""
                        image="images/elonmusk.jpg"
                    />
                    <Users 
                        position="translate-x-[50px]"
                        image="images/harrystyles.jpg"
                    />
                    <Users 
                        position="translate-x-[100px]"
                        image="images/liluzi.jpg"
                    />
                    <Users 
                        position="translate-x-[150px]"
                        image="images/users.jpg"
                    />
                </div>
                <p className="font-semibold text-2xl flex items-center gap-2 mt-20 text-zinc-700">180k+ <span className="text-zinc-500 font-normal text-base">Dinoco Users</span></p>
            </div>
        </div>
    </section>
  )
}

export default Testimony