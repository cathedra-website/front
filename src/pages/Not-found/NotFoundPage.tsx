import { RedirectLink } from "@/components/common/RedirectLink/RedirectLink"
import { useNavigate } from "@tanstack/react-router"


export const NotFoudPage = () => {
    const navigate = useNavigate()
    
    return <>
        <h2 className="font-bold text-5xl">Вибачте, трапилась помилка 404 {'(:'}</h2>
        <p className="font-light text-2xl">За даною адресою сторінки не існує</p>
        <RedirectLink size='24px' onClick={() => navigate({to: '/'})}>Перейти на головну сторінку</RedirectLink>
    </>
} 