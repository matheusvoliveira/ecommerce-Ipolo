import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
 const BuyPage = () => {
    let history = useHistory()
    const [tShirt, setShirt ] = useState("https://ae04.alicdn.com/kf/Hb2350b973b064e7598bb3a89080150f1U.jpg")
    const clickWhite = () => {
        setShirt("https://ae04.alicdn.com/kf/Hb2350b973b064e7598bb3a89080150f1U.jpg")
    }
    const clickYellow = () => {
        setShirt("https://ae04.alicdn.com/kf/H08d3b5ea65dd4f2b8b3e565f8a8e6b82O.jpg")
    }
    const clickBlue = () => {
        setShirt("https://ae04.alicdn.com/kf/H49a1b163eb2f41d98a90411452050fffw.jpg")
    }
    const clickGreen = () => {
        setShirt("https://ae04.alicdn.com/kf/Hc3529ed384e743f9ab946f6c4a943aeai.jpg")
    }
    const clickOrange = () => {
        setShirt("https://ae04.alicdn.com/kf/Hb4f6999786fa4f6c81a4878811e2b42cD.jpg")
    }
/*     function goToDataPage(){
        setTimeout(window.location.reload(true) ,0)
    } */
    return (
        <div className="BuyPage">
            <aside className="flexDetails">
                <img className="poloflex" src={tShirt} />
                <div className="chooseflex">
                    <h2>Camisa Ipolo com Gola polo multicolorida simples Bordado Apple MAckintosh</h2><hr />
                    <p>$ 999,99</p>
                    <p>10x de $ 99,99</p>
                    <p>colors</p>
                    <div className="radio colors">
                        <input type='radio' value='white' name='color'  onClick={clickWhite}></input>
                        <input type='radio' value='yellow' name='color' onClick={clickYellow}></input>
                        <input type='radio' value='blue' name='color' onClick={clickBlue}></input>
                        <input type='radio' value='green' name='color'onClick={clickGreen}></input>
                        <input type='radio' value='orange' name='color'onClick={clickOrange}></input>
                    </div>
                    <p>Sizes</p>
                    <div className="radio sizes">
                        <input type='radio' value='xs' name='size' id='xs'></input> 
                        <label for='xs'>XS</label>
                        <input type='radio' value='s' name='size' id='s'></input> 
                        <label for='s'>S</label>
                        <input type='radio' value='m' name='size' id='m' checked='checked'></input> 
                        <label for='m'>M</label>
                        <input type='radio' value='l' name='size' id='l'></input> 
                        <label for='l'>L</label>
                        <input type='radio' value='xl' name='size' id='xl'></input> 
                        <label for='xl'>XL</label>
                    </div>
                    <p>Quantity</p>
                    <div className="quant">
                        <input type='number' max='10' min='1' checked='1' ></input>
                    </div>
                    <button
                    onClick={() => {
                        history.push('/datapage')
                    }}
                    >
                       Login
                    </button>
                </div>
            </aside>
            <div className='description'>
            <p> Color:	White, yellow, blue, green, red <br />
                Style:	Casual<br />
                Pattern Type:	Colorblock<br />
                Neckline:	Polo<br />
                Details:	Tape, Button Front<br />
                Sleeve Length:	Short Sleeve<br />
                Sleeve Type:	Regular Sleeve<br />
                Length:	Regular<br />
                Placket Type:	Half Placket<br />
                Fit Type:	Regular Fit<br />
                Fabric:	Slight Stretch<br />
                Material:	Polyester<br />
                Composition:	97% Polyester, 3% Spandex<br />
                Care Instructions:	Machine wash or professional dry<br />
            </p>
            </div>
        </div> 
     );
}
 
export default BuyPage;