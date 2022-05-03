import { useState, useEffect } from "react"
import { Link  } from "react-router-dom"
const Home = () => {
    const [shirt, setTshirt ] = useState("https://ae04.alicdn.com/kf/Hb2350b973b064e7598bb3a89080150f1U.jpg")
    function passBy(){ 
        /* let imgs = [setTshirt("https://ae04.alicdn.com/kf/H08d3b5ea65dd4f2b8b3e565f8a8e6b82O.jpg"),
        setTshirt("https://ae04.alicdn.com/kf/H49a1b163eb2f41d98a90411452050fffw.jpg"),
        setTshirt("https://ae04.alicdn.com/kf/Hc3529ed384e743f9ab946f6c4a943aeai.jpg"), 
        setTshirt("https://ae04.alicdn.com/kf/Hb4f6999786fa4f6c81a4878811e2b42cD.jpg")] */
        setTimeout(window.location.reload(true) ,0)
        

      }
    return ( 
        
        <section  className='polos'>
            <div className="intro"></div>
            <div className='polo'>
                
                <div className='polo um'  onClick={ passBy }>
                    <Link to='buypage'>
                        <img className='pWhite' src={shirt}/>
                        <p>Camisa Ipolo com Gola polo multicolorida simples Bordado Apple MAckintosh</p>
                        <p>$ 999,90</p> 
                        <p>10x de $ 99,99</p><br />
                    </Link>
                </div>
            </div>
        </section>
    );
}
 
export default Home;