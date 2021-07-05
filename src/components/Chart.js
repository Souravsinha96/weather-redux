import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesSpots,
  SparklinesReferenceLine,
} from "react-sparklines";

function Chart(props) {
  const average = (data) => {
    const avg =
      data.reduce((avg, item) => {
        return avg + item;
      }, 0) / data.length;

    return Math.round(avg);
  };

  return (
    <div>
      <Sparklines data={props.data} svgHeight={120} svgWidth={300}>
        <SparklinesLine style={{ fill: "none" }} />
        <SparklinesReferenceLine type="avg" />
        <SparklinesSpots />
      </Sparklines>
      <div>
        {average(props.data)} {props.units}
      </div>
    </div>
  );
}

export default Chart;
