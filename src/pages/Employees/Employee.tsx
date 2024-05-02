import { Employee as EmployeeType } from "@/types/employee";
import { useNavigate } from "@tanstack/react-router";

export const Employee = (props: EmployeeType) => {
    const navigate = useNavigate()

    return <div className="max-w-96 flex flex-col gap-5 cursor-pointer" onClick={() => navigate({to: '/cathedra/employees/$slug', params: {slug: props.slug}})}>
        <div className="w-44 h-[267px] rounded-xl object-contain" style={{backgroundImage: `url(${props.image})`, backgroundSize: 'cover'}}></div>
        <h3 className="font-medium text-3xl">{props.last_name} {props.first_name} <br/>{props.middle_name}</h3>
        <p className="font-light text-2xl">{props.ranks.join(', ')}</p>
    </div>
}