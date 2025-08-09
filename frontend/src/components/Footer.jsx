import logo from '../assets/thegadgetshop-high-resolution-logo-transparent.png'
const Footer = ()=>{
    return(
        <div className='bg-gray-100 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]'>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] p-10 gap-14 my-10 mt-40 text-sm ">
                <div>
                    <img src={logo} alt="logoImage" className='w-32 md:w-64 mb-5'/>
                    <p className='w-full md:w-2/3'>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Possimus ut voluptas unde ipsam corrupti cumque, reiciendis,
                    alias non dolorem delectus consequuntur aspernatur recusandae nesciunt voluptatibus 
                    hic atque minus quibusdam obcaecati?</p>
                </div>
                <div>
                        <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='text-gray-600 flex flex-col gap-1'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Refund Policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>888-888-888</li>
                        <li>contact@thegadgetshop</li>
                    </ul>
                </div>
                
            </div>
            <div>
                    <hr/>
                    <p className='py-4 text-gray-600 text-sm text-center'>Copyright 2025@thegadgetshop - All Right Reserve</p>
                </div>

        </div>
    )
}

export default Footer;