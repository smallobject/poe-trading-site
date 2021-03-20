import React, { Component } from 'react';
import { connect } from 'react-redux';

// Helper Functions
import {
  checkItemName,
  checkItemFrame,
  checkItemFrameHr,
} from '../helpers/itemFunctions';

import SearchItem from './search-item/search-item.component';

import './custom.css';

class ItemResult extends Component {
  state = { selectedCharacterItem: '' };
  //render all character items

  setSelectedCharacterItemState(e) {
    console.log('I am firing', e.target.value);
    this.setState({ selectedCharacterItem: e.target.value });
  }

  renderCharacterItems() {
    if (this.props.characterItems < 1) {
      return;
    } else {
      return (
        <form action=''>
          <label className='mt-4 text-sm text-gray-300'>Select Item</label>
          <select
            name=''
            id=''
            onChange={(e) => this.setSelectedCharacterItemState(e)}
            value={this.state.selectedCharacterItem}
            className='text-sm text-gray-400 bg-gray-900 border-gray-600 border border-solid rounded-sm'
          >
            {this.props.characterItems.map((charItem) => {
              return (
                <option value={charItem.typeLine}>
                  {`${charItem.name} ${charItem.typeLine}`} -{' '}
                  {charItem.inventoryId}
                </option>
              );
            })}
          </select>
        </form>
      );
    }
  }

  //make commands to check rarity, items, etc, so we can add proper colors and things

  renderCharacterItemsList() {
    // Finding the item and assinging it to a variable
    // later change this to search for the item selected by player
    // or just push the whole object using a dropdown menu, probably better instead of this
    // but for testing this is fine
    const items = this.props.characterItems;
    const selectedItem = items.find(
      ({ typeLine }) => typeLine === this.state.selectedCharacterItem
    );
    if (this.state.selectedCharacterItem.length < 2) {
      return <div></div>;
    } else {
      return (
        <div className='text-center'>
          {/* // Renders Current Item */}
          <div className={`font-medium ${checkItemFrame(selectedItem)} pt-1`}>
            {checkItemName(selectedItem)}
          </div>
          {/* // Render Item Requirements (Lvl, Str, Dex, Int) */}
          <div className='font-light text-xs text-center text-gray-200'>
            Level: {selectedItem.requirements[0].values[0][0]} ilvl:{' '}
            {selectedItem.ilvl}
          </div>
          <hr className={`${checkItemFrameHr(selectedItem)} mt-1`} />
          {/* // Checks for implicit mods and renders them if available */}
          <div className='text-sm  my-1 text-gray-200'>
            {selectedItem.implicitMods ? selectedItem.implicitMods[0] : ''}
          </div>
          {selectedItem.implicitMods ? (
            <hr className={`${checkItemFrameHr(selectedItem)}`} />
          ) : (
            ''
          )}
          {/* // Checks for explicit mods and renders them if available */}
          <div className=' text-sm mt-1 text-gray-200'>
            {selectedItem.explicitMods
              ? selectedItem.explicitMods.map((mod) => {
                  return <div>{mod}</div>;
                })
              : ''}
          </div>
          {/* // Renders if item is corrupted or not */}
          <div className='text-sm font-medium text-red-600 text-center'>
            {selectedItem.corrupted ? 'Corrupted' : ''}
          </div>
        </div>
      );
    }
  }
  //this renders all the results currently
  renderLeagueItems() {
    return this.props.leagueItem.map((item) => {
      return (
        <div
          className={`bg-gray-900 m-6 grid grid-cols-3 shadow-md ${
            item.item.corrupted ? 'pb-8' : 'pb-6'
          } max-item-size`}
        >
          <SearchItem item={item} />
          <div>{this.renderCharacterItemsList()}</div>
        </div>
      );
    });
  }

  render() {
    if (!this.props.leagueItem) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <div>
            <div className='ml-6 mt-10'>{this.renderCharacterItems()}</div>
            <div>{this.renderLeagueItems()} </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { leagueItem: state.leagueItem, characterItems: state.characterItems };
};

export default connect(mapStateToProps, null)(ItemResult);
