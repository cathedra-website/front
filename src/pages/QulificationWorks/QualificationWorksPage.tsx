import { Route } from "@/routes/study/theses.$year"
import { Table } from "@mantine/core"
import { Link } from "@tanstack/react-router"

export const QualificationWorksPage = () => {
    const qualificationWorks = Route.useLoaderData()
    return <>
        <h2 className="font-bold text-5xl">Список випускних робіт на {qualificationWorks.data.attributes.year}н. р.</h2>
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
                        qualificationWorks.data.attributes.qualifications.data.map((work, index) => {
                            return <>
                            <Table.Tr key={index} className="font-light">
                                <Table.Td className="text-2xl">{index + 1}</Table.Td>
                                <Table.Td className="text-2xl">{work.attributes.student}</Table.Td>
                                <Table.Td className="text-2xl ">{work.attributes.work_name}</Table.Td>
                                <Table.Td className="text-2xl">{work.attributes.employee.data ? <Link
                                    to="/cathedra/employees/$slug"
                                    params={{ slug: work.attributes.employee.data.id.toString() }}
                                    className='cursor-pointer text-[#12A1DD]'
                                 >
                                    {`${work.attributes.employee.data.attributes.last_name} ${work.attributes.employee.data.attributes.first_name.charAt(0)}. ${work.attributes.employee.data.attributes.middle_name?.charAt(0)}.`}
                                 </Link> : work.attributes.non_employee}</Table.Td>
                            </Table.Tr>
                        </>
                        })
                    }
                    </Table.Tbody>
                </Table>
    </>
}