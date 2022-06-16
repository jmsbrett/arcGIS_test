import Map from "@arcgis/core/Map";
import GraphicLayer from "@arcgis/core/layers/GraphicsLayer";
import MapView from "@arcgis/core/views/SceneView";
import { useEffect } from "react";

function Globe() {

    useEffect(() => {
        const map = new Map({
            basemap: 'satellite'
        });

        const view = new MapView({
            container: "globeDiv",
            map: map,
            zoom: 1,
            center: [15, 65]
        });


    }, []);

    const style = {
        margin: 0,
        padding: 0,
        height: '100vh',
        width: '100vw'
    }

    return (
        <div style={style} id="globeDiv"></div>
    );
}

export default Globe;