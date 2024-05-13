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
                link: '#'
            },
            {
                item: 'ОС “Магістр”',
                link: '#'
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
        target: 'Абітурієнтам',
        link: '#',
        content: [
            {
                item: 'ОС “Бакалавр”',
                link: '#'
            },
            {
                item: 'ОС “Магістр”',
                link: '#'
            },
            {
                item: 'ОС “Доктор філософії”',
                link: '#'
            },
            {
                item: 'Правила прийому',
                link: '#'
            },
        ],
    },
    {
        target: 'Наука',
        link: '#',
        content: [
            {
                item: 'Аспірантура',
                link: '#'
            },
            {
                item: 'Докторантура',
                link: '#'
            },
            {
                item: 'Дисертації',
                link: '#'
            },
            {
                item: 'Науковий семінар',
                link: '#'
            },
            {
                item: 'Наукові конференції',
                link: '#'
            },
            {
                item: 'Публікації кафдери',
                link: '#'
            },
        ],
    },
    {
        target: 'Бібліотека',
        link: '#',
        content: [
            {
                item: 'Підручники',
                link: '#'
            },
            {
                item: 'Монографії',
                link: '#'
            },
            {
                item: 'Навчальні посібники',
                link: '#'
            },
            {
                item: 'Навчальна література',
                link: '#'
            },
            {
                item: 'Методичні рекомендації',
                link: '#'
            },
            {
                item: 'Науково-пошукові системи',
                link: '#'
            },
            {
                item: 'Наукові бібліотеки',
                link: '#'
            },
            {
                item: 'Наукові журнали',
                link: '#'
            },
            {
                item: 'Наукові організації',
                link: '#'
            },
            {
                item: 'Самоосвіта',
                link: '#'
            },
        ],
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