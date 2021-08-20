import './styles/footer.css';
import logo from './images/logo_white.svg'
import InputComponent from './InputComponent';

const listItems = [
    {
        0 : ["Home", "Platform", "Super Merchants"]
    },
    {
        1 : ["Pricing", "Partners", "Docs"]
    }
]

function _getList(ul){
    let options = ul.map((element, index) => {
        const liElement = <li className="link_item" key={index}>
                <a href="#1" className="link">{element}</a>
            </li>
        return liElement;
    });
    return(
        <ul>
            {options}
        </ul>
    )
};

function getMiddleFooter(){
    const middleElement = listItems.map((_, index) => {
        let columnElements = <div className="column" key={index}>
            {_getList(listItems[index][index])}
        </div>
        return columnElements;
    });
    return(
        <div className="middle">
            {middleElement}
        </div>
    )
}

function FooterComponent(){
    return(
        <footer>
            <div className="top">
                <div className="left">
                    <img src={logo} alt=""/>
                </div>
                {getMiddleFooter()}
                <div className="right">
                    <div className="subs">
                        <p className="title">
                            Sign up for developer updates
                        </p>
                        <form method="post">
                            <InputComponent name="email" type="email"/>
                            <InputComponent name="sign_up" type="hidden" value="yes_save"/>
                            <InputComponent type="submit" value="Sign up"/>
                        </form>
                        <p className="note">
                            You can unsbuscribe at anytime. Read our <a href="#1">privacy policy</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <p>
                    © KMMRCE. 
                    <a href="#1">Privacy Policy</a>
                    <a href="#1">Terms & Conditions</a>
                    <a href="#1">Cookie Policy</a>
                </p>
                <p>
                    <span>
                        A <a href="#1">PPMG</a> Product
                    </span>
                </p>
            </div>
        </footer>
    )
}

export default FooterComponent;
