import { Route } from "@/routes/cathedra/employees/$slug"

export const EmployeePage = () => {
    const { slug } = Route.useParams()
    return <div>{slug}</div>
}