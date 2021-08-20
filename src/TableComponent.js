import './styles/container.css';
import standard from './images/standard.svg';
import professional from './images/professional.svg';
import enterprise from './images/enterprise.svg';
import Button from './components/common/button.js';
import tick from './images/tick-image.svg';
import nil from './images/nil.svg';


let bodyElements = [
    {
        "p" : ["Core Features", "topic"]
    },
    {
        "p" : ["Multi-Channel Headless CMS", 1, 1, 1]
    },
    {
        "p" : ["E-Comm Store ", 1, 1, 1]
    },
    {
        "p" : ["CRM, ERP, PIM Integration Toolkits  ", 0, 1, 1]
    },
    {
        "p" : ["Logistics Planning & Management", 0, 1, 1]
    },
    {
        "p" : ["Picking and Packing Operations", 0, 1, 1]
    },
    {
        "p" : ["Product Photography Management ", 0, 1, 1]
    },
    {
        "p" : ["Email and Social Channel Marketing", 1, 1, 1]
    },
    {
        "p" : ["Advertising Network Management", 1, 1, 1]
    },
    {
        "p" : ["Customer Loyalty Component", 0, 1, 1]
    },
    {
        "p" : ["Campaign, Sale and Discount", 1, 1, 1]
    },
    {
        "p" : ["In-Platform Video Conferencing Tools", 0, 1, 1]
    },
    {
        "p" : ["KMMRCE PAY Payment Gateway", 1, 1, 1]
    },
    {
        "p" : ["Global Payment Integration Toolkits ", 1, 1, 1]
    },
    {
        "p" : ["Team Support", "topic"]
    },
    {
        "p" : ["24-Hour Tech Support", 0, 1, 1]
    },
    {
        "p" : ["Round the Clock Call Centre", 1, 1, 1]
    },
    {
        "p" : ["Video Tutorials  ", 1, 1, 1]
    },
    {
        "p" : ["Documentation Library", 1, 1, 1]
    },
    {
        "p" : ["Live Screen Demos", 0, 0, 1]
    },
    {
        "p" : ["Guides and White Papers ", 0, 1, 1]
    },
    {
        "p" : ["Developer Centre", 1, 1, 1]
    }
]

function getTableBody(){
    let elemet = bodyElements.map((object, index) => {
        let divElement;
        if(object["p"][1] === "topic"){
           divElement = <div className="row" key={index}>
               <div className="item">
                   <h4>{object["p"][0]}</h4>
               </div>
           </div> 
           return divElement;
        }
        const pElement = <p>{object["p"][0]}</p>;
    
        let img1Element;
        let img2Element;
        let img3Element;
        if(object["p"][1]){
            img1Element = <img src={tick} alt=""/>
        }
        else{
            img1Element = <img src={nil} alt=""/>
        }
        if(object["p"][2]){
            img2Element = <img src={tick} alt=""/>
        }
        else{
            img2Element = <img src={nil} alt=""/>
        }
        if(object["p"][3]){
            img3Element = <img src={tick} alt=""/>
        }
        else{
            img3Element = <img src={nil} alt=""/>
        }
        divElement = <div className="row" key={index}>
                <div className="item">
                    {pElement}
                </div>
                 <div className="item">
                    {img1Element}
                </div>
                 <div className="item">
                     {img2Element}
                </div>
                <div className="item">
                     {img3Element}
                </div>
            </div>
        return divElement;
    });

    return(
        <div className="table_body">
            {elemet}
        </div>
    )
}
function TableComponent(){
    return(
        <section className="table">
            <div className="top">
                <p>The KMMRCE Model</p>
                <h3>We aim to bring you digital commerce turnkey solutions through manageable, subscription-based billing methods that allow you to pay for only the services that you need and use.</h3>
            </div>
            <div className="bottom">
                <div className="table_head">
                    <div className="item">   
                    </div>
                    <div className="item"> 
                          <img src={standard} alt=""/>
                          <p>Standard</p>
                          <Button name="Request Demo &emsp;>" className="black"/>
                    </div>
                    <div className="item"> 
                          <img src={professional} alt=""/>
                          <p>Professional</p>
                          <Button name="Request Demo &emsp;>" className="black"/>
                    </div>
                    <div className="item"> 
                          <img src={enterprise} alt=""/>
                          <p>Enterprise</p>
                          <Button name="Request Demo &emsp;>" className="black"/>
                    </div>
                </div>
                {getTableBody()}
                <div className="table_head">
                    <div className="item">   
                    </div>
                    <div className="item"> 
                          <div className="spacer"/>
                          <p>% Transaction</p>
                          <Button name="Request Demo &emsp;>" className="black"/>
                    </div>
                    <div className="item"> 
                            <div className="spacer"/>
                          <p>$1,500/month</p>
                          <Button name="Request Demo &emsp;>" className="black"/>
                    </div>
                    <div className="item"> 
                          <div className="spacer"/>
                          <p>$2,500/month</p>
                          <Button name="Request Demo &emsp;>" className="black"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TableComponent;