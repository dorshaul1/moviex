
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ContactFilter } from '../../cmps/ContactFilter/ContactFilter'
import { ContactList } from '../../cmps/ContactList/ContactList'
import { loadContacts } from '../../store/actions/contactAction'

import './ContactPage.scss'

export const ContactPage = () => {
  const dispatch = useDispatch()
  const [filterBy, setFilterBy] = useState(null)
  const [contacts, setContacts] = useState(null)
  const contactsToShow = useSelector(state => state.contactReducer.contacts)
  useEffect(async () => {
    dispatch(loadContacts(filterBy))
    setContacts(contactsToShow)
    // console.log('contacts:', contacts)
    return () => {
    }
  }, [filterBy])
  
  const onChangeFilter = (filterBy) => {
    setFilterBy(filterBy)
  }
  return (
    <div className="contactPage flex column align-center">
      <ContactFilter onChangeFilter={onChangeFilter} />
      {contacts && <ContactList contacts={contacts} />}
    </div>
  )
}