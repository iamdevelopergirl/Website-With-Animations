import '../styles/container.css';
import img1 from '../images/para1/image1.svg';
import img2 from '../images/para1/image2.svg';
import img3 from '../images/para1/image3.svg';
import img4 from '../images/para1/image4.svg';
import img5 from '../images/para1/image5.svg';
import img6 from '../images/para1/image6.svg';
import {useEffect} from 'react';
import VideoScript from './videoScript.js'


const ImageWrapperLayout4 = (props) => {

    useEffect(() => {
        
        const script1 = document.createElement('script');
        script1.src = "./videoScript.js";
      
        document.body.appendChild(script1);


        // const script = document.createElement('script');
      
        // script.src = "https://cdn.jsdelivr.net/npm/vanilla-lazyload@16.1.0/dist/lazyload.min.js";
        // script.async = true;
      
        // document.body.appendChild(script);
      
        return () => {
          //document.body.removeChild(script);
          document.body.removeChild(script1);
        }
      }, []);

    return (<div className="video">
        <video width="100%" 
        autoPlay={true} 
        muted={true} 
        playsInline={true} 
        className="lazy"
        src="../images/para4/anim_10-2.mp4"
        data-poster="../images/bg-element-01.png"
        data-src="../images/para4/anim_10-2.mp4">
            <source src="../images/para4/anim_10-2.mp4" data-src="../images/para4/anim_10-2.mp4" type="video/mp4">
            </source>
        </video>
    </div>
    )
};

export default ImageWrapperLayout4;