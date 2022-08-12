import { useState } from "react";
import Head from "next/head";

import Map from "../components/Map";

import styles from "../../styles/Home.module.css";

import Pemenanggeojson from "../components/Map/data/pemenangMap";

const DEFAULT_CENTER = [-8.4056618, 116.0674516];

export default function Home() {
    const [pantai, setPantai] = useState(true);
    const [diving, setDiving] = useState(true);
    const [hill, setHill] = useState(true);
    const [wisataLain, setWisataLain] = useState(true);
    const [fasilitasUmum, setFasilitasUmum] = useState(true);
    const [pelabuhan, setPelabuhan] = useState(true);
    const [penginapan, setPenginapan] = useState(true);
    const [ibadah, setIbadah] = useState(true);

    const handleToggleButton = (type) => {
        switch (type) {
            case "pantai":
                setPantai(!pantai);
                return;
            case "diving":
                setDiving(!diving);
                return;
            case "hill":
                setHill(!hill);
                return;
            case "wisataLain":
                setWisataLain(!wisataLain);
                return;
            case "fasilitasUmum":
                setFasilitasUmum(!fasilitasUmum);
                return;
            case "pelabuhan":
                setPelabuhan(!pelabuhan);
                return;
            case "penginapan":
                setPenginapan(!penginapan);
                return;
            case "ibadah":
                setIbadah(!ibadah);
                return;
            default:
                return;
        }
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
                        onClick={() => handleToggleButton("pantai")}
                    >
                        <input
                            type="checkbox"
                            id="togglePantai"
                            name="togglePantai"
                            value="togglePantai"
                            checked={pantai}
                            onChange={() => handleToggleButton("pantai")}
                        ></input>
                        <label for="togglePantai"> Beach</label>
                    </div>
                    <div
                        className={styles.switchButton}
                        onClick={() => handleToggleButton("diving")}
                    >
                        <input
                            type="checkbox"
                            id="toggleDiving"
                            name="toggleDiving"
                            value="toggleDiving"
                            checked={diving}
                            onChange={() => handleToggleButton("diving")}
                        ></input>
                        <label for="toggleDiving"> Diving</label>
                    </div>
                    <div
                        className={styles.switchButton}
                        onClick={() => handleToggleButton("hill")}
                    >
                        <input
                            type="checkbox"
                            id="toggleHill"
                            name="toggleHill"
                            value="toggleHill"
                            checked={hill}
                            onChange={() => handleToggleButton("hill")}
                        ></input>
                        <label for="toggleHill"> Hill</label>
                    </div>
                    <div
                        className={styles.switchButton}
                        onClick={() => handleToggleButton("wisataLain")}
                    >
                        <input
                            type="checkbox"
                            id="toggleWisataLain"
                            name="toggleWisataLain"
                            value="toggleWisataLain"
                            checked={wisataLain}
                            onChange={() => handleToggleButton("wisataLain")}
                        ></input>
                        <label for="toggleWisataLain"> Other Tours</label>
                    </div>
                    <div
                        className={styles.switchButton}
                        onClick={() => handleToggleButton("fasilitasUmum")}
                    >
                        <input
                            type="checkbox"
                            id="toggleFasilitasUmum"
                            name="toggleFasilitasUmum"
                            value="toggleFasilitasUmum"
                            checked={fasilitasUmum}
                            onChange={() => handleToggleButton("fasilitasUmum")}
                        ></input>
                        <label for="toggleFasilitasUmum">
                            {" "}
                            Public Facilities
                        </label>
                    </div>
                    <div
                        className={styles.switchButton}
                        onClick={() => handleToggleButton("pelabuhan")}
                    >
                        <input
                            type="checkbox"
                            id="togglePelabuhan"
                            name="togglePelabuhan"
                            value="togglePelabuhan"
                            checked={pelabuhan}
                            onChange={() => handleToggleButton("pelabuhan")}
                        ></input>
                        <label for="togglePelabuhan"> Harbor</label>
                    </div>
                    <div
                        className={styles.switchButton}
                        onClick={() => handleToggleButton("penginapan")}
                    >
                        <input
                            type="checkbox"
                            id="togglePenginapan"
                            name="togglePenginapan"
                            value="togglePenginapan"
                            checked={penginapan}
                            onChange={() => handleToggleButton("penginapan")}
                        ></input>
                        <label for="togglePenginapan"> Lodging</label>
                    </div>
                    <div
                        className={styles.switchButton}
                        onClick={() => handleToggleButton("ibadah")}
                    >
                        <input
                            type="checkbox"
                            id="toggleIbadah"
                            name="toggleIbadah"
                            value="toggleIbadah"
                            checked={ibadah}
                            onChange={() => handleToggleButton("ibadah")}
                        ></input>
                        <label for="toggleIbadah"> Worship Place</label>
                    </div>
                </div>
                <Map
                    className={styles.homeMap}
                    center={DEFAULT_CENTER}
                    zoom={12}
                    toggle={[
                        pantai,
                        diving,
                        hill,
                        wisataLain,
                        fasilitasUmum,
                        pelabuhan,
                        penginapan,
                        ibadah,
                    ]}
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
