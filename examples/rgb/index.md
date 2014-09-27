RGB Lamp with Tah
====

[Image of Mood Lamp]

Tah is a Bluetooth Low Energy open source development platform compatible with the Arduino.

One of the very popular projects we have done with the Tah is a RGB lamp that can be controlled by just a few taps on your smartphone. The Tah RGB app lets you control ambient lighting on the go.

## Requirements

* Tah
* [NeoPixel](http://www.adafruit.com/products/1138), an Addressable RGB LED strip from Adafruit
* Power supply: 5VDC @ 2A 
* 3D printed "Simple Lamp Design" from [Thingiverse](http://www.thingiverse.com/thing:169535)
* A computer with the Arduino IDE installed
* iPhone 4S and above with the [Tah RGB app](https://github.com/Tah-io/iOS/tree/master/Tah%20RGB) installed
* Female barrel jack.
* Jumper wires

[Image of all Materials]

Now follow these steps to create your own home-made RGB Lamp:

## Step 1

Tah is Arduino-compatible and is programmed using the Arduino IDE, so download and install the IDE from [here](http://arduino.cc/en/Main/Software#toc2).

Get familiar with [NeoPixel](http://www.adafruit.com/products/1138) from Adafruit.

## Step 2

Tape the NeoPixel inside the RGB lamp casing with foam tape.

[Image of Neopixel and Lamp Casing]

## Step 3 

Download and install the [NeoPixel library for the Arduino](https://github.com/adafruit/Adafruit_NeoPixel) and the [Tah Arduino library](https://github.com/tah-io/sketches/tree/master/TAH%20Arduino%20Library) in the Arduino IDE.

## Step 4

Connect NeoPixel to the Tah and build the circuit as shown in the circuit diagram below.

[Images of interfacing circuit Neopixel with Tah]

## Step 5

Upload Tah RGB sketch from Tah examples.

Next, solder all the connections given in the circuit diagram on the general purpose PCB and make it a stackable shield for Tah as shown in the image below. Power up with 5VDC @ 2A.

[Images of Tah and Neopixel with Adapter]

## Step 6

Follow these steps to start communicating with Tah from your phone:

* Launch the Tah RGB app on your phone
* Scan for Bluetooth devices and connect to "RGB Lamp" under the devices found
* Change the Lamp's lighting using the controls in the app!