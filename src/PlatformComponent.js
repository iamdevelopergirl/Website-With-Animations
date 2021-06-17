import './styles/container.css';
import ButtonComponent from './ButtonComponent';
import bgElement01 from './images/bg-element-01.png';
import bgElement02 from './images/bg-element-02.png';
import bgElement03 from './images/bg-element-03.png';
import bgElement04 from './images/bg-element-04.png';
import bgElement05 from './images/bg-element-05.png';
import bgElement06 from './images/bg-element-06.png';

function PlatformComponent(){

    function getAllDivElement(){
        let divId = ["one", "two", "three", "four", "five", "six"];
        let elementList = divId.map(imageid => {
            let element = document.getElementById(imageid);
            return element
        });
        return elementList;
    }

    function onMouseMove(e){
        
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        console.log(mouseX, mouseY);
        let divElements = getAllDivElement();
        divElements.forEach(elem => {
            let elemWidth = elem.offsetWidth;
            let elemHeight = elem.offsetHeight;
        
            let x = elem.clientLeft - mouseX;
            let y = elem.clientTop - mouseY;

            let xPos = x / (elemWidth + elemHeight);
            let yPos = y / (elemWidth + elemHeight);

            elem.style.transform = `translate3d(${xPos}%, ${yPos}%, 0)`;
        });
    }

    return(
        <section className="platform" onMouseMove={onMouseMove}>
            <div id="backgrounds" className="backgrounds" >
                <div id="one" className="img one">
                    <img src={bgElement01} alt=""/>
                </div>
                <div id="two" className="img two">
                    <img src={bgElement02} alt=""/>
                </div>
                <div id="three" className="img three">
                    <img src={bgElement03} alt=""/>    
                </div>
                <div id="four" className="img four">
                    <img src={bgElement04} alt=""/>
                </div>
                <div id="five" className="img five">
                    <img src={bgElement05} alt=""/>
                </div>
                <div id="six" className="img six">
                    <img src={bgElement06} alt=""/>
                </div>
            </div>
            <div className="texts">
                <p>Platform</p>
                <h3>Sell digital or physical inventory, with configurable or simple attributes, in a way that suits your business.</h3>
                <ButtonComponent name="Explore the platform &emsp;>" className="white"/>
            </div>
        </section>
    )
}

export default PlatformComponent;