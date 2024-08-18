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
        <div className="flex flex-col md:flex-row flex-wrap leading-6 gap-x-4 gap-y-2">
        {
            links.map(link => <RedirectLink size="20px">{link}</RedirectLink>)
        }
        </div>
    </div>
}