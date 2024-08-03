

type HeadingProps = {
    text: string
}

export function Heading({ text }: HeadingProps) {
    return (
        <div className="my-10 flex items-center">
            <h1 className="text-2xl text-white text-nowrap uppercase font-extrabold pr-10">{text}</h1>
            <div className="w-full h-1 bg-[#D5173B]"></div>
        </div>
    )
}