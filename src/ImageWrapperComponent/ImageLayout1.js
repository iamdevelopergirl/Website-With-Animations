import '../styles/container.css';
import img1 from '../images/para1/image1.svg';
import img2 from '../images/para1/image2.svg';
import img3 from '../images/para1/image3.svg';
import img4 from '../images/para1/image4.svg';
import img5 from '../images/para1/image5.svg';
import img6 from '../images/para1/image6.svg';

const ImageWrapperLayout1 = (props) => (
    <div className={`image ${props.layout}`}>
        <div className="row">
            <div className="left">
                <object className="image1" type="image/svg+xml" data={img1}>svg-animation</object>
            </div>
            <div className="right">
                <object className="image2" type="image/svg+xml" data={img2}>svg-animation</object>
                <object className="image3" type="image/svg+xml" data={img3}>svg-animation</object>
            </div>
        </div>
        <div className="row">
            <div className="left">
                <object className="image4" type="image/svg+xml" data={img4}>svg-animation</object>
            </div>
            <div className="right">
                <object className="image5" type="image/svg+xml" data={img5}>svg-animation</object>
                <object className="image6" type="image/svg+xml" data={img6}>svg-animation</object>
            </div>
        </div>
    </div>
)

export default ImageWrapperLayout1