const INITIAL_STATE = {
    contacts: [],
    currContact: null
  }
  
  export function contactReducer(state = INITIAL_STATE, action) {
  
    switch (action.type) {
      case 'SET_CONTACTS':
        //   console.log('action', action)
        return {
          ...state,
          contacts: action.contacts
        }
      case 'SET_CONTACT':
        return {
          ...state,
          currContact: action.contact
        }
      case 'ADD_CONTACT':
        return {
          ...state,
          contacts: [...state.contacts, action.contact]
        }
      case 'REMOVE_CONTACT':
        return {
          ...state,
          contacts: state.contacts.filter(contact => contact._id !== action.contactId)
        }
      case 'UPDATE_CONTACT':
        const { updatedContact } = action
        return {
          ...state,
          contacts: state.contacts.map(contact => contact._id === updatedContact._id ? updatedContact : contact)
        }
      default:
        return state
    }
  }