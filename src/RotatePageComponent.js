import './styles/container.css';
import featuredShape from './images/featured_shape.png';
import ButtonComponent from './ButtonComponent';

function RotatePageComponent(){
    return(
        <section className="featured_block">
            <div className="anim_bg rotate">
                <img src={featuredShape} alt=""/>
            </div>
            <div className="texts">
                <p className="title">
                    Super Merchants
                </p>
                <h3>
                    Multisite, made easy.
                </h3>
                <p className="excerpt">
                    Our platform is built to serve not only the operating enterprise but also the agencies that serve them, whether they be design, technical or content services. KMMRCE provides multi layered dashboards for the management of an infinite number of sites so you can manage your own requirement or that of your full client roster.
                </p>
                <ButtonComponent name="Explore Super Markets" className="white"/>
            </div>
        </section>
    )
}

export default RotatePageComponent;