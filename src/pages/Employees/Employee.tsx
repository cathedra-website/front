import { Employee as EmployeeType } from "@/types/employee";

export const Employee = (props: EmployeeType) => {
    return <div className="max-w-96 flex flex-col gap-5">
        <div className="w-44 h-[267px] bg-blue-500 rounded-xl"></div>
        <h3 className="font-medium text-3xl">{props.first_name} {props.last_name} <br/>{props.middle_name}</h3>
        <p className="font-light text-2xl">{props.ranks.join(', ')}</p>
    </div>
}