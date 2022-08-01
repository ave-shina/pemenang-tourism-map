import Head from "next/head";

import Map from "../components/Map";

import styles from "../../styles/Home.module.css";

import Pemenanggeojson from "./pemenang";

const DEFAULT_CENTER = [-8.4056618, 116.0674516];

export default function Home() {
    // const style = (feature) => {
    //   switch (feature.properties.Desa_Name) {
    //     case "MENGGALA":
    //       return { color: "#ff9900" };
    //     case "MALAKA":
    //       return { color: "red" };
    //     case "PEMENANG BARAT":
    //       return { color: "blue" };
    //     case "PEMENANG TIMUR":
    //       return { color: "green" };
    //     case "GILI INDAH":
    //       return { color: "magenta" };
    //   }

    return (
        <div className={styles.container}>
            <Head>
                <title>Peta Wisata Kecamatan Pemenang</title>
            </Head>

            <main className={styles.main}>
                <Map
                    className={styles.homeMap}
                    center={DEFAULT_CENTER}
                    zoom={12}
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
