import React, { useEffect, useState } from "react";
import { formatMapData } from "@/app/lib/forex/utils";
import { ResponsiveChoropleth } from "@nivo/geo";

const MapView: React.FC = () => {
  const [series, setSeries] = useState<{ id: string; value: number }[]>([]);

  useEffect(() => {
    const data = formatMapData(); // only runs on client
    setSeries(data);
  }, []);

  return (
    <div style={{ width: "80vw", height: "50vh" }}>
      <h1>MapView Component</h1>
      <ResponsiveChoropleth
        data={series}
        features={[]} // make sure this isn't dynamic or undefined
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: 20,
            translateY: -100,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemTextColor: "#444444",
            itemOpacity: 0.85,
            symbolSize: 18,
          },
        ]}
      />
    </div>
  );
};

export default MapView;
