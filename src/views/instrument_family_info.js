const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilyInfo = function (container) {
  this.container = container;
};

InstrumentFamilyInfo.prototype.bindEvents = function () {
  PubSub.subscribe('SelectInstrumentFamily:all-description', (event) => {
    const instrument = event.detail;
    this.render(instrument);
  });
};

InstrumentFamilyInfo.prototype.render = function (instrument) {
  const info = document.createElement('p');
  info.textContent = `${instrument.name}, ${instrument.description} These are some of the instruments within this family: ${instrument.instruments}.`;
  this.container.innerHTML = '';
  this.container.appendChild(info);
};

module.exports = InstrumentFamilyInfo;
