import { Paragraph } from "@/components/styled/Paragrph"
import { Route } from "@/routes/study/disciplines.$year"
import { Table } from "@mantine/core"

export const ProgramsPage = () => {
    const { types, disciplines } = Route.useLoaderData()
    const semesters = new Set<number>()
    disciplines.data.attributes.disciplines.data.forEach(d => semesters.add(d.attributes.semester))
    const modified = [...semesters].map(sem => {
        const discs = disciplines.data.attributes.disciplines.data.filter(d => d.attributes.semester === sem)
        return [sem, discs] as const
    }).filter(i => i).sort()

    return <>
        <h2 className="font-bold text-5xl">{disciplines.data.attributes.description}</h2>
        <div>
            <Paragraph>Скорочення назв блоків:</Paragraph>
            <ul className="font-light text-2xl list-disc list-inside">
                {
                    types.data.map(type => <li>{type.attributes.short_name} — {type.attributes.full_name}</li>)
                }
            </ul>
        </div>
        {
            modified.map(([semestr, subjects]) => <div>
                <h3 className="font-medium text-3xl mb-3">{semestr}-й семестр</h3>
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
                        subjects.map((subject, index) => 
                            <>
                                <Table.Tr key={index}>
                                    <Table.Td className="text-2xl">{index + 1}</Table.Td>
                                    <Table.Td className="text-2xl">{subject.attributes.name}</Table.Td>
                                    <Table.Td className="text-2xl">{subject.attributes.discipline_type.data.attributes.short_name}</Table.Td>
                                </Table.Tr>
                            </>
                        )
                    }
                </Table.Tbody>
                </Table>
            </div>)
        }
    </>
} 