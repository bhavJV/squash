import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 37.7749,
      lng: -122.4194
    },
    zoom: 14
  };

  render() {
    return (
      <div className='"maps-container'>
        <div className="map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCgbp4hHoey3OUABV9ViLTapAOYTT_xb4I' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={37.7749}
              lng={-122.4194}
              text="Recycling Facility" />
          </GoogleMapReact>
        </div>
      </div>
      
    );
  }
}

export default Map;