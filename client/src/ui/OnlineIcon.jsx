import React from 'react';
import Tippy from '@tippyjs/react';
import './ui.css';

const OnlineIcon = () => {
  return (
    <Tippy
      content='Player is online'
      className='text-green-400'
      theme='poe-search'
    >
      <span className='rounded-full ml-1 py-1.5 px-1.5 bg-green-400' />
    </Tippy>
  );
};

export default OnlineIcon;
