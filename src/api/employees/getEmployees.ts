import { Employee } from "@/types/employee"
import { axiosInstance } from "../instance"

export type GetEmployeesResponse = Array<{
    name: string
    position_employees: Array<Employee>
}>

export const getEmployees = async () => {
    return (await axiosInstance.get('/employees/positionswithemployees/')).data as GetEmployeesResponse
}