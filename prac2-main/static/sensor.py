import paho.mqtt.client as mqqt
import Rpi.GPIO as GPIO
import time 
import datetime
import proteus

GPIO.setmode(GPIO.Board)
GPIO.setup.(7,GPIO.in)
GPIO.setup.(11,GPIO.out)


def registroEstados(estado_on):
    file=open("estado_sensor","a")
    y=datetime.datetime.now()
    fecha= str(y)
    file.write(estado_on+""+fecha+"\n")
    file.close()
    print(estado_on+""+fecha+"\n") 


def estadodelsensor():
    if GPIO.input(7):
        #mqttc.publish("gestalin@hotmail.com/sensor",str("puerta abierta"))
        GPIO.output(11,True):
        registroEstados('led on')
        time.sleep(0.1)
    else:
        #mqttc.publish("gestalin@hotmail.com/sensor",str("puerta cerrada"))
        GPIO.output(11,False)
        registroEstados('led OFF')
        time.sleep(0.1)
        
