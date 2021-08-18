import './styles/container.css';
import img1 from './images/para5/image1.svg'
import img2 from './images/para5/image2.svg'
import video1 from './videos/stickylayout/video1.mp4';


const isInViewport = function (elem, removePadding=false) {
    const bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= ( !removePadding ? window.innerHeight || document.documentElement.clientHeight : window.innerHeight + 300 || document.documentElement.clientHeight + 300) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

setInterval(() => {
    const scrollNav = document.getElementsByClassName("scroll-nav")[0];
    const img_bx = document.getElementsByClassName("img-bx");
    const firstImageBox = isInViewport(img_bx[0], true);
    if(firstImageBox){
        //img_bx[0].classList.add("active");
        scrollNav.childNodes[0].classList.add("active");
        scrollNav.childNodes[1].classList.remove("active");
        scrollNav.childNodes[2].classList.remove("active");
    }
    const secondImageBox = isInViewport(img_bx[1]);
    if(secondImageBox){
        //img_bx[1].classList.add("active");
        scrollNav.childNodes[2].classList.add("active");
        scrollNav.childNodes[0].classList.remove("active");
        scrollNav.childNodes[1].classList.remove("active");
    }
    const videoBox = isInViewport(document.getElementById("sticky_video"));
    if(videoBox){
        //document.getElementById("sticky_video").classList.add("active");
        scrollNav.childNodes[1].classList.add("active");
        scrollNav.childNodes[0].classList.remove("active");
        scrollNav.childNodes[2].classList.remove("active");
    }
});


function ImageTextStickyComponent(){
    return(
        <section className="image_text_sticky">
            <div className="img">
                <div className="img-bx">
                    <p>
                        Intuitive, incisive data points and notifications have been added to the KMMRCE experience.
                    </p>
                    <ul>
                        <li>
                            Considered UI for improved user experience
                        </li>
                        <li>
                            Data rich engagement throughout
                        </li>
                    </ul>
                    <object className="image1" type="image/svg+xml" data={img1}>svg-animation</object>
                </div>
                <div className="video" id="sticky_video">
                    <p>
                    Through our video conferencing tool, you are able to bring together your team or offer collaboration tools to your users.
                    </p>
                    <video width="100%" 
                        autoPlay={true} 
                        muted={true} 
                        playsInline={true} 
                        className="lazy"
                        src={video1}
                        data-poster="../images/bg-element-01.png"
                        data-src={video1}>
                            <source src={video1} data-src={video1} type="video/mp4">
                            </source>
                    </video>
                </div>
                <div className="img-bx">
                    <p>
                        Stay notified of requests being made on your site through our multi-channel message board.
                    </p>
                    <ul>
                        <li>
                            Internal message feature
                        </li>
                        <li>
                            Customer service and feedback
                        </li>
                    </ul>
                    <object className="image1" type="image/svg+xml" data={img2}>svg-animation</object>
                </div>
            </div>
            <div className="txt">
                <h3>
                    Create a better view of your business with our data driven dashboards
                </h3>
                <div className="scroll-nav">
                    <a href="#1">Stay up to date with the feed</a>
                    <a href="#1">Invite and view your team members</a>
                    <a href="#1">Keep track of projects</a>
                </div>
            </div>
        </section>
    )
}

export default ImageTextStickyComponent;