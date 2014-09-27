Electronic Die with Tah
===

[Image of die]

Tah is a Bluetooth Low Energy open source development platform compatible with the Arduino.

The Tah can be used for doing some interesting projects like the electronic die. Just roll the die and see its face value on your smartphone in realtime!

## Requirements

* Tah
* General PCB board
* ADXL335 3-axis accelerometer
* 7805 voltage regulator
* 3D-printed plastic casing for the die (find one [here](http://www.thingiverse.com/thing:17963))
* 9V HW battery
* Male pinheads
* Female pinheads
* Wire stripper
* Soldering gun and soldering metal
* A computer with the Arduino IDE installed
* iPhone 4S and above with the [Tah Cube app](https://github.com/tah-io/iOS/tree/master/TAH%20Cube) installed

[Images of all materials]

## Step 1

Tah is Arduino-compatible and is programmed using the Arduino IDE, so download and install the IDE from [here](http://arduino.cc/en/Main/Software#toc2).

Cut the PCB per your design and solder the male and female pinheads as shown in the image below. Use the analog pins of the Tah to interface the ADXL335 accelerometer. Here we are using the A2, A3 and A4 analog channels to read the positions of the X, Y and Z axis coordinates. Refer to the ADXL335 accelerometer's [datasheet](https://www.sparkfun.com/datasheets/Components/SMD/adxl335.pdf) for details.

[Circuit diagram]

## Step 2

Connect the LM7805 voltage regulator as per circuit diagram to step down and regulate the constant 5V DC with filter capacitors.

Install the [Tah Arduino library](https://github.com/tah-io/sketches/tree/master/TAH%20Arduino%20Library) in the Arduino IDE and compile the ["Tah Cube"](https://github.com/tah-io/sketches/tree/master/TAH_Cube) sketch from the examples.

[Soldered PCB Board]

## Step 3

* Open the Tah Cube app on your iPhone
* Scan for Bluetooth Devices in the app
* Connect with the device named CUBE

You can now roll the die to have the numbers show up in the app!

[Images of Die and phone with O/p]

Watch the video.
