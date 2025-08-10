import React, { useContext, useEffect, useState } from 'react'
import dropdownImage from '../assets/circle-chevron-down-solid.svg'
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';
import ProductDisplay from '../components/ProductDisplay';


const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilters, setShowFilters] = useState(false);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const [filter, setFilter] = useState(products);


  const toggleCatergory = (e) => {
    if (category.includes(e.target.value)) {

      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }
  const toggleSubCatergory = (e) => {
    if (subcategory.includes(e.target.value)) {

      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = ()=>{
    let productCopy = products.slice();

    if ( category.length > 0 ){
      productCopy = productCopy.filter(item=>category.includes(item.category))
    }
    if ( subcategory.length > 0 ){
      productCopy = productCopy.filter(item=>subcategory.includes(item.subcategory))
    }

    setFilter(productCopy);

  }
  useEffect(() => {
    applyFilter();
  }, [category,subcategory])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      <div className='min-w-60'>
        <p onClick={() => { setShowFilters(!showFilters) }} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilters ? '' : '-rotate-90'} `} src={dropdownImage} alt="" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6  ${showFilters ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-md font-medium '>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'gadgets'} onChange={toggleCatergory} />Gadgets
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'accessories'} onChange={toggleCatergory} />Accessories
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"layers"} onChange={toggleCatergory} />Layers
            </p>
          </div>
        </div>

        {/* Subcategory Filters */}

        <div className={`border border-gray-300 pl-5 py-3 mt-6  ${showFilters ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-md font-medium '>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Laptop'}  onChange={toggleSubCatergory}/>Laptop
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Phones'}  onChange={toggleSubCatergory}/>Phones
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Tablets'} onChange={toggleSubCatergory} />Tablets
            </p>
          </div>
        </div>

      </div>

      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>

          <Title title1={"All"} title2={"Gadgets"} />
          <select className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort:: Relevant </option>
            <option value="high-low">Sort:: Price High to Low</option>
            <option value="low-high">Sort:: Price Low to High</option>
          </select>
        </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6">
                {
                    filter.map((item, index) => (

                        <ProductDisplay key={index} id={item.id} image={item.image} title={item.title} prize={item.price} rate={item.rate} />
                    )
                    )
                }
            </div>
      </div>

    </div>
  )
}

export default Collection
