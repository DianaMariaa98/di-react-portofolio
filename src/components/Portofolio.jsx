import React from 'react'
import gaminHub from '../assets/portfolio/gaminHub.png'
import raceThrones from '../assets/portfolio/raceThrones.png'
import trueHikers from '../assets/portfolio/trueHikers.png'
import portofolioMe from '../assets/portfolio/portofolioMe.png'


const Portofolio = () => {
  return <div name ='portofolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-5xl font-bold inline border-b-4 border-gray-500'>Portofolio</p>
            <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            <div className='shadow-md shadow-gray-600 rounded-lg'>
            <div className='w-1/2 px-6 py-3 duration-200'>GamingHub</div>
                <img src={gaminHub} alt="" className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                    <a href='https://gaminghub.cyclic.app/' className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Demo</a>
                    <a href='https://github.com/PrPedrosa/Project2-express-App' className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Code</a>
                </div>
            </div>

            <div className='shadow-md shadow-gray-600 rounded-lg'>
            <div className='w-1/2 px-6 py-3 duration-200'>ThroneRace</div>
                <img src={raceThrones} alt="" className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                    <a href='https://dianamariaa98.github.io/Project_1_Game/' className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Demo</a>
                    <a href='https://github.com/DianaMariaa98/Project_1_' className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Code</a>
                </div>
            </div>

            <div className='shadow-md shadow-gray-600 rounded-lg'>
            <div className='w-1/2 px-6 py-3 duration-200'>TrueHikers</div>
                <img src={trueHikers} alt="" className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                    <a href='https://ihikers.netlify.app/' className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Demo</a>
                    <a href='https://github.com/DianaMariaa98/Trail_Project_Client' className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Code</a>
                </div>
            </div>

            <div className='shadow-md shadow-gray-600 rounded-lg'>
                <div className='w-1/2 px-6 py-3 duration-200'>Portofolio</div>
                <img src={portofolioMe} alt="" className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Demo</button>
                    <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Code</button>
                </div>
            </div>

        </div>
    </div>
 </div>
  
}

export default Portofolio