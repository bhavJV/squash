import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import NavBar from '../Navbar/Navbar';
import "./Map.css"

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
      <><div>
        {/* <NavBar /> this will cause an extra navbar*/} 
      </div>
      <div style={{ height: '50vh', width: '50%' }}>
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
        </div></>
    );
  }
}

export default Map;