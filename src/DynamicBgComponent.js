import dynamicBg01 from './images/dynamic-bg-01.png';

function DynamicBgComponent(){

    var fpsInterval, startTime, now, then, elapsed;
    let inlineStyle = {
        'backgroundColor': "green"
    };

    function startAnimating(){
        fpsInterval = 1000 / 0.3;
        then = Date.now();
        startTime = then;
        console.log(startTime);
        animate();
    }

    function random_bg_color() {
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        let bgColor = "rgb(" + x + "," + y + "," + z + ")";
        console.log(bgColor);
        return bgColor;
    }

    function animate(){
        requestAnimationFrame(animate);
        now = Date.now();
        elapsed = now - then;
        if (elapsed > fpsInterval) {
            then = now - (elapsed % fpsInterval);
            let elem = document.getElementById( "changebg" );
            elem.style.background = random_bg_color();
            elem.style.color = random_bg_color();
        }
    }

    return(
        <section id="changebg" className="dynamic_bg" onMouseOver={startAnimating} style={inlineStyle}>
            <p>
                ""
            </p>
            <h2>
                KMMRCE is an ideal solution for anyone looking to build a bespoke e-comm website. A great foundation has been designed to get you operating at maximum capacity, quickly and efficiently.
            </h2>
            <p>
                ""
            </p>
            <img src={dynamicBg01} alt=""/>
            <h4>
                <strong>Brodie Haupt</strong>, CEO at WLTH
            </h4>
        </section>
    )
}

export default DynamicBgComponent;