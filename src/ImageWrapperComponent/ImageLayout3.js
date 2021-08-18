import '../styles/container.css';
import img1 from '../images/para3/image1.svg';
import img2 from '../images/para3/image2.svg';
import img3 from '../images/para3/image3.svg';

const ImageWrapperLayout3 = (props) => (
    <div className={`image ${props.layout}`}>
        <div className="row">
            <div className="left">
                <div className="card">
                    <h3>Growth</h3>
                    <h2 id="counter">
                    +48.52%
                    </h2>
                    <p>
                        <b>5.25%</b>
                        <br/>
                        Since Last Month
                    </p>
                </div>
                <object className="image1" type="image/svg+xml" data={img1}>svg-animation</object>
            </div>
            <div className="right">
                <object className="image2" type="image/svg+xml" data={img2}>svg-animation</object>
                <object className="image3" type="image/svg+xml" data={img3}>svg-animation</object>
            </div>
        </div>
    </div>
);

export default ImageWrapperLayout3;