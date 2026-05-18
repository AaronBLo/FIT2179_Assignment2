var alcohol_drinking_status = "charts/alcohol_drinking_status.json";

vegaEmbed("#alcohol_status_line_chart", alcohol_drinking_status, {
  actions: false
}).then(function(result) {
}).catch(console.error);


var beverage_2022_stacked_bar = "charts/beverage_2022_stacked_bar.json";

vegaEmbed("#beverage_2022_stacked_bar", beverage_2022_stacked_bar, {
  actions: false
}).then(function(result) {
}).catch(console.error);


var per_capita_line_chart = "charts/per_capita_line_chart.json";

vegaEmbed("#per_capita_line_chart", per_capita_line_chart, {
  actions: false
}).then(function(result) {
}).catch(console.error);