import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
const ProductDisplay = ({id, image,title,prize,rate})=>{

    const {currency} = useContext(ShopContext)
    return(
        <Link className='text-gray-700 cursor-pointer h-full flex flex-col' to={`products/${id}`}>
            <div className='overflow-hidden h-48 flex-shrink-0'>
                <img src={image} alt="image" className='w-full h-full object-cover hover:scale-110 transition ease-in-out' />
            </div>
            <div className='flex-1 flex flex-col justify-between p-3'>
                <p className='text-sm mb-2'>{title} <span className='text-sm font-bold pl-2'>{rate}</span></p>
                <p className='text-sm font-medium mt-auto'>{currency}{prize}</p>
            </div>
        </Link>
    )
}
export default ProductDisplay;