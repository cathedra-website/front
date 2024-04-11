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
    <footer className="grid grid-cols-5 py-9 px-36 mt-auto" style={{
      boxShadow: "0px 4px 77px -26px rgba(0,0,0,0.25)",
    }}>
      {parts.map((item) => (
        <>{item}</>
      ))}
    </footer>
  );
};




