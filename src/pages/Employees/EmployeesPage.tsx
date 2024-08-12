import { Divider } from "@/components/common/divider/Divider"
import { Employee } from "./Employee"
import { Route } from "@/routes/cathedra/employees"

export const EmploeesPage = () => {
    const { employees, positions } = Route.useLoaderData()

    return <>
        <h1 className="text-[52px] font-bold">Співробітники кафедри</h1>
        {
            positions.  map(item => 
                    <div>
                        <div className="w-fit mb-8">
                            <h2 className="text-5xl mb-3 font-medium">{item.attributes.name}</h2>
                            <Divider />
                        </div>
                        <div className="grid gap-8 grid-cols-3">
                            {
                                employees.filter(emp => emp.attributes.position.data.id === item.id).map(employee => <Employee {...employee}/>)
                            }
                        </div>
                    </div>)
        }
    </>
}