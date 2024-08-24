import { Divider } from "@/components/common/divider/Divider"
import { Route } from "@/routes/study/$slug"
import { useNavigate } from "@tanstack/react-router"

export const DegreePage = () => {
    const degreeInfo = Route.useLoaderData()
    const navigate = useNavigate()

    return <>
        <h2 className="font-bold text-5xl">{degreeInfo.attributes.name}</h2>
        <div className="flex flex-col gap-5">
            <h3 className="font-medium text-3xl">Загальна інформація</h3>
            <p className="font-light text-2xl">{degreeInfo.attributes.description}</p>
        </div>
        <Divider />
        <div className="flex flex-col gap-5">
            <h3 className="font-medium text-3xl">Описи освітньої програми</h3>
            <ul className="font-light text-2xl underline underline-offset-8 list-disc list-inside">
                {
                    degreeInfo.attributes.educational_files.data.sort().filter(file => file.attributes.type === 'detailedInfo').map(file => <li><a href={file.attributes.file.data.attributes.url} target="_blank">{file.attributes.description}</a></li>)
                }
            </ul>
        </div>
        <Divider />
        <div className="flex flex-col gap-5">
            <h3 className="font-medium text-3xl">Навчальні плани</h3>
            <ul className="font-light text-2xl underline underline-offset-8 list-disc list-inside">
                {
                    degreeInfo.attributes.educational_files.data.sort().filter(file => file.attributes.type === 'studyPlan').map(file => <li><a href={file.attributes.file.data.attributes.url} target="_blank">{file.attributes.description}</a></li>)
                }
            </ul>
        </div>
        <Divider />
        <div className="flex flex-col gap-5">
            <h3 className="font-medium text-3xl">Програми навчальних дисциплін</h3>
            <ul className="font-light text-2xl underline underline-offset-8 list-disc list-inside">
                {
                    degreeInfo.attributes.discipline_infos.data.sort().map(program => <li className="cursor-pointer" onClick={() => navigate({to: '/study/disciplines/$year', params: { year: program.id.toString() }})}>{program.attributes.description}</li>)
                }
            </ul>
        </div>
        <Divider />
        <div className="flex flex-col gap-5">
            <h3 className="font-medium text-3xl">Випускні кваліфікаційні роботи студентів</h3>
            <ul className="font-light text-2xl underline underline-offset-8 list-disc list-inside">
                {
                    degreeInfo.attributes.qualification_infos.data.sort().map(quals => <li className="cursor-pointer" onClick={() => navigate({to: '/study/theses/$year', params: { year: quals.id.toString() }})}>{quals.attributes.description}</li>)
                }
            </ul>
        </div>
    </> 
}