import './styles/container.css';
import caseStudy01 from './images/case-study-01.png';
import caseStudy02 from './images/case-study-02.jpeg';
import ButtonComponent from './ButtonComponent';

function CaseStudyComponent(){
    return(
        <section className="case_study change_order">
            <div className="image">
                <img src={caseStudy01} alt="" className="overlay"/>
                <img src={caseStudy02} alt="" className="main"/>
            </div>
            <div className="text">
                <p className="title">
                    Case Study
                </p>
                <h3>
                    EDGAR
                </h3>
                <p className="excerpt">
                    An online platform for men that celebrates all that is great about style, food, travel, culture, sport, cars, tech and watches. A site that is able to manage high volumes of transactions simultaneously while adapting in real time to stock inventory information and provide a streamlined customer journey.
                </p>
                <div className="buttons">
                    <ButtonComponent name="View Case Study &emsp;>" className="black"/>
                    <ButtonComponent name="View All &emsp;>" className="black"/>
                </div>
            </div>
        </section>
    )
}

export default CaseStudyComponent;