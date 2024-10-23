import React from 'react';
import { useAppContext } from '../AppContext';
import Back from '../assets/Back';
import DivLinePages from '../assets/DivLinePages';
import Footer from '../components/Footer';
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from 'react-icons/fa';

const TitleStyle = 'font-poppins font-semibold text-2xl mb-4'
const UbicationStyle = 'font-poppins font-bold text-3xl'

const CardDetail12 = () => {

  const { mode } = useAppContext();

  return (
    <>
      <div>
        <Back SectionName={'Instituciones'} />
      </div>

      <div className={`w-[98%] xl:w-[50%] xl:mx-auto md:mx-auto flex flex-col ${ mode ? 'text-custom-white' : 'text-custom-black'} z-50`} >
      
        <DivLinePages />

        <div className='xl:h-[20vw] flex xl:flex-row flex-col' >
          <div className='flex flex-col w-full text-center justify-center items-center gap-2' >
            <h1 className={TitleStyle} >
              EMBAJADA DE PALESTINA <span className={UbicationStyle}>EN ARGENTINA</span>
            </h1>
            <div className='flex gap-4' >
              <a href='https://www.instagram.com/palestinaenargentina?igsh=MXJ5aXo2d2RxbzdhZA==' target="_blank" rel="noopener noreferrer" className='text-5xl' >
                <AiFillInstagram />
              </a> 
              <a href='https://youtube.com/@embajadapalestina6040?si=3ejZUF73KdrHOEON' target="_blank" rel="noopener noreferrer" className='text-5xl' >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <DivLinePages />

        <div className='xl:h-[20vw] flex xl:flex-row flex-col' >
          <div className='flex flex-col w-full text-center justify-center items-center gap-2' >
            <h1 className={TitleStyle} >
              EMBAJADA DE PALESTINA EN PERU
            </h1>
              <a href='https://www.instagram.com/palestinaenperu?igsh=MWxqZm45dXZ3a3o2Nw==' target="_blank" rel="noopener noreferrer" className='text-5xl' >
                <AiFillInstagram />
              </a> 
          </div>
        </div>

        <DivLinePages />

        <div className='xl:h-[20vw] flex xl:flex-row flex-col' >
          <div className='flex flex-col w-full text-center justify-center items-center gap-2' >
            <h1 className={TitleStyle} >
              EMBAJADA DE PALESTINA EN CHILE
            </h1>
              <a href='https://www.instagram.com/embajadapalestinachile?igsh=MWdtZTdzenIzbHo2Yw==' target="_blank" rel="noopener noreferrer" className='text-5xl' >
                <AiFillInstagram />
              </a> 
          </div>
        </div>

        <DivLinePages />

        <div className='xl:h-[20vw] flex xl:flex-row flex-col' >
          <div className='flex flex-col w-full text-center justify-center items-center gap-2' >
            <h1 className={TitleStyle} >
              EMBAJADA DE PALESTINA EN URUGUAY
            </h1>
              <a href='https://www.instagram.com/palestinaenuruguay?igsh=MTB1aGdlZGppaXpmeA==' target="_blank" rel="noopener noreferrer" className='text-5xl' >
                <AiFillInstagram />
              </a> 
          </div>
        </div>

        <DivLinePages />

        <div className='xl:h-[20vw] flex xl:flex-row flex-col' >
          <div className='flex flex-col w-full text-center justify-center items-center gap-2' >
            <h1 className={TitleStyle} >
              EMBAJADA DE PALESTINA EN NICARAGUA
            </h1>
              <a href='https://www.instagram.com/palestinaennicaragua?igsh=MTFzMHJxeGFtcGliaA==' target="_blank" rel="noopener noreferrer" className='text-5xl' >
                <AiFillInstagram />
              </a> 
          </div>
        </div>

        <DivLinePages />

        <div className='xl:h-[20vw] flex xl:flex-row flex-col' >
          <div className='flex flex-col w-full text-center justify-center items-center gap-2' >
            <h1 className={TitleStyle} >
              EMBAJADA DE PALESTINA EN PERU
            </h1>
              <a href='https://www.instagram.com/palestinaenargentina?igsh=MXJ5aXo2d2RxbzdhZA==' target="_blank" rel="noopener noreferrer" className='text-5xl' >
                <AiFillInstagram />
              </a> 
          </div>
        </div>

        <DivLinePages />

        <div className='xl:h-[20vw] flex xl:flex-row flex-col' >
          <div className='flex flex-col w-full text-center justify-center items-center gap-2' >
            <h1 className={TitleStyle} >
              EMBAJADA DE PALESTINA EN COLOMBIA
            </h1>
              <a href='https://www.instagram.com/embpalcol?igsh=MWo5NHZleDF4OXRnaA==' target="_blank" rel="noopener noreferrer" className='text-5xl' >
                <AiFillInstagram />
              </a> 
          </div>
        </div>

        <DivLinePages />

        <div className='xl:h-[20vw] flex xl:flex-row flex-col' >
          <div className='flex flex-col w-full text-center justify-center items-center gap-2' >
            <h1 className={TitleStyle} >
              EMBAJADA DE PALESTINA EN ESPAÑA
            </h1>
              <a href='https://www.instagram.com/palestinaenespana?igsh=NDY1NHoycHVha2Ry' target="_blank" rel="noopener noreferrer" className='text-5xl' >
                <AiFillInstagram />
              </a> 
          </div>
        </div>

        <DivLinePages />

        <Footer />
         
      </div>

    </>
  );
};

export default CardDetail12;