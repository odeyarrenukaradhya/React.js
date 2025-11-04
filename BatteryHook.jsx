import React from "react";
import { useBattery } from "@uidotdev/usehooks";

function Battery({ level, charging, chargingTime, dischargingTime }) {
  return (
    <div className="battery-status">
      <p> Battery Level: {level.toFixed(0)}%</p>
      <p>
         Status:{" "}
        {charging ? "Charging" : "Discharging"}
      </p>
      {charging && chargingTime ? (
        <p>Time until full: {Math.round(chargingTime / 60)} minutes</p>
      ) : (
        dischargingTime && (
          <p> Time until empty: {Math.round(dischargingTime / 60)} minutes</p>
        )
      )}
    </div>
  );
}

function BatteryHook() {
  const { loading, level, charging, chargingTime, dischargingTime } = useBattery();

  return (
    <div className="wrapper">
      <h1>useBattery Hook</h1>
      {!loading ? (
        <Battery
          level={level * 100}
          charging={charging}
          chargingTime={chargingTime}
          dischargingTime={dischargingTime}
        />
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default BatteryHook;
