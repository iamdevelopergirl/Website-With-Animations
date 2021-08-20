import './button.css';

const Button = (props) => {
    return (
        <button type="button" id={props.id} className={`button-component ${props.className}`}>{props.name}</button>
    )
}

export default Button;