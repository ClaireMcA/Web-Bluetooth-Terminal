## FABL Webapp
## fabl.clairelouisebutler.com

This Web app leans heavily on many of the functions from [Loginov's Bluetooth Terminal](https://github.com/loginov-rocks/bluetooth-terminal). The interface is a slight nod to the original [Figma design](https://www.figma.com/file/DCQ4tMKdwExQY0cN7hpfL6/FABL-UI?node-id=8%3A724) for the application. The App is able to connect to the FABL via bluetooth, unlock it and check it's battery charge. 


## FABL Prototype

The Prototype for the FABL was developed in stages, first I got the [fingerprint module working](https://vimeo.com/746508530) with the soilinoid lock. Then I got the bluetooth module to unlock the solinoid lock via commands from my computer. Once I knew everything was working seperately I combined it all to allow the lock to be opened by fingerprint or bluetooth. During the period of moving from a breadboard prototype to a more condensed soldered circuit, my fingerprint module stopped responding. I removed it from the ciruit and tried a number of different troubleshooting methods, but in the end there was no way to recover it and no time to order a new module. This left my final prototype without a functioning fingerprint sensor, but it does have a functional app and lock mechanism.



## My Links

[FABL Webapp Live](fabl.clairelouisebutler.com)
[Figma Design](https://www.figma.com/file/DCQ4tMKdwExQY0cN7hpfL6/FABL-UI?node-id=8%3A724)
[Video of Working Fingerprint Module](https://vimeo.com/746508530)



## References

1. [Loginov's Bluetooth Terminal](https://github.com/loginov-rocks/bluetooth-terminal)
2. [Web Bluetooth Specification](https://webbluetoothcg.github.io/web-bluetooth/)
3. [Web Bluetooth Samples](https://googlechrome.github.io/samples/web-bluetooth/)
4. [Interact with Bluetooth devices on the Web](https://developers.google.com/web/updates/2015/07/interact-with-ble-devices-on-the-web/)
5. [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/)
6. [Service Worker Toolbox](https://github.com/GoogleChromeLabs/sw-toolbox/)

