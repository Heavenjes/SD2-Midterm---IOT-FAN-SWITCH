
var client;
var topicArray = []

$('#button-off').on('click', function () {
	// connect
	var connect = "connect button clicked.."
	console.log(connect)
	client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")
	client.on("connect", function () {
		var topic = "jess/fan/status"
		var message = "turned off"
		client.publish(topic, message);
		// console.log("Successfully connected");
		// console.log("address: " + "wss://test.mosquitto.org:8081/mqtt");
	})
	
})

$("#btn-connect1").click(function () {
	var topic = "jess/fan/status"
	var message = "turned at 1"
	client.publish(topic, message);
	// console.log("Disconnected!")
})
$("#btn-connect2").click(function () {
	var topic = "jess/fan/status"
	var message = "turned at 2"
	client.publish(topic, message);
	// console.log("Disconnected!")
})
$("#btn-connect3").click(function () {
	var topic = "jess/fan/status"
	var message = "turned at 3"
	client.publish(topic, message);
	// console.log("Disconnected!")
})















