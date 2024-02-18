import { CathedraLogo } from "../../common/cathedra-logo/CathedraLogo"

export const FooterLogo = () => {
    return (
        <div>
            <CathedraLogo height={35} width={105}/>
            <span className="block mt-3 text-sm leading-4">
                Кафедра інтелектуальних <br /> програмних систем
            </span>
        </div>
    )
}