import { LogoProps } from "./props";

export const Logo = (props: LogoProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${props.background})`,
        height: `${props.height}px`,
        width: `${props.width}px`
      }}
      className="bg-cover"
    ></div>
  );
};
