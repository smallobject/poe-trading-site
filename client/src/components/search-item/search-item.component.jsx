import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { findCurrency } from '../../helpers/index';
import CheckMark from '../../ui/CheckMark';

import {
  checkItemLvlRequirements,
  checkSocketsAndColors,
  renderLinks,
} from '../../helpers/itemFunctions';

const SearchItem = ({ item }) => {
  return (
    <>
      {/* First Column Starts here for Icons and Pricing, Details*/}
      <div>
        {/* Item name and art */}
        <div className='flex justify-center items-center h-full'>
          <img
            className='highlight imgRender'
            src={item.item.icon}
            alt={item.item.name}
          />

          {/* Item sockets and links */}
          <div className='sockets highlight'>
            {item.item.sockets ? checkSocketsAndColors(item) : null}
            {item.item.sockets ? renderLinks(item) : null}
          </div>
        </div>
        {/* Item price */}
        <div className='flex pl-2'>
          <span className='text-gray-300 text-xs'>
            {`${item.listing.price.amount}x`}
          </span>
          <img
            alt={findCurrency(item.listing.price.currency)}
            src={
              process.env.PUBLIC_URL + findCurrency(item.listing.price.currency)
            }
            className='h-5 w-5 float-right'
          />
          {/* Item online status, checking if person who posted it is afk or active */}
          <div className='flex items-center justify-center'>
            <span
              className={`rounded-full ml-1 py-1.5 px-1.5 ${
                item.listing.account.online.status
                  ? 'bg-yellow-400'
                  : 'bg-green-400'
              }`}
            />
            {/* The account that listed the item and copy to clipboard whisper*/}
            <span className='text-xs text-gray-500 ml-1'>
              {item.listing.account.name}
            </span>
            <CopyToClipboard text={item.listing.whisper}>
              <span className='text-gray-400 text-xs ml-1 cursor-pointer hover:text-gray-200'>
                Whisper
              </span>
            </CopyToClipboard>
          </div>
          {/* {item.item.verified ? (
            <CheckMark
              className='w-2.5 h-2.5 mt-1.5 ml-1.5'
              fill='rgba(52, 211, 153)'
            />
          ) : null} */}
          <CheckMark></CheckMark>
        </div>
      </div>
      {/* New Column Starts here for the item itself */}
      {/* Item name */}
      <div>
        <div className='font-medium unique-item pt-1 pl-2 text-center'>
          {item.item.name}
        </div>
        {/* Item level requirements */}
        {checkItemLvlRequirements(item)}

        <hr className='unique-hr mt-1' />
        {/* Item implicit mods */}
        <div className='text-sm text-center my-1 text-gray-200'>
          {item.item.implicitMods ? item.item.implicitMods[0] : ''}
        </div>
        {item.item.implicitMods ? <hr className='unique-hr' /> : ''}
        {/* Item explicit mods */}
        <div className='text-center text-sm mt-1 text-gray-200'>
          {item.item.explicitMods
            ? item.item.explicitMods.map((mod) => {
                return <div>{mod}</div>;
              })
            : ''}
        </div>
        {/* Item corruption */}
        <div className='text-sm font-medium text-red-600 text-center'>
          {item.item.corrupted ? 'Corrupted' : ''}
        </div>
      </div>
      {/* <div>{selectedCharacterItem ? renderCharacterItemsList() : ''}</div> */}
    </>
  );
};

export default SearchItem;
