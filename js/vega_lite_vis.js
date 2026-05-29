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

var risky_drinking_heatmap = "charts/risky_drinking_age_gender_heatmap.json";

vegaEmbed("#risky_drinking_heatmap", risky_drinking_heatmap, {
  actions: false
}).then(function(result) {
}).catch(console.error);

var risky_drinking_state_map = "charts/risky_drinking_state_map.json";

vegaEmbed("#risky_drinking_state_map", risky_drinking_state_map, {
  actions: false
}).then(function(result) {
}).catch(console.error);