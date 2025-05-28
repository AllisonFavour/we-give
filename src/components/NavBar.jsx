import SearchIcon from '../assets/icons/search.png';
import HamburgerMenu from '../assets/icons/pajamas_hamburger.png';

export default function NavBar() {
  return (
    <nav className='border-b-2 border-b-red-600'>
        <div className='flex justify-between p-4 px-6'>
            <span className='font-bold text-lg'>WeGive</span>

            <ul className='flex items-center space-x-4'>
                <li>
                    <a href="#">
                        <img src={SearchIcon} alt="Search" className="inline-block w-6 h-6" />
                    </a>
                </li>

                <li className='ml-6'>
                    <a href="#">
                        <img src={HamburgerMenu} alt="Hamburger Menu" className="inline-block w-6 h-6" />
                    </a>
                </li>
            </ul>
        </div>
    </nav>
  )
}
