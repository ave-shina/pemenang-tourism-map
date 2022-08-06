import { useState } from "react";
import Head from "next/head";

import Map from "../components/Map";

import styles from "../../styles/Home.module.css";

import Pemenanggeojson from "../components/Map/data/pemenangMap";

const DEFAULT_CENTER = [-8.4056618, 116.0674516];

export default function Home() {
    const [toggleButton, setToggleButton] = useState(true);

    const handleToggleButton = () => {
        setToggleButton(!toggleButton);
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Peta Wisata Kecamatan Pemenang</title>
            </Head>

            <main className={styles.main}>
                <div className={styles.switchContainer}>
                    <div
                        className={styles.switchButton}
                        onClick={handleToggleButton}
                    >
                        <input
                            type="checkbox"
                            id="toggleWisata"
                            name="toggleWisata"
                            value="toggleWisata"
                            checked={toggleButton}
                            onChange={handleToggleButton}
                        ></input>
                        <label for="toggleWisata"> Wisata</label>
                    </div>
                </div>
                <Map
                    className={styles.homeMap}
                    center={DEFAULT_CENTER}
                    zoom={12}
                    toggle={toggleButton}
                >
                    {({
                        TileLayer,
                        Marker,
                        Popup,
                        Polyline,
                        Polygon,
                        FeatureGroup,
                        GeoJSON,
                    }) => (
                        <>
                            <TileLayer
                                url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png"
                                attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
                            />
                            {/* <GeoJSON data={Pemenanggeojson} style={style} /> */}

                            {Pemenanggeojson.features.map((feature, index) => {
                                console.log(feature.geometry.coordinates);
                                return (
                                    <FeatureGroup color="purple" key={index}>
                                        <Popup>
                                            <p>
                                                {feature.properties.Desa_Name}
                                            </p>
                                            <button
                                                id="button"
                                                className="btn btn-primary"
                                                onClick={() => {
                                                    toggle(true);
                                                    setSelectedFeature(feature);
                                                }}
                                            >
                                                More Info
                                            </button>
                                        </Popup>
                                        <Polygon
                                            positions={
                                                feature.geometry.coordinates
                                            }
                                            fillColor={feature.properties.color}
                                            color={feature.properties.color}
                                            weight={1}
                                            opacity={1}
                                            fillOpacity={0.8}
                                        ></Polygon>
                                    </FeatureGroup>
                                );
                            })}
                        </>
                    )}
                </Map>
            </main>
        </div>
    );
}
