import { About } from "./sections/About"
import { Links } from "./sections/Links"
import { NewsCarousel } from "./sections/NewsCarousel/NewsCarousel"
import { Programms } from "./sections/Programms/Programms"
import { Welcome } from "./sections/Welcome"

const sections = [
    <Welcome />,
    <NewsCarousel />,
    // <About />,
    // <Programms />,
    // <Links />,
]

export const Home = () => {
    // ? gap to be discussed    
    return <div className="flex flex-col gap-[5.5rem]"> 
        {
            sections.map(i => i)
        }
    </div>
} 