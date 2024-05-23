export const navbar: Navbar[] = [
    {
        target: 'Про кафедру',
        link: '/cathedra',
        content: [
            {
                item: 'Привітання завідувача',
                link: '/cathedra/greeting'
            },
            {
                item: 'Історія кафедри',
                link: '/cathedra/history'
            },
            {
                item: 'Співробітники',
                link: '/cathedra/employees'
            },
        ],
    },
    {
        target: 'Навчання',
        link: '/study',
        content: [
            {
                item: 'ОС “Бакалавр”',
                link: '/study/bakalavr'
            },
            {
                item: 'ОС “Магістр”',
                link: '/study/magistr'
            },
            {
                item: 'ОС “Доктор філософії”',
                link: '#'
            },
            {
                item: 'Навчальна література',
                link: '#'
            },
            {
                item: 'Курсові та дипломні роботи',
                link: '#'
            },
        ],
    },
    {
        target: 'Бібліотека',
        link: '/library/?page=1',
    },
    {
        target: 'Контакти',
        link: '#'
    }
]

type Navbar = {
    target: string
    link: string
    content?: Array<{
        item: string
        link: string
    }>
}