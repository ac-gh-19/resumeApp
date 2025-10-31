export default function Header({title = "Title"}) {
    return (
        <header className="fixed px-6 py-3 border-b w-full z-10 bg-[#151515]">
            <h1 className="text-xl font-bold">
                {title}
            </h1>
        </header>
    )
}