import { Paragraph } from "@/components/styled/Paragrph"
import { Route } from "@/routes/study/disciplines.$year"
import { Table } from "@mantine/core"

export const ProgramsPage = () => {
    const { blocks, disciplines } = Route.useLoaderData()
    return <>
        <h2 className="font-bold text-5xl">Програми навчальних дисциплін</h2>
        <div>
            <Paragraph>Скорочення назв блоків:</Paragraph>
            <ul className="font-light text-2xl list-disc list-inside">
                {
                    blocks.subject_blocks.map(subject => <li>{subject.name} — {subject.full_name}</li>)
                }
            </ul>
        </div>
        {
            Object.entries(disciplines.subjects).map(([semestr, subjects]) => <div>
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
                                    <Table.Td className="text-2xl">{subject.name}</Table.Td>
                                    <Table.Td className="text-2xl">{subject.block.name}</Table.Td>
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