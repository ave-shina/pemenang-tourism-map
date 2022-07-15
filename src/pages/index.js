import Head from "next/head";

import Map from "../components/Map";

import styles from "../../styles/Home.module.css";

import Pemenanggeojson from "./pemenang";

const DEFAULT_CENTER = [-8.4056618, 116.0674516];

export default function Home() {
  const fillBlueOptions = { fillColor: "red" };
  console.log(Pemenanggeojson.features[0].geometry.coordinates);

  const polygon = [[-8.407884008672028, 116.104361675142286, 0.0]];
  return (
    <div className={styles.container}>
      <Head>
        <title>Peta Wisata Kecamatan Pemenang</title>
      </Head>

      <main className={styles.main}>
        <Map className={styles.homeMap} center={DEFAULT_CENTER} zoom={12}>
          {({ TileLayer, Marker, Popup, Polyline, Polygon }) => (
            <>
              <TileLayer
                url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
              />
              {/* <Marker position={DEFAULT_CENTER}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker> */}

              <Polygon pathOptions={fillBlueOptions} positions={polygon} />

              {/* {Pemenanggeojson.features.map((item, index) => (
                <Polyline
                  key={index}
                  pathOptions={fillBlueOptions}
                  positions={item.geometry.coordinates}
                />
              ))} */}
            </>
          )}
        </Map>
      </main>
    </div>
  );
}
