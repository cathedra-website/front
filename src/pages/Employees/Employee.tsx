import { GetEmployeesResponse } from "@/api/employees/getEmployees";
import { useNavigate } from "@tanstack/react-router";

export const Employee = (props: GetEmployeesResponse['data'][number]) => {
    const navigate = useNavigate()

    return <div className="max-w-96 flex flex-col gap-5 cursor-pointer" onClick={ props.attributes.active ? () => navigate({to: '/cathedra/employees/$slug', params: {slug: props.id.toString()}}) : undefined}>
        <div className="w-44 h-[267px] rounded-xl object-contain" style={{backgroundImage: `url(${props.attributes.image.data.attributes.url})`, backgroundSize: 'cover'}}></div>
        <h3 className="font-medium text-3xl">{props.attributes.last_name} {props.attributes.first_name} <br/>{props.attributes.middle_name}</h3>
        {props.attributes.ranks && <p className="font-light text-2xl">{props.attributes.ranks.map(item => item.name).join(', ')}</p>}
    </div>
}