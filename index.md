Welcome to the documentation for Tah. This page will consist of all the resources that you will need when using the Tah and more.



## iOS

We have 2 apps on the iOS App Store as of 17th September, 2014.

* [Tah](https://itunes.apple.com/us/app/tah/id909883039?mt=8)
* [Tah Sensor](https://itunes.apple.com/us/app/tah-sensor/id911694655?mt=8)

The above list will be updated as more apps are launched.  

You can find the source code for all of the above plus some other demo apps that we used at Maker Faires on our [GitHub repo](https://github.com/tah-io/iOS). Pull and feature requests are most [welcome](https://github.com/tah-io/iOS/issues).  
__\** Please note that software here is currently in beta and we expect there to be plenty of changes. \**__

## Sketches

Each app has Tah sketches that go with it.    
To upload a sketch to Tah, follow the steps given below :

#### Install Arduino
You can upload sketches to the Tah using the Arduino IDE. It is open source and can be used with [Mac](http://arduino.cc/en/Guide/MacOSX), [Linux](http://playground.arduino.cc/Learning/Linux) and [Windows](http://arduino.cc/en/Guide/Windows). If you follow the instructions on the above links, you will have a green LED blinking on your Tah within minutes.  
For any troubleshooting, you can use our [forum](http://discuss.tah.io).

#### Download sketches from GitHub
1. You can download the latest source code for our Tah sketches from GitHub [here](https://github.com/tah-io/sketches/archive/master.zip). 
2. Rename the downloaded archive from *sketches-master* to *Tah*.

#### Install Tah Library
1. Do not unzip the downloaded library, leave it as is.
In the Arduino IDE, navigate to Sketch > Import Library. At the top of the drop down list, select the option to "Add Library".  
2. You will be prompted to select the library you would like to add. Navigate to the .zip file's location and open it.  
3. Return to the Sketch > Import Library menu. You should now see the library at the bottom of the drop-down menu. It is ready to be used in your sketch. 

For a more complete guide on installing a library, check out Arduino's [guide](http://arduino.cc/en/Guide/Libraries).
#### Upload the default sketch
1. Connect your Tah board to your USB port.
2. Select *File->Examples->Tah->ArdSCL*
3. Compile and Upload the sketch
 
#### Check out the start page
Follow the guidelines given on the [Getting Started](http://tah.io/start) page for Tah to blink a LED using your smartphone.

You can check out the [examples](http://tah.io/docs/examples) page to know more about each sketch in detail.