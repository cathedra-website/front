import { FooterContacts } from "./footer-parts/FooterContacts";
import { FooterLegal } from "./footer-parts/FooterLegal";
import { FooterLinks } from "./footer-parts/FooterLinks";
import { FooterLogo } from "./footer-parts/FooterLogo";

const parts = [
    <FooterLogo />,
    <FooterContacts />,
    <FooterLinks />,
    <FooterLegal />,
];

export const Footer = () => {
  return (
    <footer className="grid grid-cols-5 py-9 px-36 shadow-[0_-10px_20px_-3px_#00000040] relative left-0 bottom-0 mt-20">
      {parts.map((item) => (
        <>{item}</>
      ))}
    </footer>
  );
};




