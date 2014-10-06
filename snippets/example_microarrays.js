var InCHlib = require("biojs-vis-inchlib");
var inchlib = new InCHlib({"target": "inchlib",
							"width": 800,
							"height": 1200,
							"column_metadata_colors": "RdLrBu",
							"heatmap_colors": "RdBkGr",
							"max_percentile": 90,
							"middle_percentile": 60,
							"min_percentile": 10,
							"heatmap_font_color": "white",
							 text: 'biojs'});
inchlib.read_data_from_file("./data/microarrays.json");
inchlib.draw();

inchlib.onAll(function(name){
	console.log(name + " event triggered");
});