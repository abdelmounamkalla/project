import L from "leaflet";
import marker from "../../../assets/png/marker.png"

export default L.icon({
  iconSize: [50, 50],
  iconUrl: marker,
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});
