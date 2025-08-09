import userIcon from '../assets/user-solid.svg';
import checkIcon from '../assets/circle-check-solid-full.svg';
import exchangeIcon from '../assets/right-left-solid-full.svg';

const OurPolicy = ()=>{
    return(
        
        <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 bg-gray-50 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] items-center px-4" >

            <div>
                <img src={exchangeIcon} alt="Exchange Policy" className="w-12 m-auto mb-5"/>
                <p className="font-semibold">Easy Exchange Policy</p>
                <p className="text-gray-400">We offer Hassle free exchange policy</p>
             </div>
             
            <div>
                <img src={checkIcon} alt="Return Policy" className="w-12 m-auto mb-5"/>
                <p className="font-semibold">7 Days Return Policy</p>
                <p className="text-gray-400">We provide 7 days free return policy</p>
             </div>
             
            <div>
                <img src={userIcon} alt="Customer Support" className="w-12 m-auto mb-5"/>
                <p className="font-semibold">Best Customer Support</p>
                <p className="text-gray-400">We provide 24/7 customer support</p>
             </div>
             
        </div>
        
    )
}

export default OurPolicy;