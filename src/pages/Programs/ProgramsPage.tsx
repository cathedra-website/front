import { Table } from "@mantine/core"

type Program = {
    block: string
    name: string
}

const MOCK_DATA :{semester: string, sub: Program[]}[]= [
    {
        semester: '1-ий семестр',
        sub: [
            {
                block: 'ОД',
                name: 'Алгебра та геометрія'
            },
            {
                block: 'ОД',
                name: 'Алгебра та геометрія'
            },
            {
                block: 'ОД',
                name: 'Алгебра та геометрія'
            },
            {
                block: 'ОД',
                name: 'Алгебра та геометрія'
            },
            {
                block: 'ОД',
                name: 'Алгебра та геометрія'
            }
        ]
    },
    {
        semester: '2-ий семестр',
        sub: [
            {
                block: 'ОД',
                name: 'Алгебра та геометрія'
            },
            {
                block: 'ОД',
                name: 'Алгебра та геометрія'
            },
            {
                block: 'ОД',
                name: 'Алгебра та геометрія'
            },
            {
                block: 'ОД',
                name: 'Алгебра та геометрія'
            },
            {
                block: 'ОД',
                name: 'Алгебра та геометрія'
            }
        ]
    }
]

export const ProgramsPage = () => {
    return <>
        <h2 className="font-bold text-5xl">Програми навчальних дисциплін</h2>
        {
            MOCK_DATA.map(item => <div className="w-[90%]">
                <h3 className="font-medium text-3xl mb-3">{item.semester}</h3>
                <Table borderColor="dark" verticalSpacing='md'>
                    <Table.Thead className="font-medium">
                        <Table.Tr>
                            <Table.Th className="text-2xl text-center w-[5%]">№</Table.Th>
                            <Table.Th className="text-2xl">Дисципліни</Table.Th>
                            <Table.Th className="text-2xl text-center w-[10%]">Блок</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {
                            item.sub.map((sub, index) => <>
                                <Table.Tr key={index} className="font-light">
                                    <Table.Td className="text-2xl">{index}</Table.Td>
                                    <Table.Td className="text-2xl">{sub.name}</Table.Td>
                                    <Table.Td className="text-2xl">{sub.block}</Table.Td>
                                </Table.Tr>
                            </>)
                        }
                    </Table.Tbody>
                </Table>
            </div>)
        }
    </>
} 