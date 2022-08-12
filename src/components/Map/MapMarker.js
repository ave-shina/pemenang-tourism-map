import React from "react";
import { Marker, Popup } from "react-leaflet";
import PopupModal from "./PopupModal";
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

const MapMarker = ({ toggle }) => {
    return (
        <>
            {toggle[7] &&
                masjid.map((item, index) => (
                    <Marker
                        icon={masjidIcon}
                        position={item.position}
                        key={index}
                    >
                        <PopupModal data={item} />
                    </Marker>
                ))}
            {toggle[7] &&
                pura.map((item, index) => (
                    <Marker
                        icon={puraIcon}
                        position={item.position}
                        key={index}
                    >
                        <PopupModal data={item} />
                    </Marker>
                ))}
            {toggle[7] &&
                vihara.map((item, index) => (
                    <Marker
                        icon={viharaIcon}
                        position={item.position}
                        key={index}
                    >
                        <PopupModal data={item} />
                    </Marker>
                ))}
            {toggle[5] &&
                pelabuhan.map((item, index) => (
                    <Marker
                        icon={pelabuhanIcon}
                        position={item.position}
                        key={index}
                    >
                        <PopupModal data={item} />
                    </Marker>
                ))}
            {toggle[4] &&
                spbu.map((item, index) => (
                    <Marker
                        icon={spbuIcon}
                        position={item.position}
                        key={index}
                    >
                        <PopupModal data={item} />
                    </Marker>
                ))}
            {toggle[4] &&
                faskes.map((item, index) => (
                    <Marker
                        icon={faskesIcon}
                        position={item.position}
                        key={index}
                    >
                        <PopupModal data={item} />
                    </Marker>
                ))}
            {toggle[1] &&
                diving.map((item, index) => (
                    <Marker
                        icon={divingIcon}
                        position={item.position}
                        key={index}
                    >
                        <PopupModal data={item} />
                    </Marker>
                ))}
            {toggle[2] &&
                hill.map((item, index) => (
                    <Marker
                        icon={hillIcon}
                        position={item.position}
                        key={index}
                    >
                        <PopupModal data={item} />
                    </Marker>
                ))}
            {toggle[0] &&
                beach.map((item, index) => (
                    <Marker
                        icon={beachIcon}
                        position={item.position}
                        key={index}
                    >
                        <PopupModal data={item} />
                    </Marker>
                ))}
            {toggle[3] &&
                wisatalain.map((item, index) => (
                    <Marker
                        icon={wisatalainIcon}
                        position={item.position}
                        key={index}
                    >
                        <PopupModal data={item} />
                    </Marker>
                ))}
            {toggle[3] &&
                ekowisata.map((item, index) => (
                    <Marker
                        icon={ekowisataIcon}
                        position={item.position}
                        key={index}
                    >
                        <PopupModal data={item} />
                    </Marker>
                ))}
            {toggle[3] &&
                waterfall.map((item, index) => (
                    <Marker
                        icon={waterfallIcon}
                        position={item.position}
                        key={index}
                    >
                        <PopupModal data={item} />
                    </Marker>
                ))}
            {toggle[6] &&
                hotel.map((item, index) => (
                    <Marker
                        icon={hotelIcon}
                        position={item.position}
                        key={index}
                    >
                        <PopupModal data={item} />
                    </Marker>
                ))}
        </>
    );
};

export default MapMarker;
