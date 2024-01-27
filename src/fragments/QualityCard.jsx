const QualityCard = (props) => {

    const {icon, header, text} = props
    return (
        <div className="flex items-center gap-4 mb-10 xl:mb-0">
            <div className="bg-blue-200 text-blue-500 p-3 rounded-full">
                {icon}
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">{header}</h1>
                <p className="text-sm text-zinc-500">{text}Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero nobis</p>
            </div>
        </div>
    )
}

export default QualityCard