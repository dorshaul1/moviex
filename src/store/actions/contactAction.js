import  contactService  from '../../services/contactService'

// Thunk - Action Dispatcher
export function loadContacts(filterBy) {
//   console.log('filterBy:', filterBy)
  return async dispatch => {
    const contacts = await contactService.query(filterBy)
    // console.log('contacts:', contacts)
    const action = {
      type: 'SET_CONTACTS',
      contacts
    }
    dispatch(action)
  }
}

export function getContactById(contactId) {
  return async dispatch => {
    const contact = await contactService.getContactById(contactId)
    // console.log('contact:', contact)
    dispatch({ type: 'SET_CONTACT', contact })
  }
}
export function saveContact(contact) {
  return async dispatch => {
    const isAdd = !contact._id
    const updatedContact = await contactService.saveContact(contact)

    if (isAdd) dispatch({ type: 'ADD_CONTACT', contact: updatedContact })
    else dispatch({ type: 'UPDATE_CONTACT', updatedContact })
  }
}

export function removeContact(contactId) {
  return async dispatch => {
    await contactService.remove(contactId)
    dispatch({ type: 'REMOVE_CONTACT', contactId })
  }
}