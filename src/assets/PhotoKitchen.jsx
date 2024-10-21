import React from 'react'


const PhotoKitchen = ({img}) => {
  return (

    <div className='flex w-[210px] h-[210px]' >
      <img className='w-full h-full rounded-full border border-black z-50' src={img} alt="" />
    </div>
    
  )
}

export default PhotoKitchen