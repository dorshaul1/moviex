
import { useEffect, useState } from 'react'
import contactService from '../../services/contactService'
import { saveContact } from '../../store/actions/contactAction'
import { useDispatch } from 'react-redux'

import './ContactEditPage.scss'
import { useForm } from '../../hooks/useForm'

export const ContactEditPage = (props)=> {

    const[contact, setcontact] = useState(null)
    const[errMsg, setuserMsg] = useState(null)
    const dispatch = useDispatch()
    useEffect(async() => {
        const { contactId } = props.match.params
        try {
            const contact = contactId ? await contactService.getContactById(contactId) : contactService.getEmptyContact()
            setcontact (contact)
        } catch (err) {
            setuserMsg( {errMsg: 'Contact Not Found'} )
        }
    }, [])
    const [newContact, handleChange] = useForm(contact || contactService.getEmptyContact())
    const onSaveContact = async (ev) => {
        ev.preventDefault()
        dispatch(saveContact(newContact ))
        props.history.push('/contact')
    }
        if (!newContact) return <div>{errMsg || 'Loading'}</div>
        const { name, email, phone } = newContact
        return (
             <form className='contact-edit flex column' onSubmit={onSaveContact}>
                <label htmlFor="name">Name</label>
                <input  required type="text" id="name" value={name} onChange={handleChange} name="name" />

                <label htmlFor="email">Email</label>
                <input required type="email" id="email" value={email} onChange={handleChange} name="email" />

                <label htmlFor="phone">Phone</label>
                <input required type="text" id="phone" value={phone} onChange={handleChange} name="phone" />

                <p>{errMsg}</p>
                <a onClick={onSaveContact}>Save</a>
            </form>
        )
}
