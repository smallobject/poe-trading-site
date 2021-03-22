import React from 'react';
import Tippy from '@tippyjs/react';
import './ui.css';

const HeaderQuestionMark = () => {
  return (
    <Tippy
      placement='bottom'
      content={`Enter your account and load a characters items. WARNING: Profile must be PUBLIC.`}
      maxWidth='150px'
      className='text-gray-300'
      theme='poe-search'
    >
      <span className='text-l mr-2 text-gray-400 cursor-pointer'>?</span>
    </Tippy>
  );
};

export default HeaderQuestionMark;
