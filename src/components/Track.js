import React from 'react'
import PropTypes from 'prop-types'

import "./styles/Track.css";

// Here we use destructuring to extract the props into separate variables
// See https://wesbos.com/destructuring-objects/
class Track extends React.Component { 
  
  constructor (props) {
    super();
    this.state = {
      title: props.title,
      artist: props.title,
      playtime: props.playtime,
      albumart: props.albumart,
      favorite: undefined,
      checked: false, // Setting this value is "controlling" it through React: 
        // https://reactjs.org/docs/forms.html#controlled-components
    };

  };

  markFavorite = () => {
    this.setState({ favorite: !this.state.favorite });
    this.setState({ checked: !this.state.checked });
  };
  
  render () {
  return (
    <li className="track">
      <img className="track--albumart" alt={`album art for ${this.state.title}`} src={this.state.albumart} />
      <h3 className="track--title">{this.state.title}</h3>
      <input
        type="checkbox"
        className="track--favorite"
        checked={this.state.checked}
        onChange={this.markFavorite}
      />
      <p className="track--artist">{this.state.artist}</p>
      <p className="track--playtime">{this.state.playtime}</p>
      <button
        className="track--control track--to-top"
        >
        <span role="img" aria-label="send to top">🔝</span>
      </button>
      <button
        className="track--control track--switch"
        >
        <span role="img" aria-label="switch lists">↔</span>
      </button>
    </li>
  );
};

}

export default Track;
