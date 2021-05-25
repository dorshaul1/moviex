
import { Link } from 'react-router-dom'
import mainImg from '../../assets/images/undraw_home_cinema.svg'
import './HomePage.scss'

export const HomePage = () => {
    return (
        <section className="homePage flex center column">

            { <div className="homePage-container flex center column">
                <div className="hero-container flex center space-between">
                    <div className="hero-text-container flex column justify-end">
                        <h2><span className="diff-color">Collect</span> and<br /></h2>
                        <h2><span className="diff-color">Share</span> youre favorite<span className="movie-font"> Movies</span><span className="diff-color">.</span> </h2>
                        <Link to='/explore'><button className="lets-start-btn flex center">Let's Start</button></Link>
                    </div>
                    <img src={mainImg} alt="" />
                </div>
            </div>}
            {/* <div className="more-details-container">

            </div> */}
        </section>
    )
}
