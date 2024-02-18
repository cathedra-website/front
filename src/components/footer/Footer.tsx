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
    <footer>
      {parts.map((item) => (
        <>{item}</>
      ))}
    </footer>
  );
};
