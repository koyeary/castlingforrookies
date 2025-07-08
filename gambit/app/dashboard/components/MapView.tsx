import React, { useEffect, useState } from "react";
import { formatMapData } from "@/app/lib/forex/utils";
import { Chart } from "react-google-charts";
import { useLoadScript } from "@react-google-maps/api";

const MapView: React.FC = () => {
  const [mapData, setMapData] = useState<[string, string | number][]>([]);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCdlnV0WH0QQ5kcklHnFPBjc2iUcX6580g",
    // Add any other libraries needed, e.g., libraries: ['places']
  });

  const formatData = async () => {
    const data = await formatMapData();
    return setMapData(data);
  };
  useEffect(() => {
    formatData();
  }, []);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div style={{ width: "90vw", height: "auto" }}>
      {!isLoaded ? (
        <div>loading ...</div>
      ) : (
        <Chart
          chartEvents={[
            {
              eventName: "select",
              callback: ({ chartWrapper }) => {
                const chart = chartWrapper.getChart();
                const selection = chart.getSelection();
                if (selection.length === 0) return;
                const region = mapData[selection[0].row + 1];
                console.log("Selected : " + region);
              },
            },
          ]}
          chartType="GeoChart"
          width="100%"
          height="100%"
          data={mapData}
        />
      )}
    </div>
  );
};

export default MapView;
