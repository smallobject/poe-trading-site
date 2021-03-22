import React from 'react';
import { ReactComponent as CheckMarkSVG } from '../assets/check-mark.svg';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import './ui.css';

const CheckMark = () => {
  return (
    <div>
      <Tippy content='Item is verified' className='text-xs' theme='tomato'>
        <CheckMarkSVG className='w-2.5 h-2.5 mt-1.5 ml-1.5' fill='#34d399' />
      </Tippy>
    </div>
  );
};

export default CheckMark;
