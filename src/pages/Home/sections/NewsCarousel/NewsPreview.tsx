import { Divider } from "@/components/common/divider/Divider";
import { NewsPreviewProps } from "./props";
import { RedirectLink } from "@/components/common/RedirectLink/RedirectLink";

export const NewsPreview = (props: NewsPreviewProps) => {
    return (
        <div className="h-full w-[29.5rem] border-2 rounded-sm border-black flex flex-col gap-4">
            <h3>{props.name}</h3>
            <Divider />
            <p>{props.description}</p>
            <RedirectLink size="29px">Детальніше</RedirectLink>
        </div>
    )
}