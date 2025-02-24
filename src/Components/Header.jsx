import { NavLink } from 'react-router-dom'
import HeaderLogo from '../assets/logo.png'

export default function Header(){
    return(
        <div className='my-3 flex justify-around items-center'>
            <div>
                <img src={HeaderLogo} alt="" />
            </div>
            <div className='flex gap-6 items-center'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/'>Fixtures</NavLink>
                <NavLink to='/'>Teams</NavLink>
                <NavLink to='/'>Schedules</NavLink>
                {/* <NavLink to='/'>Coins</NavLink> */}
                <button className='border-amber-400 border-2 py-1 px-3 rounded '>100 Coins</button>
            </div>
        </div>
    )
}