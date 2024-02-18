import { CONTACTS } from "../../../constants/cathedra-contacts"

export const FooterContacts = () => {
    return (
        <div>
            <span className='block text-2xl mb-1 text-[#606B70]'>Контакти: </span>
            <span className="block text-base font-medium">{CONTACTS.phoneNumber}</span>
            <span className="block text-base font-medium">{CONTACTS.email}</span>
        </div>
    )
}