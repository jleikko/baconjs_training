
$(function() {
	
	$("#textInput").focus();
	
	//properties
	var mousePosition = $("html").asEventStream("mousemove").map(e=>[e.clientX,e.clientY]).toProperty("");
	var inputValue = Bacon.$.textFieldValue($("#textInput"));
	
	//side effects
	mousePosition.onValue(coords => $("#hello").css("top", coords[1]).css("left", coords[0]));
	inputValue.onValue(x=>$("#hello").html(x));
});