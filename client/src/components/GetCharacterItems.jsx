import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchAccountCharacters } from '../actions';

import GetItems from './GetItems';
import HeaderQuestionMark from '../ui/HeaderQuestionMark';
import ThemeToggle from '../ui/ThemeToggle';

class GetCharacterItems extends Component {
  state = { value: '', character: '' };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleCharacterChange = (event) => {
    this.setState({ character: event.target.value });
  };

  handleSubmit = (event) => {
    this.props.fetchAccountCharacters(this.state.value);
    console.log('I was pressed.');
    event.preventDefault();
  };

  renderCharacters() {
    return this.props.accountCharacters.map((account) => {
      return <option value={account.name}>{account.name}</option>;
    });
  }

  render() {
    if (this.props.accountCharacters.length < 1) {
      return (
        <div>
          <form onSubmit={this.handleSubmit} className='float-left'>
            <HeaderQuestionMark />
            <input
              className='w-28 text-sm text-gray-300 bg-gray-900 border-gray-600 border border-solid rounded-sm'
              onChange={this.handleChange}
              type='text'
              placeholder=' Account Name'
              value={this.state.value}
            />
          </form>
          <div className='float-right'>
            <select className='w-28 text-sm text-gray-400 bg-gray-900 border-gray-600 border border-solid rounded-sm'>
              <option value=''>Empty</option>
            </select>
            <ThemeToggle />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <form
            onSubmit={this.handleSubmit}
            className='float-left'
            id='account'
          >
            <input
              className='w-28 text-sm text-gray-300 bg-gray-900 border-gray-600 border border-solid rounded-sm'
              onChange={this.handleChange}
              type='text'
              placeholder=' Account Name'
              value={this.state.value}
            />
          </form>
          <div className='float-right'>
            <form onChange={this.handleCharacterChange} id='items'>
              <select className='w-28 text-sm text-gray-400 bg-gray-900 border-gray-600 border border-solid rounded-sm'>
                <option value='none' disabled={true} selected={true}>
                  Select
                </option>
                {this.renderCharacters()}
              </select>
              <GetItems
                completedCharacter={this.state.character}
                completedAccount={this.state.value}
              />
            </form>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    accountCharacters: state.accountCharacters,
  };
};

export default connect(mapStateToProps, {
  fetchAccountCharacters,
})(GetCharacterItems);
