import { Prettify } from "../../../types/prettify";
import { WidthHeight } from "../../../types/width-height";

export type LogoProps = Prettify<
  WidthHeight & {
    background: string;
  }
>;
