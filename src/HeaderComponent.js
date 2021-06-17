import './styles/header.css';
import ButtonComponent from './ButtonComponent';

window.addEventListener('scroll',  scrollFunction);

let intervalId;
window.clearInterval(intervalId)

function isElementInViewPort(element){
    let rects = element.getClientRects();
    for (let i = 0, l = rects.length; i < l; i++) {
        let r = rects[i];
        const rectCoordinates = [
          {x: r.left, y: r.top},
          {x: r.right, y: r.top},
          {x: r.left, y: r.bottom},
          {x: r.right, y: r.bottom},
          {x: (r.left + r.right)/2, y: (r.top + r.bottom)/2}
        ];

        for(let coordinate of rectCoordinates) {
            let calculatedElement = document.elementFromPoint(coordinate.x, coordinate.y);

            if(calculatedElement == null){
                continue;
            }
            if(calculatedElement === element){
                return true;
            }
        }
    }
    return false;
}

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("header").style.position = "absolute";
    if(isElementInViewPort(document.getElementById("cta"))){
        document.getElementById("header").style.position = "sticky";
        window.removeEventListener('scroll', scrollFunction);
    }
  } else {
    document.getElementById("header").style.position = "sticky";
  }
}

function Header(){
    
    function changeClassName(e) {
        e.target.classList.add('active')
    }

    function backtoNormal(e) {
        e.target.classList.remove('active')
    }



    return(
        <header id="header" className="header-container">
            <h1>KMMRCE</h1>
            <ul className="navigational-links antialiased" onMouseOver={changeClassName} onMouseLeave={backtoNormal}>
                <li className="nav_item">
                    <a href="#1" className="nav_link">Platform</a>
                </li>
                <li className="nav_item">
                    <a href="#1" className="nav_link">Super Merchants</a>
                </li>
                <li className="nav_item">
                    <a href="#1" className="nav_link">Pricing</a>
                </li>
                <li className="nav_item">
                    <a href="#1" className="nav_link">Partners</a>
                </li>
                <li className="nav_item">
                    <a href="#1" className="nav_link">Docs</a>
                </li>
            </ul>
            <div className="demo-container">
                <ButtonComponent name="Request Demo &emsp;>" className="green"/>
            </div>
        </header>
    );
}

export default Header;