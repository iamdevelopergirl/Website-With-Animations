import './styles/container.css';
import ButtonComponent from './ButtonComponent';
import homeImage01 from './images/home-image-01.png';


function SectionWith2ContainerComponent(props){
    return(
        <section className="main-container">
            <div className="left-container">
                <h1>
                    <span>KMMRCE </span>is an enterprise level digital platform that provides a turnkey solution to online retailing.
                </h1>
                <ButtonComponent name="Request Demo &emsp;>" className="green"/>
            </div>
            <div className="right-container">
                <img src={homeImage01} className="speaker" alt=""/>
            </div>
        </section>
    )
}

export default SectionWith2ContainerComponent;