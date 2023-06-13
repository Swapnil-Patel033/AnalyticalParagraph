import React, { useLayoutEffect } from 'react'
import ChartsDemo from '../AllChart/index';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import { insurancePyramidData } from '../../utils/BackEndData/InsurancePyramid';
import { useRef } from 'react';

function Jay() {

  const JayRef = useRef(null)
  useLayoutEffect(() => {
    let chart = am4core.create(JayRef.current, am4charts.SlicedChart);
    ChartsDemo(chart, insurancePyramidData,false)

    return () => {
      chart.dispose(); // Dispose of the chart instance when the component unmounts
    };
  }, []);
  return (
    <div >
      <h2 >Jay</h2>
      <div className='heading-Boder'></div>
      <div ref={JayRef} style={{ height: '424px', width: 'auto' }} ></div>
    </div>
  )
}

export default Jay