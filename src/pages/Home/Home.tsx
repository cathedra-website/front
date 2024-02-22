import { About } from "./sections/About"
import { Welcome } from "./sections/Welcome"

const sections = [
    <Welcome />,
    <About />,
]

export const Home = () => {
    return <div className="flex flex-col gap-20 px-36">
        {
            sections.map(i => i)
        }
    </div>
} 