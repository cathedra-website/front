import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { NewsPreviewProps } from "./props"
import { NewsPreview } from "./NewsPreview"

const MOCK_NEWS: NewsPreviewProps[] = [
    {
        name: 'Проходження практики 2020-2021 навчальний рік',
        description: 'Шановні студенти. Компанія-партнер нашої кафедри Huspi запрошує вас до проходження практики, виконання курсових та дипломних проектів на базі компанії. телефон для довідок: 0504055506.'
    },
    {
        name: 'Проходження практики 2020-2021 навчальний рік',
        description: 'Шановні студенти. Компанія-партнер нашої кафедри Huspi запрошує вас до проходження практики, виконання курсових та дипломних проектів на базі компанії. телефон для довідок: 0504055506.'
    },
    {
        name: 'Проходження практики 2020-2021 навчальний рік',
        description: 'Шановні студенти. Компанія-партнер нашої кафедри Huspi запрошує вас до проходження практики, виконання курсових та дипломних проектів на базі компанії. телефон для довідок: 0504055506.'
    },
]

export const NewsCarousel = () => {
    return (
        <div>
            <h2></h2>
            <div className="h-[24.2rem]">
                <Carousel>
                    <CarouselContent>
                        {
                            MOCK_NEWS.map(item => <CarouselItem className="basis-1/2"><NewsPreview {...item}/></CarouselItem>)
                        }
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}