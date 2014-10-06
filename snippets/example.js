var InCHlib = require("biojs-vis-inchlib");
var inchlib = new InCHlib({"target": "inchlib",
							"width": 800,
							"draw_row_ids": true,
							"metadata_colors": "RdLrBu",
							 text: 'biojs'});
inchlib.read_data_from_file("./data/data.json");
inchlib.draw();

inchlib.onAll(function(name){
	console.log(name + " event triggered");
});


// inchlib.on("on_zoom", function(object_ids, node_id){
// 	console.log(object_ids, node_id);
// });

// inchlib.on("on_unzoom", function(node_id){
// 	console.log(node_id);
// });

// inchlib.on("empty_space_onclick", function(evt){
// 	console.log(evt);
// });

// inchlib.on("heatmap_onmouseout", function(evt){
// 	console.log(evt);
// });

// inchlib.on("row_onclick", function(object_ids, evt){
// 	console.log(object_ids, evt);
// });

// inchlib.on("on_refresh", function(){
// 	console.log("refresh");
// });

// inchlib.on("dendrogram_node_highlight", function(object_ids, node_id){
// 	console.log(object_ids, node_id);
// });

// inchlib.on("column_dendrogram_node_highlight", function(column_ids, node_id){
// 	console.log(column_ids, node_id);
// });

// inchlib.on("column_dendrogram_node_unhighlight", function(node_id){
// 	console.log(node_id);
// });

// inchlib.on("dendrogram_node_unhighlight", function(node_id){
// 	console.log(node_id);
// });

// inchlib.on("on_columns_zoom", function(column_ids, node_id){
// 	console.log(column_ids, node_id);
// });

// inchlib.on("on_columns_unzoom", function(node_id){
// 	console.log(node_id);
// });

// inchlib.on("dendrogram_node_onclick", function(object_ids, node_id, evt){
// 	console.log(object_ids, node_id, evt);
// });

// inchlib.on("column_dendrogram_node_onclick", function(column_ids, node_id, evt){
// 	console.log(column_ids, node_id, evt);
// });

// inchlib.on("row_onmouseover", function(object_ids, evt){
// 	console.log(object_ids, evt);
// });

// inchlib.on("row_onmouseout", function(evt){
// 	console.log(evt);
// });
