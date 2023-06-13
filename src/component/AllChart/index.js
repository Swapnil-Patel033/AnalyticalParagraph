import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { seriesArray } from "../../utils/BackEndData/PyramidColor";
import '../../assets/css/_pyramid.css'

function ChartsDemo(chart, data,includeLabelAdapterTrue) {

  am4core.useTheme(am4themes_animated);
  chart.data = data
  let series = chart.series.push(new am4charts.PyramidSeries());
  series.dataFields.value = "value";



  //## Pyramid Design start 
  chart.logo.disabled = true; // Disable logo

  series.slices.template.tooltip = new am4core.Tooltip();//Show Text On Hover on Pyramid
  series.slices.template.tooltipText = "{count}"; //Show Text On Hover on Pyramid
  series.slices.template.tooltip.label.wrap = true


  let colorArray = seriesArray.map(({ color }) => am4core.color(color)); //Using seriesArray Cahnge Color pyramidColor
  series.colors.list = colorArray;//Set Color On pyramidColor
  series.slices.template.stroke = am4core.color("#ffff"); //Boder Color 
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

console.log(includeLabelAdapterTrue)
   // Add label adapter if includeLabelAdapter is true
   if (includeLabelAdapterTrue) {
    series.labels.template.adapter.add("html", function (html, target) {
      let slice = target;
      if (slice.dataItem && slice.dataItem.dataContext.name === "Have Means to Pay") {
        return (
          "<div class='main_chart_text'>" +
          "<div class='tooltip'>?<span class='tooltiptext'>Have Means to Pay includes self-pay patients, patients with approved insurance, and patients who were neither self-pay nor had approved insurance but still scheduled and kept their appointment</span></div>" +
          `<p>${series.labels.template.text}</p>` +
          "</div>"
        );
      }
      return html;
    });
  }





  // ## responsive ToolTip Start
  if (window.innerWidth < 1570 && window.innerWidth > 1401) {
    series.slices.template.tooltip.label.maxWidth = 250;
  } else if (window.innerWidth < 577) {
    series.slices.template.tooltip.label.maxWidth = 150;
  } else if (window.innerWidth < 769) {
    series.slices.template.tooltip.label.maxWidth = 200;
  } else if (window.innerWidth < 1300) {
    series.slices.template.tooltip.label.maxWidth = 225;
  } else {
    series.slices.template.tooltip.label.maxWidth = 300;
  }
  // ## responsive ToolTip End

}

export default ChartsDemo