import React from 'react';
import Tippy from '@tippyjs/react';
import './ui.css';

const AwayIcon = () => {
  return (
    <Tippy content='Player is AFK' className='text-yellow-400' theme='tomato'>
      <span className='rounded-full ml-1 py-1.5 px-1.5 bg-yellow-400' />
    </Tippy>
  );
};

export default AwayIcon;
