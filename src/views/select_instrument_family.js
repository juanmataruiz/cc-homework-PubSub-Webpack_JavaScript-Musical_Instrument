const PubSub = require('../helpers/pub_sub.js');

const SelectInstrumentFamily = function (element) {
  this.element = element;
}

SelectInstrumentFamily.prototype.bindEvents = function () {
  PubSub.subscribe('SelectInstrumentFamily:all-description', (event) => {
    const allDescriptions = event.detail;
    this.populate(allDescriptions);
  });

  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectInstrumentFamily:change', selectedIndex);
  });
};

SelectInstrumentFamily.prototype.populate = function (instrumentData) {

  instrumentData.forEach((instrument, index) => {
    const option = document.createElement('option');
    option.textContent = instrument.name;
    option.value = index;
    this.element.appendChild(option);
  })
}

module.exports = SelectInstrumentFamily;
