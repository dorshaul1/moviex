

import { Link } from 'react-router-dom'
import './ContactPreview.scss'

export const ContactPreview = ({ contact }) => {

    return (
        <Link to={`/detalis/${contact._id}`}>
            <div onclick={history.push(`/movie/${movie.id}`)} className="contactPreview flex column align-center">
                <div className="preview-screen"></div>
                <div className="contact-image flex center">
                    <img src={`https://i.pravatar.cc/150?u=${contact._id}`} alt="" />
                </div>
                <div className="contact-info flex column align-start justify-center">
                    <h1>{contact.name}</h1>
                </div>
            </div>
        </Link>
    )
}

