import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TestimonyCard = () => {
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
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
      };
  return (
    <>
    <Slider {...settings}>
        {data.map((d)=> (
            <div className='w-full flex bg-zinc-50 p-7 rounded-2xl gap-7 mb-5'>
                <div className="flex gap-8">
                    <div className='bg-zinc-200 w-[40%] h-[22rem] rounded-2xl overflow-hidden'>
                        <img src={d.image} alt="" className="object-cover"/>
                    </div>
                    <div className='w-[60%] flex flex-col justify-between'>
                        <div>
                            <i className="fa-solid fa-quote-right text-4xl text-zinc-400"></i>
                            <p className='text-lg font-semibold mt-2 text-zinc-800 leading-loose'>{d.review}</p>
                        </div>
                        <div className=''>
                            <div className='flex gap-1 mb-2'>
                                {stars}   
                            </div>
                            <span className='font-semibold'>{d.name}</span>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </Slider>
    </>
  )
}

const data = [
    {
        name: "IShowSpeed",
        image: "images/speed.jpg",
        review: "YO! IShowSpeed in the flesh, rollin' out of Dinoco the Porsche Cayman so fine it should come with a drool bucket! These dudes ain't just sellin' cars, they're sellin' dreams, bruh! Treated me like royalty, Sewey for Dinoco, baby!",
    },
    {
        name: "Central Cee",
        image: "images/centralcee.jpg",
        review: "Aight, listen up, fam! Central Cee here, fresh off the lot at Dinoco with a Lambo Urus so mean it puts the mafia on edge. These guys at Dinoco, they ain't just dealin' wheels, they're dealin' respect!",
    },
    {
        name: "Kanye West",
        image: "images/kanye.jpg",
        review: "Yo, it's Kanye comin' at you live from Dinoco! Man, these ain't your daddy's car dealers, these guys are dream weavers. They just hooked me up with a Mercedes-Benz G63 AMG so mean it makes the paparazzi apologize for trespassin'",
    },

]

export default TestimonyCard