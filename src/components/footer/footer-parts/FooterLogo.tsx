import { CathedraLogo } from "../../common/cathedra-logo/CathedraLogo"

export const FooterLogo = () => {
    return (
        <div className="max-h-[85px]">
            <CathedraLogo height={35} width={105}/>
            <span className="block mt-3 text-[16px] font-light leading-5">
                Кафедра інтелектуальних <br /> програмних систем
            </span>
        </div>
    )
}