
import { Component } from 'react'

import './ContactFilter.scss'

export class ContactFilter extends Component {
    state = {
        name: ''
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState({ [field]: value }, () => {
            this.props.onChangeFilter({ ...this.state })
        })
    }
    render() {
        const { name } = this.state

        return (
            <form className="contactFilter" onSubmit={(ev) => ev.preventDefault()}>
                <label htmlFor="name">Search </label>
                <input type="text" id="name" name="name" value={name} onChange={this.handleChange} />
            </form>
        )
    }
}
