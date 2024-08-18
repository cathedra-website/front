import { LogoProps } from "./props";

export const Logo = (props: LogoProps) => {
  return (
    <img src={props.background} alt="logo" draggable="false" height={props.height} width={props.width} />
  );
};
