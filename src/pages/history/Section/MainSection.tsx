import { Divider } from "@/components/common/divider/Divider";
import { MainSectionProps } from "../types";
import { LecturerPhoto } from "./LecturerPhoto";

export const MainSection = (props: MainSectionProps) => {
    return <div className="grid gap-4 grid-cols-4 grid-rows-1"> 
        <div className="col-span-1">
            <LecturerPhoto src={props.lecturerInfo.imgSrc} />
            <h3 className="font-medium text-3xl mb-1">{props.lecturerInfo.name}</h3>
            <Divider />
            <p className="font-light text-xl mt-1">{props.lecturerInfo.post}</p>
        </div>
        <div className="flex flex-col col-start-2 col-end-5 gap-5">
            {props.children}
        </div>
    </div>
}