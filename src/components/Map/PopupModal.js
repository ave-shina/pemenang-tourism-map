import React from "react";
import { Popup } from "react-leaflet";

const PopupModal = (data) => {
    const { name, position, gmaps } = data.data;

    return (
        <Popup>
            <p class="popup-title">{name}</p>
            <a href={gmaps} target="_blank" class="popup-link">
                Click for More Information
            </a>
        </Popup>
    );
};

export default PopupModal;
