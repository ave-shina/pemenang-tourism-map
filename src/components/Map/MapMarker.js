import React from "react";
import { Marker, Popup } from "react-leaflet";
import {
    beachIcon,
    divingIcon,
    ekowisataIcon,
    faskesIcon,
    hillIcon,
    hotelIcon,
    pelabuhanIcon,
    puraIcon,
    spbuIcon,
    viharaIcon,
    waterfallIcon,
    wisatalainIcon,
    masjidIcon,
} from "../icon";

import masjid from "./data/masjid.json";
import pura from "./data/pura.json";
import vihara from "./data/vihara.json";
import pelabuhan from "./data/pelabuhan.json";
import spbu from "./data/spbu.json";
import faskes from "./data/faskes.json";
import diving from "./data/diving.json";
import hill from "./data/hill.json";
import beach from "./data/beach.json";
import wisatalain from "./data/wisatalain.json";
import ekowisata from "./data/ekowisata.json";
import waterfall from "./data/waterfall.json";
import hotel from "./data/penginapan.json";

const MapMarker = () => {
    return (
        <>
            {masjid.map((item, index) => (
                <Marker icon={masjidIcon} position={item.position} key={index}>
                    <Popup>{item.name}</Popup>
                </Marker>
            ))}
            {pura.map((item, index) => (
                <Marker icon={puraIcon} position={item.position} key={index}>
                    <Popup>{item.name}</Popup>
                </Marker>
            ))}
            {vihara.map((item, index) => (
                <Marker icon={viharaIcon} position={item.position} key={index}>
                    <Popup>{item.name}</Popup>
                </Marker>
            ))}
            {pelabuhan.map((item, index) => (
                <Marker
                    icon={pelabuhanIcon}
                    position={item.position}
                    key={index}
                >
                    <Popup>{item.name}</Popup>
                </Marker>
            ))}
            {spbu.map((item, index) => (
                <Marker icon={spbuIcon} position={item.position} key={index}>
                    <Popup>{item.name}</Popup>
                </Marker>
            ))}
            {faskes.map((item, index) => (
                <Marker icon={faskesIcon} position={item.position} key={index}>
                    <Popup>{item.name}</Popup>
                </Marker>
            ))}
            {faskes.map((item, index) => (
                <Marker icon={faskesIcon} position={item.position} key={index}>
                    <Popup>{item.name}</Popup>
                </Marker>
            ))}
            {diving.map((item, index) => (
                <Marker icon={divingIcon} position={item.position} key={index}>
                    <Popup>{item.name}</Popup>
                </Marker>
            ))}
            {hill.map((item, index) => (
                <Marker icon={hillIcon} position={item.position} key={index}>
                    <Popup>{item.name}</Popup>
                </Marker>
            ))}
            {beach.map((item, index) => (
                <Marker icon={beachIcon} position={item.position} key={index}>
                    <Popup>{item.name}</Popup>
                </Marker>
            ))}
            {wisatalain.map((item, index) => (
                <Marker
                    icon={wisatalainIcon}
                    position={item.position}
                    key={index}
                >
                    <Popup>{item.name}</Popup>
                </Marker>
            ))}
            {ekowisata.map((item, index) => (
                <Marker
                    icon={ekowisataIcon}
                    position={item.position}
                    key={index}
                >
                    <Popup>{item.name}</Popup>
                </Marker>
            ))}
            {waterfall.map((item, index) => (
                <Marker
                    icon={waterfallIcon}
                    position={item.position}
                    key={index}
                >
                    <Popup>{item.name}</Popup>
                </Marker>
            ))}
            {hotel.map((item, index) => (
                <Marker icon={hotelIcon} position={item.position} key={index}>
                    <Popup>{item.name}</Popup>
                </Marker>
            ))}
        </>
    );
};

export default MapMarker;