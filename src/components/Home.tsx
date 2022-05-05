import * as React from "react";
import DeviceChart from "./DeviceChart";
import Layout from "./Layout";
import { name } from "../utils/generators";
import RadialChart from "./RadialGradientChart";
import AreaChart from "./AreaChart";

export default function Home() {
  return (
    <Layout>
      <h2>{name("Destinee", "Muse")}</h2>
      <DeviceChart
        options={{
          colors: ["#008080", "#612b4f", "#ffb4cc"],
          labels: ["Desktop", "Mobile", "Tablet"],
        }}
      />

      <DeviceChart
        options={{
          colors: ["#ff6379", "#990033", "#752a20"],
          labels: ["Smartphones", "Laptops", "iPads"],
        }}
      />
      <AreaChart />
      <RadialChart />
    </Layout>
  );
}