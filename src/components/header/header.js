import './header.scss';
import Button from '../common/button.js'
import { NavLink } from 'react-router-dom';

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

const Header = () => (
    <header id="header" className="header-container">
        <h1>KMMRCE</h1>
        <div className="navigation-div antialiased">
                <nav>
                    <NavLink exact to="/" activeClassName="active">Platform</NavLink>
                    <NavLink exact to="/supermerchant" activeClassName="active">Super Merchants</NavLink>
                    <NavLink exact to="/pricing" activeClassName="active">Pricing</NavLink>
                    <NavLink exact to="/partners" activeClassName="active">Partners</NavLink>
                    <NavLink exact to="/docs" activeClassName="active">Docs</NavLink>
                </nav>
            </div>
            <Button name="Request Demo &emsp;>" className="green"/>
    </header>
)

export default Header;
