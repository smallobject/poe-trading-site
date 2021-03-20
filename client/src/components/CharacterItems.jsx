import React, { Component } from 'react';

import { connect } from 'react-redux';

class CharacterItems extends Component {
  isItem(item) {
    return item.inventoryId === 'Belt';
  }

  logItems = () => {
    const items = this.props.characterItems;

    console.log(items.find(({ inventoryId }) => inventoryId === 'Belt'));
  };

  render() {
    if (this.props.characterItems.length < 1) {
      return <div> </div>;
    }
    return (
      <button className="text-white" onClick={this.logItems}>
        Dev Tools
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    characterItems: state.characterItems,
  };
};

export default connect(mapStateToProps, null)(CharacterItems);
