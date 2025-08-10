import React, { useState } from 'react'
import dropdownImage from '../assets/circle-chevron-down-solid.svg'

const Collection = () => {

  const [showFilters, setShowFilters]= useState(false);
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      <div className='min-w-60'>
        <p onClick={()=>{setShowFilters(!showFilters)}} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilters?'':'-rotate-90'} `} src={dropdownImage} alt="" />
        </p>
          {/* Category Filter */}
          <div className= {`border border-gray-300 pl-5 py-3 mt-6  ${showFilters ? '': 'hidden'} sm:block`}>
            <p className='mb-3 text-md font-medium '>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'gadgets'} />Gadgets
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'accessories'} />Accessories
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={"layers"} />Layers
              </p>
            </div>
          </div>

          {/* Subcategory Filters */}

                  <div className= {`border border-gray-300 pl-5 py-3 mt-6  ${showFilters ? '': 'hidden'} sm:block`}>
            <p className='mb-3 text-md font-medium '>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={''} />Laptop
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={''} />Phones
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={''} />Tablets
              </p>
            </div>
          </div>
          
      </div>
      
    </div>
  )
}

export default Collection
