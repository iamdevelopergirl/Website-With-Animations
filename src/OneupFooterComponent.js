import Button from './components/common/button.js';
import './styles/container.css';

function OneupFooterComponent(){
    return (
        <section id="cta" className="cta">
            <h3>Ready to grow your business?</h3>
            <Button name="Request Demo &emsp;>" className="green"/>
        </section>
    )
}

export default OneupFooterComponent;