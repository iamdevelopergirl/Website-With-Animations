import '../styles/container.css';
import img1 from '../images/para2/image1.svg';
import img2 from '../images/para2/image2.svg';
import img3 from '../images/para2/image3.png';

const ImageWrapperLayout2 = (props) => (
    <div className={`image ${props.layout}`}>
        <div className="row">
            <div className="center">
                <object className="image1" type="image/svg+xml" data={img1}>svg-animation</object>
            </div>
        </div>
        <div className="row">
            <div className="left">
                <object className="image2" type="image/svg+xml" data={img2}>svg-animation</object>
            </div>
            <div className="right">
                <img src={img3} alt=""></img>
            </div>
        </div>
    </div>
);

export default ImageWrapperLayout2;