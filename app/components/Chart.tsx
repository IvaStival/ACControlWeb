"use client";

import Box from "./Box";
import Panel from "./Panel/Panel";
import LinePlot from "./LinePlot/LinePlot";

import axios from "axios";
import { useEffect, useState } from "react";
import { sendStatusCode } from "next/dist/server/api-utils";

const Chart = () => {
  const [sensorData, setSensorData] = useState([]);
  const baseUrl = "http://192.168.18.200:8000/api/v1/sensors/last_n/500";
  // const data = [26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27];

  useEffect(() => {
    const intervalId = setInterval(async () => {
      await axios.get(baseUrl).then((response) => {
        setSensorData(response.data.data);
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  let data: Array<number> = [];
  let data2: Array<number> = [];
  if (sensorData) {
    data = sensorData.map((d) => d["t1"]);
    data2 = sensorData.map((d) => d["t2"]);
  }

  return (
    <div className="chart">
      <Panel className="">
        <Box>
          <LinePlot data={data} data2={data2} />
        </Box>
      </Panel>
    </div>
  );
};

export default Chart;
