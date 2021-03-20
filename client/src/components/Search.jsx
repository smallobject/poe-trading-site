import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import { MoviesData, renderMovieTitle } from './PoEItems';
import './custom.css';

import { connect } from 'react-redux';
import { fetchLeagueItem } from '../actions';

class Search extends Component {
  state = {
    searchedItemName: '',
    sockets: {
      min: Number,
      max: Number,
    },
  };

  doThis = (e) => {
    this.props.fetchLeagueItem(this.state);
    e.preventDefault();
  };

  render() {
    return (
      <div className='autocomplete-wrapper'>
        <form onSubmit={this.doThis} className='autocomplete-wrapper m2'>
          <Autocomplete
            inputProps={{ placeholder: 'Search for an item..' }}
            value={this.state.searchedItemName}
            items={MoviesData()}
            getItemValue={(item) => item}
            shouldItemRender={renderMovieTitle}
            renderMenu={(item) => <div className='dropdown'>{item}</div>}
            renderItem={(item, isHighlighted) => (
              <div className={`item ${isHighlighted ? 'selected-item' : ''}`}>
                {item}
              </div>
            )}
            onChange={(event, searchedItemName) =>
              this.setState({ searchedItemName })
            }
            onSelect={(searchedItemName) => {
              this.setState({ searchedItemName });
            }}
          />
          {/* <div className='bg-gray-900 flex mt-2 p-2'> */}
          <div className='mb-5'>
            <button
              onClick={this.doThis}
              className='w-28 h-8 bg-gray-900 text-gray-200 shadow-lg border-gray-500 border-solid border rounded-lg'
            >
              Search
            </button>
            <label className='text-gray-400 text-sm h-full m-2'>Sockets</label>
            <input
              className='search-input-query text-xs m-1'
              placeholder='Min'
              value={this.state.sockets.min}
              onChange={(socketMin) =>
                this.setState({
                  ...this.state,
                  sockets: {
                    ...this.state.sockets,
                    min: parseInt(socketMin.target.value),
                  },
                })
              }
            />
            <input
              className='search-input-query text-xs m-1'
              placeholder='Max'
              value={this.state.sockets.max}
              onChange={(socketMax) =>
                this.setState({
                  ...this.state,
                  sockets: {
                    ...this.state.sockets,
                    max: parseInt(socketMax.target.value),
                  },
                })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    leagueItem: state.leagueItem,
  };
};

export default connect(mapStateToProps, {
  fetchLeagueItem,
})(Search);
