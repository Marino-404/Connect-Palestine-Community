import React from 'react'
import { useAppContext } from '../AppContext';
import ReactPlayer from 'react-player'

const Video = () => {

  const { mode } = useAppContext();

  return (
    <>
      <div className='w-[98%] h-[70vw] xl:h-[26vw] xl:w-[50%] md:h-[26vw] md:w-[50%] flex flex-col z-10 mb-4 gap-4' >
          <span className={`text-center font-poppins font-semibold ${mode ? 'text-custom-white' : 'text-custom-black'}`} >
            Últimos contenidos
          </span>
          <div className='w-full h-[70vw] xl:h-[26vw] md:h-[26vw] rounded-lg' >
          <ReactPlayer controls width='100%' height='100%' url='https://youtu.be/h1BcLcn85gs?si=EYJ4-im92VYHE8o1' />
          </div>
      </div>
    </>
  )
}

export default Video
