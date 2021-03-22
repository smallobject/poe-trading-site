import React from 'react';
import { ReactComponent as CheckMarkSVG } from '../assets/check-mark.svg';
import Tippy from '@tippyjs/react';
import './ui.css';

const Example = () => {
  return (
    <div>
      <Tippy content='hello'>
        <CheckMarkSVG className='cursor-pointer' />
      </Tippy>
    </div>
  );
};

export default Example;
