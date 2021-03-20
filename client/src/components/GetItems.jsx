import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchCharacterItems } from '../actions';

class GetItems extends Component {
  handleCharacterItems = () => {
    this.props.fetchCharacterItems(
      this.props.completedAccount,
      this.props.completedCharacter
    );
  };

  render() {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a
        onClick={this.handleCharacterItems}
        class="items-center mx-1 px-3 flex float-right text-sm bg-gray-700 text-gray-300 hover:bg-gray-300 hover:text-gray-700 rounded-lg h-6 w-14"
        href="#"
      >
        <span>Fetch</span>
      </a>
    );
  }
}

const mapStateToProps = (state) => {
  return { characterItems: state.characterItems };
};

export default connect(mapStateToProps, {
  fetchCharacterItems,
})(GetItems);
