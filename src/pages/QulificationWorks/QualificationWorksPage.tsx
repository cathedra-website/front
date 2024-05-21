import { Table } from "@mantine/core"

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
    return <>
        <h2 className="font-bold text-5xl">Список випускних робіт</h2>
        {
            MOCK.map(item => <div>
                <h3 className="font-medium text-3xl mb-3">{item.name}</h3>
                <Table borderColor="dark" verticalSpacing='md'>
                    <Table.Thead className="font-medium">
                        <Table.Tr>
                            <Table.Th className="text-2xl text-center w-[5%]">№</Table.Th>
                            <Table.Th className="text-2xl w-[25%]">П.І.Б.студента</Table.Th>
                            <Table.Th className="text-2xl w-[50%]">Тема бакалаврської роботи</Table.Th>
                            <Table.Th className="text-2xl w-[30%]">Науковий керівник</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {
                            item.works.map((work, index) => <>
                                <Table.Tr key={index} className="font-light">
                                    <Table.Td className="text-2xl">{index + 1}</Table.Td>
                                    <Table.Td className="text-2xl">{work.student}</Table.Td>
                                    <Table.Td className="text-2xl ">{work.name}</Table.Td>
                                    <Table.Td className="text-2xl ">{work.lead}</Table.Td>
                                </Table.Tr>
                            </>)
                        }
                    </Table.Tbody>
                </Table>
            </div>)
        }
    </>
}