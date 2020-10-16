import React, { Component } from 'react';

import SearchBar from "./search_bar";
import Gif from "./gif";
import GifList from "./gif_list";


class App extends Component {
  render() {
    const gifs =[
      {id:"14xzPQjU62JPbi"},
      {id:"14xzPQjU62JPbi"},
      {id:"14xzPQjU62JPbi"},
    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar/>
          <div className="selected-gif">
              <Gif id="14xzPQjU62JPbi"/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs}/>
        </div> 
      </div>
    );
  }
}

export default App;
