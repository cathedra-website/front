import { RedirectLink } from "../../../components/common/RedirectLink/RedirectLink"

const links = [
    'Науковий семінар "Інтелектуальні інформаційні системи"',
    'Науково-пошукові системи',
    'Наукові бібліотеки',
    'Наукові конференції',
    'Самоосвіта',
]

export const Links = () => {
    return <div>
        <h3 className="font-medium text-4xl mb-4">Корисні посилання</h3>
        <div className="h-20 flex flex-col flex-wrap leading-6">
        {
            links.map(link => <RedirectLink size="20px">{link}</RedirectLink>)
        }
        </div>
    </div>
}