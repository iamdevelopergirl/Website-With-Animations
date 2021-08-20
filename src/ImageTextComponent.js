import './styles/container.css';
import ImageWrapperLayout1 from './ImageWrapperComponent/ImageLayout1.js';
import ImageWrapperLayout2 from './ImageWrapperComponent/ImageLayout2.js';
import ImageWrapperLayout3 from './ImageWrapperComponent/ImageLayout3.js';
import ImageWrapperLayout4 from './ImageWrapperComponent/ImageLayout4.js';
import video1 from './videos/layout4/video1.mp4';
import cvideo1 from './videos/order_change_layout/video1.mp4';
import cvideo2 from './videos/order_change_layout/video2.mp4';
import cvideo3 from './videos/order_change_layout/video3.mp4';
import cvideo4 from './videos/order_change_layout/video4.mp4';


function _getLayoutImage(props){
    let wrapperElement;
    switch(props.layout){
        case "layout_01":
            wrapperElement = <ImageWrapperLayout1 layout={props.layout}/>
            break;
        case "layout_02":
            wrapperElement = <ImageWrapperLayout2 layout={props.layout}/>
            break;
        case "layout_03":
            wrapperElement = <ImageWrapperLayout3 layout={props.layout}/>
            break;
        case "layout_04":
            wrapperElement = <ImageWrapperLayout4 layout={props.layout} videoF={video1}/>
            break;
        case "layout_05":
            wrapperElement = <ImageWrapperLayout4 layout={props.layout} videoF={cvideo1}/>
            break;
        case "layout_06":
            wrapperElement = <ImageWrapperLayout4 layout={props.layout} videoF={cvideo2}/>
            break;
        case "layout_07":
            wrapperElement = <ImageWrapperLayout4 layout={props.layout} videoF={cvideo3}/>
            break;
        case "layout_08":
            wrapperElement = <ImageWrapperLayout4 layout={props.layout} videoF={cvideo4}/>
            break;
        default:
            wrapperElement = <ImageWrapperLayout1 layout={props.layout}/>
            break;
    }
    return wrapperElement;
}

function _getList(ul){
    let options = ul.map((element, index) => {
        const liElement = <li key={index}>{element}</li>
        return liElement;
    });
    return(
        <ul>
            {options}
        </ul>
    )
};

function ImageTextComponent(props){
    return(
        <section className={`image_text ${props.order}`}>
            {_getLayoutImage(props)}
            <div className="text">
                <h3>
                    {props.strings.h3}
                </h3>
                <h4>
                    {props.strings.h4_0}
                </h4>
                <p>
                    {props.strings.p_0}
                </p>
                {
                    props.strings.seperator ? <div className="seperator"></div> : null
                }
                <h4>
                    {props.strings.h4_1}
                </h4>
                <p>
                    {props.strings.p_1}
                </p>
                {_getList(props.strings.ul)}
            </div>
        </section>
    )
}

export default ImageTextComponent;