function loopAndApplyRemoveNO() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  // Customize this array with the names of the tabs you want to process
  var tabsToProcess = ["CIBUBUR", "CIBITUNG", "KRAMAT", "KEMBANGAN", "KARAWACI", "SatelliteKarawaci", "PEJATEN", "BINTARO", "PDKOPI", "SENTUL", "DEPOK","SatelliteBogor"];

  tabsToProcess.forEach(function(tabName) {
    var sheet = spreadsheet.getSheetByName(tabName);

    // Apply the remove_NO function to the specified range
    remove_NO(sheet, "E3:M"); // Pass the sheet and range as arguments
  });
}

// The original remove_NO function, adjusted to accept sheet and range as arguments
function remove_NO(sheet, rangeloc) {
  var color1 = '#ff0000';
  var color2 = '#4285f4';
  var range = sheet.getRange(rangeloc);
  var data = range.getValues();
  var backgrounds = range.getBackgrounds();

  // Check backgrounds and change data
  for (let row in data) for (let col in data[0]) {
    if (backgrounds[row][col] != color1 && backgrounds[row][col] != color2) data[row][col] = '';
  }

  range.setValues(data);
}


function loopAndApplyReplaceB2B() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  // Customize this array with the names of the tabs you want to process
  var tabsToProcess = ["CIBUBUR", "CIBITUNG", "KRAMAT", "KEMBANGAN", "KARAWACI", "SatelliteKarawaci", "PEJATEN", "BINTARO", "PDKOPI", "SENTUL", "DEPOK", "SatelliteBogor"];

  tabsToProcess.forEach(function(tabName) {
    var sheet = spreadsheet.getSheetByName(tabName);

    // Apply the remove_NO function to the specified range
    remove_B2B(sheet, "E3:M"); // Pass the sheet and range as arguments
  });
}

// The original remove_NO function, adjusted to accept sheet and range as arguments
function remove_B2B(sheet, rangeloc) {
  var color1 = '#ff0000';
  var color2 = '#4285f4';
  var range = sheet.getRange(rangeloc);
  var data = range.getValues();                   // get all data
  var backgrounds = range.getBackgrounds();   // get all backgrounds

  // check the backgrounds and change the data
  for (let row in data) for (let col in data[0]) {
    if (backgrounds[row][col] == color1 || backgrounds[row][col] == color2)  data[row][col] = 'NO';
  }
  
  range.setValues(data);  // set the data back on the sheet
}


function run_all() {
  loopAndApplyRemoveNO();
  loopAndApplyReplaceB2B();
}