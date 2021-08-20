import './styles/container.css';
import support from './images/support.svg';
import loyalty from './images/loyalty.svg';
import pricing from './images/pricing.svg';
import Button from './components/common/button.js';

function DetailComponent(){
    return(
        <section className="details_block">
            <div className="top">
                <p>Serving Our Customers</p>
                <h3>KMMRCE was built to bring your e-comm vision to life. Whatever your query or concern, we'll be on hand to ensure you can access every feature at the touch of a button.</h3>
            </div>
            <div className="line"></div>
            <div className="bottom">
                <div className="column">
                    <img src={support} alt=""/>
                    <p className="title">
                        Tech Support
                    </p>
                    <p className="excerpt">
                        We're there to answer your queries and fix any road blocks you may experience.
                    </p>
                    <Button name="Request Demo &emsp;>" className="white"/>
                </div>
                <div className="column">
                    <img src={loyalty} alt=""/>
                    <p className="title">
                        Documentation Library
                    </p>
                    <p className="excerpt">
                        Our comprehensive library is open to all and written to guide all proficiencies through any challenge. 
                    </p>
                    <Button name="Request Demo &emsp;>" className="white"/>
                </div>
                <div className="column">
                    <img src={pricing} alt=""/>
                    <p className="title">
                        Scalable Pricing
                    </p>
                    <p className="excerpt">
                        We have designed a scalable pricing system to guide SMEs into higher growth areas that take e-comm operators into enterprise level. 
                    </p>
                    <Button name="Request Demo &emsp;>" className="white"/>
                </div>
            </div>
        </section>
    )
}

export default DetailComponent;

