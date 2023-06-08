import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { seriesArray } from "../../utils/BackEndData/PyramidColor";

function ChartsDemo(chart, data) {

  am4core.useTheme(am4themes_animated);
  chart.data = data
  let series = chart.series.push(new am4charts.PyramidSeries());
  series.dataFields.value = "value";

  //## Pyramid Design start 
  chart.logo.disabled = true; // Disable logo

  series.slices.template.tooltip = new am4core.Tooltip();//Show Text On Hover on Pyramid
  series.slices.template.tooltipText = "{count}"; //Show Text On Hover on Pyramid

  let colorArray = seriesArray.map(({ color }) => am4core.color(color)); //Using seriesArray Cahnge Color pyramidColor
  series.colors.list = colorArray;//Set Color On pyramidColor
  series.slices.template.stroke = am4core.color("#ffff"); //Boder Color 
  // series.slices.template.strokeOpacity = 5;
  series.slices.template.strokeWidth = 1; //Boder Width
  
  // ## Pyramid Design End

  //## Pyramid Structure Start
  series.topWidth = am4core.percent(100); // Set the top width of the pyramid
  series.bottomWidth = am4core.percent(0); // Set the bottom width of the pyramid
  //## Pyramid Structure End

  //## Right Side Part Start
  series.alignLabels = true; //This Show Right Side 
  series.labels.template.fill = am4core.color("#FFFFFF"); // Set right side text color
  series.ticks.template.stroke = am4core.color("#FFFFFF"); // Change right side line colors
  series.labels.template.text = "{name}: {percentage}"; //Show Text Right Side 
  //## Right Side Part End
}

export default ChartsDemo