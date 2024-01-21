import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About Us',
    href: 'about',
  },
  {
    name: 'Contact',
    href: 'contact',
  },
  {
    name: 'Admission Enquiry',
    href: 'admission',
  },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative w-full bg-blue-100"> {/* Use your desired color here */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">

        <div className="hidden grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                {/* <a
                  href={item.href} 
                  className="text-xl font-semibold  text-gray-800 hover:text-gray-900"
                >
                  {item.name}
                </a> */}
                <Link to={item.href} className='text-xl font-semibold  text-gray-800 hover:text-gray-900'>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-blue-100 shadow-lg ring-1 ring-black ring-opacity-5"> {/* Use your desired color here */}
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
