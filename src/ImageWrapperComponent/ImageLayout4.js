import '../styles/container.css';

const ImageWrapperLayout4 = (props) => {
    return (<div className="video">
        <video width="100%" 
        autoPlay={true} 
        muted={true} 
        playsInline={true} 
        className="lazy"
        src={props.videoF}
        data-poster="../images/bg-element-01.png"
        data-src={props.videoF}>
            <source src={props.videoF} data-src={props.videoF} type="video/mp4">
            </source>
        </video>
    </div>
    )
};

export default ImageWrapperLayout4;