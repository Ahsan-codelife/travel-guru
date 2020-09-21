import React from 'react';
import GoogleMapReact from 'google-map-react';
import { MDBIcon } from 'mdbreact';



const Gmap = (props) => {
    const marker = props.marker;
    console.log(marker)
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyByIaqQbqmkciufaLCNv3OcvxeF13t7aXs" }} 
          defaultCenter={marker}
          defaultZoom={10}
        >
        
          <MDBIcon className="fa-3x" style={{color:'red'}} icon="map-marker" position={marker} />
        </GoogleMapReact>
      </div>
    );
};

export default Gmap;