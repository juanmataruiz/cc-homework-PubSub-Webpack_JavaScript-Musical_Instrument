const InstrumentFamilies = require('./models/instrument_families.js');
const SelectInstrumentFamily = require('./views/select_instrument_family.js');
const InstrumentFamilyInfo = require('./views/instrument_family_info.js');

document.addEventListener('DOMContentLoaded', function(){
  const selectElement = document.querySelector('#instrument-families');
  const instrumentDropdown = new SelectInstrumentFamily(selectElement);
  instrumentDropdown.bindEvents();

  const descriptionInstrument = document.querySelector('#instrument-info')
  const instrumentInfoDisplay = new InstrumentFamilyInfo(descriptionInstrument);
  instrumentInfoDisplay.bindEvents();

  const instrumentDataSource = new InstrumentFamilies;
  instrumentDataSource.bindEvents();
});
