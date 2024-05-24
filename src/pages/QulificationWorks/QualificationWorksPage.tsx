import { Route } from "@/routes/study/theses.$year"
import { Table } from "@mantine/core"
import { useNavigate } from "@tanstack/react-router"

type Work = {
    student: string
    name: string
    lead: string
}

const MOCK : {name: string, works: Work[]}[] = [
    {
        name: 'Бакалаврські роботи студентів кафедри ІПС-41 на 2020-2021 н.р.',
        works: [
            {
                student: 'Величко Таїсія Сергіївна',
                name: 'Web-сервіс для моніторингу кіберспортивних матчів в режимі реального часу',
                lead: 'Доцент Катеринич Л.О.'
            },
            {
                student: 'Бухало Михайло Олександрович',
                name: 'Web-сервіс для моніторингу кіберспортивних матчів в режимі реального часу',
                lead: 'Доцент Катеринич Л.О.'
            },
            {
                student: 'Бухало Михайло Олександрович',
                name: 'Web-сервіс для моніторингу кіберспортивних матчів в режимі реального часу',
                lead: 'Доцент Катеринич Л.О.'
            },
            {
                student: 'Бухало Михайло Олександрович',
                name: 'Розробка програмного забезпечення для автоматичного створення телеграм-ботів для інформаційної підтримки навчального процесу',
                lead: 'Доцент Катеринич Л.О.'
            },
            {
                student: 'Бухало Михайло Олександрович',
                name: '3D графіка та анімація у прикладному застосуванні (мультимедійні додатки, мобільні додатки, тощо)',
                lead: 'Доцент Катеринич Л.О.'
            }
        ]
    },
    {
        name: 'Бакалаврські роботи студентів кафедри ІПС-41 на 2020-2021 н.р.',
        works: [
            {
                student: 'Бухало Михайло Олександрович',
                name: 'Web-сервіс для моніторингу кіберспортивних матчів в режимі реального часу',
                lead: 'Доцент Катеринич Л.О.'
            },
            {
                student: 'Бухало Михайло Олександрович',
                name: 'Web-сервіс для моніторингу кіберспортивних матчів в режимі реального часу',
                lead: 'Доцент Катеринич Л.О.'
            },
            {
                student: 'Бухало Михайло Олександрович',
                name: 'Web-сервіс для моніторингу кіберспортивних матчів в режимі реального часу',
                lead: 'Доцент Катеринич Л.О.'
            },
            {
                student: 'Бухало Михайло Олександрович',
                name: 'Web-сервіс для моніторингу кіберспортивних матчів в режимі реального часу',
                lead: 'Доцент Катеринич Л.О.'
            },
            {
                student: 'Бухало Михайло Олександрович',
                name: 'Web-сервіс для моніторингу кіберспортивних матчів в режимі реального часу',
                lead: 'Доцент Катеринич Л.О.'
            }
        ]
    }
]

export const QualificationWorksPage = () => {
    const qualificationWorks = Route.useLoaderData()
    const navigate = useNavigate({})
    return <>
        <h2 className="font-bold text-5xl">Список випускних робіт на {qualificationWorks.year}</h2>
        <Table borderColor="dark" verticalSpacing='md'>
                    <Table.Thead className="font-medium">
                        <Table.Tr>
                            <Table.Th className="text-2xl text-center w-[5%]">№</Table.Th>
                            <Table.Th className="text-2xl w-[20%]">П.І.Б.студента</Table.Th>
                            <Table.Th className="text-2xl w-[50%]">Тема бакалаврської роботи</Table.Th>
                            <Table.Th className="text-2xl w-[40%]">Науковий керівник</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                    {
                        qualificationWorks.qualification_work.map((work, index) => {
                            const supervisorAttr = work.scientific_supervisor?.is_active ? {
                                onClick: () => navigate({ to: '/cathedra/employees/$slug', params: { slug: work.scientific_supervisor?.slug ?? ''}}),
                                className: 'cursor-pointer text-[#12A1DD]'
                            } : {}
                            return <>
                            <Table.Tr key={index} className="font-light">
                            <Table.Td className="text-2xl">{index + 1}</Table.Td>
                            <Table.Td className="text-2xl">{work.full_name}</Table.Td>
                            <Table.Td className="text-2xl ">{work.topic_of_work}</Table.Td>
                            <Table.Td className="text-2xl"><span {...supervisorAttr}>{work.scientific_supervisor?.short_name_with_position}</span></Table.Td>
                            </Table.Tr>
                        </>
                        })
                    }
                    </Table.Tbody>
                </Table>
    </>
}