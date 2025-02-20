// UI elements.
const deviceNameLabel = document.getElementById('device-name');
const connectButton = document.getElementById('connect');
const disconnectButton = document.getElementById('disconnect');
const terminalContainer = document.getElementById('terminal');
const sendForm = document.getElementById('send-form');
const inputField = document.getElementById('input');
const lockStatus = document.getElementById('lock-status');
const unlockButton = document.getElementById('unlock');
const batteryButton = document.getElementById('battery');

// Helpers.
const defaultDeviceName = 'Terminal';
const terminalAutoScrollingLimit = terminalContainer.offsetHeight / 2;
let isTerminalAutoScrolling = true;

const scrollElement = (element) => {
  const scrollTop = element.scrollHeight - element.offsetHeight;

  if (scrollTop > 0) {
    element.scrollTop = scrollTop;
  }
};

const logToTerminal = (message, type = '') => {
  terminalContainer.insertAdjacentHTML('beforeend',
      `<div${type && ` class="${type} hide"`}>${message}</div>`);

  if (isTerminalAutoScrolling) {
    scrollElement(terminalContainer);
  }
};

// Obtain configured instance.
const terminal = new BluetoothTerminal();

// Override `receive` method to log incoming data to the terminal.
terminal.receive = function(data) {
  // logToTerminal(data, 'in');
  // document.getElementById('batteryPercent').textContent = data;

  if (data.endsWith("%")) {
    document.getElementById('batteryPercent').textContent = 'Checking Battery'
    setTimeout ( 
      document.getElementById('batteryPercent').textContent = data, 1000
    );
  }

};

// Override default log method to output messages to the terminal and console.
terminal._log = function(...messages) {
  // We can't use `super._log()` here.
  messages.forEach((message) => {
    logToTerminal(message);
    console.log(message); // eslint-disable-line no-console
  });
};

// Implement own send function to log outcoming data to the terminal.
const send = (data) => {
  terminal.send(data).
      // then(() => logToTerminal(data, 'out')).
      catch((error) => logToTerminal(error));
};

// Bind event listeners to the UI elements.
connectButton.addEventListener('click', () => {
  terminal.connect().
      then(() => {
        deviceNameLabel.textContent = terminal.getDeviceName() ?
            terminal.getDeviceName() : defaultDeviceName;
      });
});

disconnectButton.addEventListener('click', () => {
  terminal.disconnect();
  deviceNameLabel.textContent = defaultDeviceName;
});

unlockButton.addEventListener('click', () => {

  send('u');
});

batteryButton.addEventListener('click', () => {
  send('b');
});

// sendForm.addEventListener('submit', (event) => {
//   event.preventDefault();

//   send('u');
//   // setTimeout(() => send('u'), 700);
//   // setTimeout(() => send('u'), 700);
//   // setTimeout(() => send('u'), 700);
//   // setTimeout(() => send('u'), 500);

//   inputField.value = '';
//   inputField.focus();
// });

// Switch terminal auto scrolling if it scrolls out of bottom.
terminalContainer.addEventListener('scroll', () => {
  const scrollTopOffset = terminalContainer.scrollHeight -
      terminalContainer.offsetHeight - terminalAutoScrollingLimit;

  isTerminalAutoScrolling = (scrollTopOffset < terminalContainer.scrollTop);
});



// // Mapbox 
// mapboxgl.accessToken = pk.eyJ1IjoibnVnbWM3IiwiYSI6ImNrdXFwMmE0bTR4bDgydW84MTczMzJ4bnQifQ.ELNGQu9bmwasNHuVUZT96w;

// let map = new mapboxgl.Map({
//   container: 'map', // container id
//   style: 'mapbox://styles/mapbox/light-v10', // stylesheet location
//   center: [35.236220, 149.083006], // starting position [lng, lat]
//   zoom: 9 // starting zoom
//  });