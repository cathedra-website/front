import { CONTACTS } from "../../../constants/cathedra-contacts"

export const FooterContacts = () => {
    return (
        <div>
            <span className='block'>Контакти: </span>
            <span className="block">{CONTACTS.phoneNumber}</span>
            <span className="block">{CONTACTS.email}</span>
        </div>
    )
}