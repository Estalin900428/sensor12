//https://www.eclipse.org/paho/clients/js/

function estadoSensores_on(){
  console.log("sensor1")
  message = new Paho.MQTT.Message("encendido");
  message.destinationName = "gestalin@hotmail.com/test_sensor";
  client.send(message);
}

function estadoSensores_off(){
  console.log("sensor2")
  message = new Paho.MQTT.Message("apagado");
  message.destinationName = "gestalin@hotmail.com/testsensor";
  client.send(message);
}




// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.
  random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
    useSSL: false,
    userName: "gestalin@hotmail.com",
    password: "ESTALIN0428",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Estoy Conectado...");
	
    client.subscribe("gestalin@hotmail.com/sensor");
    message = new Paho.MQTT.Message("estado");
    message.destinationName = "gestalin@hotmail.com/sensor";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
    //document.getElementById("sensor").innerHTML=message.payloadString;
    //.split("=")
    // mensajes a los leds
    
    estado =message.payloadString;
    
    if(estado.split(" ")[0]==""){
      document.getElementById("sensor1").innerHTML=estado
    }
  }
