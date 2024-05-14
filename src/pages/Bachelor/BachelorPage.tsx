import { GetDegreeResponse, getDegreeInfo } from "@/api/degrees/getDegreeInfo"
import { Route } from "@/routes/study/$slug"
import { Divider } from "@/components/common/divider/Divider"
import { useEffect, useState } from "react"

export const DegreePage = () => {
    const { slug } = Route.useParams()
    const [degreeInfo, setDegreeInfo] = useState<GetDegreeResponse>()

    useEffect(() => {
        getDegreeInfo(slug).then(data => setDegreeInfo(data))
    }, [])

    return <>
        <h2 className="font-bold text-5xl">{degreeInfo?.name}</h2>
        <div className="flex flex-col gap-5">
            <h3 className="font-medium text-3xl">Загальна інформація</h3>
            <p className="font-light text-2xl">{degreeInfo?.description}</p>
        </div>
        <Divider />
        <div className="flex flex-col gap-5">
            <h3 className="font-medium text-3xl">Описи освітньої програми</h3>
            <ul className="font-light text-2xl underline underline-offset-8 list-disc list-inside">
                {
                    degreeInfo?.study_programs_desc.map(descr => <li><a href={descr.file} target="_blank">{descr.name}</a></li>)
                }
            </ul>
        </div>
        <Divider />
        <div className="flex flex-col gap-5">
            <h3 className="font-medium text-3xl">Навчальні плани</h3>
            <ul className="font-light text-2xl underline underline-offset-8 list-disc list-inside">
                {
                    degreeInfo?.study_plans.map(plan => <li><a href={plan.file} target="_blank">{plan.name}</a></li>)
                }
            </ul>
        </div>
        <Divider />
        <div className="flex flex-col gap-5">
            <h3 className="font-medium text-3xl">Програми навчальних дисциплін</h3>
        </div>
        <Divider />
        <div className="flex flex-col gap-5">
            <h3 className="font-medium text-3xl">Випускні кваліфікаційні роботи студентів</h3>
        </div>
    </>
}