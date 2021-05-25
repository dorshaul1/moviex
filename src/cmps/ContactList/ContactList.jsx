

import { ContactPreview } from '../ContactPreview/ContactPreview'
import './ContactList.scss'

export const ContactList = ({ contacts }) => {

    return (
        <div className="contactList flex wrap">
            {contacts.map((contact)=><ContactPreview key={contact._id} contact={contact}/>)}
        </div>
    )
}

