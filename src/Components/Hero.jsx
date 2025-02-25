/* eslint-disable react/prop-types */
import bgShadow from '../assets/bg-shadow.png'
import bannerMain from '../assets/banner-main.png'
export default function Hero(props){
    
    return(
        <div style={{backgroundImage: `url(${bgShadow})`}} className='flex flex-col items-center rounded-2xl my-6'>
            <img src={bannerMain} alt=""/>
            <h2 className='text-3xl my-5 font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
            <p className='my-3'>Beyond Boundaries Beyond Limits</p>
            <button className="mb-5 px-3 py-2 rounded-sm  bg-lime-300 border-gray-300 font-bold" onClick={props.changeCoins}>Claim Free Credits</button>
        </div>
    )
}