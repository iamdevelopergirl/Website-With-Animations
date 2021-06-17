import './styles/container.css';


function _getList(ul){
    let options = ul.map(element => {
        const liElement = <li>{element}</li>
        return liElement;
    });
    return(
        <ul>
            {options}
        </ul>
    )
};

function ImageTextComponent(props){
    return(
        <section className={`image_text ${props.order}`}>
            <div className={`image ${props.layout}`}>
                <div className="row">
                    <div className="left">

                    </div>
                    <div className="right">

                    </div>
                </div>
                <div className="row">
                    <div className="left">

                    </div>
                    <div className="right">
                        
                    </div>
                </div>
            </div>
            <div className="text">
                <h3>
                    {props.strings.h3}
                </h3>
                <h4>
                    {props.strings.h4_0}
                </h4>
                <p>
                    {props.strings.p_0}
                </p>
                {
                    props.strings.seperator ? <div className="seperator"></div> : null
                }
                <h4>
                    {props.strings.h4_1}
                </h4>
                <p>
                    {props.strings.p_1}
                </p>
                {_getList(props.strings.ul)}
            </div>
        </section>
    )
}

export default ImageTextComponent;