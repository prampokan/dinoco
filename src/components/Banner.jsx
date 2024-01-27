import BannerCardCarousel from "../fragments/BannerCardCarousel"

const Banner = () => {
    const stars = []
    for(let i = 1 ; i <= 5 ; i ++) {
        stars.push(
            <div className="text-yellow-500" key={i}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" data-slot="icon" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                </svg>
            </div>
        )
    }   

    return (
        <section className="bg-zinc-900 min-h-full xl:h-screen py-28 flex justify-center items-center px-5 xl:px-0">
            <div className="w-[75rem] flex flex-col xl:flex-row items-center">
                <div className="text-zinc-100 xl:w-[23rem] flex flex-col justify-center">
                    <p className="uppercase text-zinc-300">best cars marketplace</p>
                    <h1 className="font-semibold text-6xl py-3 xl:py-10">
                        Find & sell your best car easily
                    </h1>
                    <p>
                        We will help you sell or buy & rent your dream car here easily and quickly that is reliable 
                    </p>
                    <div className="flex mt-5 xl:mt-10">
                        {stars}
                    </div>
                    <p className="font-semibold text-xl flex items-center gap-2 mt-2">12k+ <span className="font-light text-sm">Good Reviews</span></p>
                </div>
                <div className="xl:w-[30rem] w-full mt-10 xl:mt-0">
                    <div className="bg-zinc-300 h-[570px] w-full rounded-xl">

                    </div>
                </div>
                <div className="w-full xl:w-[22rem] xl:ml-10 mt-10 xl:mt-0">
                    <BannerCardCarousel/>
                </div>
            </div>
        </section>
    )
}

export default Banner