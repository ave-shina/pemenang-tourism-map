import { useEffect } from "react";
import L from "leaflet";
import * as ReactLeaflet from "react-leaflet";
import "leaflet/dist/leaflet.css";

import MapMarker from "./MapMarker";

import styles from "./Map.module.css";

import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

const { MapContainer, MapConsumer } = ReactLeaflet;

const Map = ({ children, className, ...rest }) => {
    const { toggle } = rest;
    let mapClassName = styles.map;

    if (className) {
        mapClassName = `${mapClassName} ${className}`;
    }
    useEffect(() => {
        (async function init() {
            delete L.Icon.Default.prototype._getIconUrl;

            L.Icon.Default.mergeOptions({
                iconRetinaUrl: iconRetinaUrl.src,
                iconUrl: iconUrl.src,
                shadowUrl: shadowUrl.src,
            });
        })();
    }, []);

    return (
        <MapContainer className={mapClassName} {...rest}>
            <MapConsumer>{(map) => children(ReactLeaflet, map)}</MapConsumer>
            <MapMarker toggle={toggle} />
        </MapContainer>
    );
};

export default Map;
