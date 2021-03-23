import React, { Component } from 'react';

import GetCharacterItems from './GetCharacterItems';
import './custom.css';

class SideBar extends Component {
  render() {
    return (
      <div>
        <div className='p-4 pb-0 mx-auto flex flex-wrap justify-center items-center'>
          <div className='p-4 w-full lg:w-3/4 bg-gray-800 dark:bg-gray-200'>
            <div className='p-4 text-gray-700 bg-gray-900 dark:bg-gray-100 dark:text-gray-700 rounded-lg shadow-lg font-medium'>
              <span className='px-2 mr-2 border-r border-gray-800'>
                <img
                  src='https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-16.png'
                  alt='alt placeholder'
                  className='w-4 h-4 -mt-1 inline mx-auto'
                />
                <span className='font-medium text-sm text-gray-400 dark:text-gray-800 pl-2'>
                  Let's Trade
                </span>
              </span>
              <span className='px-2 py-1 cursor-pointer bg-gray-800 dark:bg-gray-300 dark:text-gray-800 text-gray-300 text-sm rounded mb-5'>
                <span className='mx-1'>Trade</span>
              </span>
              <span className='px-2 py-1 cursor-pointer hover:bg-gray-800 hover:text-gray-300 dark:hover:bg-gray-300 dark:hover:text-gray-800 text-sm rounded mb-5'>
                <span className='mx-1'>Ladder</span>
              </span>
              <span className='px-2 py-1 cursor-pointer hover:bg-gray-800 hover:text-gray-300 dark:hover:bg-gray-300 dark:hover:text-gray-800 text-sm rounded mb-5'>
                <span className='mx-1'>Mods</span>
              </span>
              {/* <span className='text-bold text-red-500'>
                {
                  'Search filters disabled for dev state => Selected: 6 Socket Only'
                }
              </span> */}
              <span className='relative float-right mr-3'>
                <GetCharacterItems />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
