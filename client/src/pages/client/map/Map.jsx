import { useRef,useState } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
}
from "react-leaflet"
import Icon from './constants'
import "leaflet/dist/leaflet.css"
import Location from "./location.json"



const Map = () => {
    const [center , setcenter ] = useState({
        lat: 35.407369, 
        lng: 8.113715
    });
    const zoomLevel=14;
    const mapref=useRef();

return (
    <MapContainer
    center={center}
    zoom={zoomLevel}
    style={{width:'100',height:'100vh'}}
    ref={mapref}>
    <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={center} icon={Icon}  >
        <Popup>
            hi
        </Popup>
    </Marker>

    {Location.map((location,idx) => <Marker 
    position={[location.lat,location.lng]} 
    icon={Icon}
    key={idx}  >
        <Popup 
        className=" flex justify-center items-center text-center text-xl">
            <b>{location.scooter}<br/>{location.city}<br/>{location.admin}
            <br/>{location.lat}<br/>{location.lng}</b>
        </Popup>
    </Marker>)}

    </MapContainer>
  )
}

export default Map