import { CONTACTS } from "../../../constants/cathedra-contacts";

export const FooterContacts = () => {
  return (
    <div className="max-h-[85px]">
      <p className=" text-[26px] mb-2 text-[#606B70] m-0 ">Контакти: </p>
      <div className="leading-5">
      <p className=" text-[16px] font-medium">
        {CONTACTS.phoneNumber}
      </p>
      <p className=" text-[16px] font-medium">{CONTACTS.email}</p>
      </div>
    </div>
  );
};
