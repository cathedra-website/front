import { Divider } from "@/components/common/divider/Divider";
import { NewsPreviewProps } from "./props";
import { RedirectLink } from "@/components/common/RedirectLink/RedirectLink";
import { Paragraph } from "@/components/styled/Paragrph";

export const NewsPreview = (props: NewsPreviewProps) => {
    return (
        <div className="h-full px-6 py-8 w-[25rem] border-2 rounded-xl border-black flex flex-col gap-4">
            <h3 className="font-medium text-3xl">{props.name}</h3>
            <Divider />
            <Paragraph>{props.description}</Paragraph>
            <RedirectLink size="29px">Детальніше</RedirectLink>
        </div>
    )
}