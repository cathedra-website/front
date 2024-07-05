import { Route } from "@/routes/cathedra/employees/$slug"
import { TopInfo } from "./components/TopInfo"
import { Career } from "./components/Career"
import { Science } from "./components/Science"
import { Disciplines } from "./components/Disciplines"
import { DiplomeThemes } from "./components/DiplomaThemes"
import { Publications } from "./components/Publications"

export const EmployeePage = () => {
    const employee = Route.useLoaderData()

    return <>
        <h2 className="font-bold text-[52px]">Співробітники кафедри</h2>
        <TopInfo links={employee.data.attributes.links} image={ employee.data.attributes.image.data.attributes.url ?? ''} name={`${employee.data.attributes.last_name} ${employee.data.attributes.first_name} ${employee.data.attributes.middle_name}`} ranks={employee.data.attributes.ranks}/>
        {employee.data.attributes.career && <Career degree_history={employee.data.attributes.career}/>}
        {employee.data.attributes.study_interests && <Science study_interests={employee.data.attributes.study_interests} />}
        {employee.data.attributes.chosen_publications && <Publications chosen_publications={employee.data.attributes.chosen_publications} />}
        {/* {employee.data.attributes.teach_disciplines && <Disciplines teach_disciplines={employee.teach_disciplines} />} */}
        {employee.data.attributes.diploma_work_topics && <DiplomeThemes diploma_work_topics={employee.data.attributes.diploma_work_topics} />}
    </>
}