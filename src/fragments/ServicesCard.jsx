const ServicesCard = (props) => {

    const {count, text} = props
    return (
        <div className="bg-zinc-100 md:w-1/3 flex flex-col p-8 rounded-lg mb-3 md:mb-0">
            <h1 className="text-3xl font-bold text-zinc-700">{count}</h1>
            <p className="uppercase text-sm text-zinc-500 pt-2">{text}</p>
        </div>
    )
}

export default ServicesCard