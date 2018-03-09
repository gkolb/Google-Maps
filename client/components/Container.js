import React from 'react';
import {render} from 'react-dom';
import {GoogleApiWrapper} from 'google-maps-react';
import Map from './Map';

class Container extends React.Component{

  render(){
    // const style = {
    //   width: '100vw',
    //   height: '100vh'
    // };

    return (
      <div>
        <Map google={this.props.google}/>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(Container);
