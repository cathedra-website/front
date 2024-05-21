import { Book } from "./Book"

const MOCK: Book[] = [
    {
        authors: ['Кривий С.Л.'],
        isbn: '978-617-7770-45-8',
        lang: 'українська',
        name: 'Скінченні автомати: теорія, алгоритми, складність',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaM9ed8SHyYHsGnyNct6Jjezc1KCIncWT8Mj-5qxmZrg&s',
        size: '428 с.',
        vyd: 'Чернівці: Видавничий дім "Букрек". – 2020'
    },
    {
        authors: ['Кривий С.Л.'],
        isbn: '978-617-7770-45-8',
        lang: 'українська',
        name: 'Скінченні автомати: теорія, алгоритми, складність',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaM9ed8SHyYHsGnyNct6Jjezc1KCIncWT8Mj-5qxmZrg&s',
        size: '428 с.',
        vyd: 'Чернівці: Видавничий дім "Букрек". – 2020'
    },
    {
        authors: ['Кривий С.Л.'],
        isbn: '978-617-7770-45-8',
        lang: 'українська',
        name: 'Скінченні автомати: теорія, алгоритми, складність',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaM9ed8SHyYHsGnyNct6Jjezc1KCIncWT8Mj-5qxmZrg&s',
        size: '428 с.',
        vyd: 'Чернівці: Видавничий дім "Букрек". – 2020'
    },
    {
        authors: ['Кривий С.Л.'],
        isbn: '978-617-7770-45-8',
        lang: 'українська',
        name: 'Скінченні автомати: теорія, алгоритми, складність',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaM9ed8SHyYHsGnyNct6Jjezc1KCIncWT8Mj-5qxmZrg&s',
        size: '428 с.',
        vyd: 'Чернівці: Видавничий дім "Букрек". – 2020'
    }
]

export const LibraryPage = () => {
    return <>
        <h2 className="font-bold text-5xl">Електронна бібліотека</h2>
        <div className="grid grid-cols-3 gap-10">
            {
                MOCK.map(book => <Book {...book} />)
            }
        </div>
    </>
}