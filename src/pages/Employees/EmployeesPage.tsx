import { GetEmployeesResponse, getEmployees } from "@/api/employees/getEmployees"
import { Divider } from "@/components/common/divider/Divider"
import { useEffect, useState } from "react"
import { Employee } from "./Employee"

export const EmploeesPage = () => {

    const [employees, setEmployees] = useState<GetEmployeesResponse>([])

    useEffect(() => {
        getEmployees().then(data => setEmployees(data))
    }, [])

    return <>
        <h1 className="text-[52px] font-bold">Співробітники кафедри</h1>
        {
            employees.map(item => 
                    <div>
                        <div className="w-fit mb-8">
                            <h2 className="text-5xl mb-3 font-medium">{item.name}</h2>
                            <Divider />
                        </div>
                        <div className="grid gap-8 grid-cols-3">
                            {
                                item.position_employees.map(employee => <Employee {...employee}/>)
                            }
                        </div>
                    </div>)
        }
    </>
}