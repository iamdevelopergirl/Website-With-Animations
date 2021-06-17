import ButtonComponent from './ButtonComponent';
import './styles/container.css';

function OneupFooterComponent(){
    return (
        <section id="cta" className="cta">
            <h3>Ready to grow your business?</h3>
            <ButtonComponent name="Request Demo &emsp;>" className="green"/>
        </section>
    )
}

export default OneupFooterComponent;