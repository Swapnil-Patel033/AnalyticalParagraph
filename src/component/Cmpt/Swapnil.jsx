import React, { useRef, useLayoutEffect } from 'react'
import ChartsDemo from '../AllChart';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import { SchedulePyramidData } from '../../utils/BackEndData/schedulePyramid'


function Swapnil() {
  const SwapnilRef = useRef(null)
  useLayoutEffect(() => {
    let chart = am4core.create(SwapnilRef.current, am4charts.SlicedChart);
    ChartsDemo(chart, SchedulePyramidData, true);

    return () => {
      chart.dispose(); // Dispose of the chart instance when the component unmounts
    };
  }, []);

  return (
    <div >
      <h2 >Swapnil</h2>
      <div className='heading-Boder'></div>
      <div ref={SwapnilRef} style={{ height: '424px', width: 'auto' }} ></div>
    </div>
  )
}

export default Swapnil