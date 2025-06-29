import Ear from '../images/Ear.jpeg';
import '../products/product.css';
function Card(){
    return(
        <>
        <div className="allCards">
        <div className="productCard">
            <img src="{Ear}" alt="CardImage" className='card'/>
            <h1 className="cardTitle">Airpod 2 pro</h1>
            <p className="cardDescription">
                Up to 2x more Active Noise Cancellation.2 <br />
                 Adaptive Audio that tailors noise control <br />
                 to your environment.3 Personalized Spatial <br />
                 Audio that immerses you in sound.4 And a <br />
                 new end-to-end experience to test, <br />
                1 aid,1 and help protect your hearing.5
            </p>
            <p className="cardCategory">
                Wireless Ear buds
            </p>
            <p className="rating">⭐️⭐️⭐️⭐️✨</p>
        </div>
         <div className="productCard">
            <img src="{Ear}" alt="CardImage" className='card'/>
            <h1 className="cardTitle">Apple Vision Pro</h1>
            <p className="cardDescription">
Apple Vision Pro seamlessly blends digital
content with your physical space. So you <br />
can work, watch, relive memories, and <br />
connect in ways never before possible. <br />
The era of spatial computing is here.
            </p>
            <p className="cardCategory">
              Mixed reality Headset
            </p>
            <p className="rating">⭐️⭐️⭐️⭐️✨</p>
        </div>
         <div className="productCard">
            <img src="{Ear}" alt="CardImage" className='card'/>
            <h1 className="cardTitle">Apple Watch SE</h1>
            <p className="cardDescription">
Stay connected, active, and healthy with the Apple <br />
Watch SE. Featuring essential features like fitness <br />
tracking, heart rate monitoring, sleep tracking, <br />

for your everyday life, at a more affordable price. <br />
            </p>
            <p className="cardCategory">
               Smart Watch 
            </p>
            <p className="rating">⭐️⭐️⭐️⭐️✨</p>
        </div>
        </div>
        </>
    )
}

export default Card;