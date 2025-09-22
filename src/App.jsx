import './App.css';
import Minus from './icons/Minus';
import PlusIcon from './PlusIcon';
import background from '../public/background-pattern-desktop.svg';
import Star from '../public/icon-star.svg';
import { data } from '../src/data';
import { useState } from 'react';

export default function App() {
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <div className="w-full min-h-screen bg-purple-100 relative">
      <div className="absolute top-0 right-0 w-full max-md:h-[34vh]">
        <img
          src={background}
          alt="Background"
          className="w-full h-auto max-sm:h-full object-cover"
        />
      </div>
      <div className="absolute bg-white top-28 xl:top-20 max-sm:top-10 max-lg:top-14 right-[28%] left-[28%] rounded-md p-5 max-md:right-[6%] max-md:left-[6%] max-sm:p-3 z-10">
        <div className="flex justify-start items-center mb-4 max-sm:mb-2">
          <img src={Star} alt="Star" className="mr-2" />
          <h1 className="font-semibold font-worksans text-3xl">FAQs</h1>
        </div>
        {data.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="border-b border-gray-50 rounded-sm py-3">
              <div
                className="flex justify-between items-center "
                
              >
                <div className="font-worksans font-semibold md:text-[15px] text-sm pe-3">
                  {item.title}
                </div>
                <div className='cursor-pointer' onClick={() => toggleItem(item.id)} >{isOpen ? <Minus /> : <PlusIcon />}</div>
              </div>
              {isOpen && (
                <div className="text-gray-500 mt-2 md:text-sm text-xs">{item.describtion}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
