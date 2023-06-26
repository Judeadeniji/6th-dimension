import { memo } from 'brace-js';
import logo from '../assets/logo.png';
import Image from './Image'
function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full">
            <img width='inherit' height='inherit' src={logo} alt='logo' style={{
              filter: 'none'
            }}/>
          </div>
          <h1 className="ml-2 text-xl font-bold"><span className="text-purple-600">Sixth</span> Dimension</h1>
        </div>
        <button className="bg-gradient-to-r from-blue-700 to-blue-600
        text-white rounded-md font-bold px-3 py-2 m-auto mr-4">Try Now</button>
        <nav>
          <ul className="hidden items-center sm:flex lg:hidden">
            <li className="ml-4">
              <a
                href="#"
                className="text-gray-800 hover:text-blue-500 font-medium"
              >
                Home
              </a>
            </li>
            <li className="ml-4">
              <a
                href="#"
                className="text-gray-800 hover:text-blue-500 font-medium"
              >
                About
              </a>
            </li>
            <li className="ml-4">
              <a
                href="#"
                className="text-gray-800 hover:text-blue-500 font-medium"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}


export default memo(Header)