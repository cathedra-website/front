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
        <TopInfo links={employee?.links} image={employee?.image ?? ''} name={`${employee?.last_name} ${employee?.first_name} ${employee?.middle_name}`} ranks={employee?.ranks}/>
        {employee?.degree_history && <Career degree_history={employee.degree_history}/>}
        {employee?.study_interests && <Science study_interests={employee.study_interests} />}
        {employee?.chosen_publications && <Publications chosen_publications={employee.chosen_publications} />}
        {employee?.teach_disciplines && <Disciplines teach_disciplines={employee.teach_disciplines} />}
        {employee?.diploma_work_topics && <DiplomeThemes diploma_work_topics={employee.diploma_work_topics} />}
    </>
}