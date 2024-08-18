import { FooterContacts } from "./footer-parts/FooterContacts";
import { FooterLegal } from "./footer-parts/FooterLegal";
import { FooterLinks } from "./footer-parts/FooterLinks";
import { FooterLogo } from "./footer-parts/FooterLogo";

export const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row gap-4 py-9 px-8 md:px-24 mt-auto" style={{
      boxShadow: "0px 4px 77px -26px rgba(0,0,0,0.25)",
    }}>
      <FooterLogo />
      <div>
      <FooterContacts />
      <FooterLinks />
      </div>  
      <FooterLegal />
    </footer>
  );
};




