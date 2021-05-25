
import { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import contactService from '../../services/contactService'
import { removeContact } from '../../store/actions/contactAction'
import { useDispatch } from 'react-redux'
import './ContactDetailsPage.scss'

export const ContactDetailsPage =(props)=> {
    const[contact, setcontact] = useState(null)
    const dispatch = useDispatch()
    useEffect(async () => {
        
        let contact = await contactService.getContactById(props.match.params.contactId)
        setcontact( contact )
        return () => {
        }
    },[ props.match.params.contactId])

    // const remove = async () => {
    //     dispatch(removeContact(contact._id))
    //     props.history.push('/contact')
    // }
        return (
            <div className="contactDetailsPage">
                <h1>details</h1>
                {contact && <div className="details-container flex align-center space-between">
                    <Link className="back" to="/contact">🠖</Link>
                </div>}

            </div>
        )
}