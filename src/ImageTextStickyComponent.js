import stickyVideo from './images/vid-conf.mp4';
import './styles/container.css';

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
                </div>
                <div className="video">
                    <p>
                    Through our video conferencing tool, you are able to bring together your team or offer collaboration tools to your users.
                    </p>
                    <video className="lazy">
                        <source src={stickyVideo} type="vide0/mp4"></source>
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
                </div>
            </div>
            <div className="txt">
                <h3>
                    Create a better view of your business with our data driven dashboards
                </h3>
                <div className="scroll-nav">
                    <a href="#1">Invite and view your team members</a>
                    <a href="#1">Keep track of projects</a>
                </div>
            </div>
        </section>
    )
}

export default ImageTextStickyComponent;