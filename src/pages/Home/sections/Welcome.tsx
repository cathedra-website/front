import { CathedraLogo } from "../../../components/common/cathedra-logo/CathedraLogo"

export const Welcome = () => {
    return <div>
        <div>
            <h3 className="font-light tracking-widest text-[#1E1E1E80] text-xl">Київський національний університет імені Тараса Шевченка</h3>
            <h1 className="font-bold text-7xl leading-tight mb-4">Кафедра інтелектуальних програмних систем</h1>
            <h2 className="font-medium text-[28px] text-[#606B70]">Факультет комп’ютерних наук та кібернетики</h2>
        </div>
        <div className="flex justify-between    ">
            <div className="button w-[374px] h-[87px]">Дізнатися більше</div>
            <CathedraLogo height={145} width={420}/>
        </div>
    </div>
}