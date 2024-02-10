function interestFreezeActive() {

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets();
  
  for(i in sheet){
    sheetName = ss.getSheets()[i].getSheetName().toUpperCase();

    if(!["SUMMARY", "TEMPLATE" ,"BACKTEST", "YIELD_AVG"].includes(sheetName)){

      var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
      var testActive = sheet.getRange("K14").getValues();
      
      if(testActive){
        var range = sheet.getRange("O2:O49");
        var rangeValues = sheet.getRange("H2:H49");
        var rangeGetValues = rangeValues.getValues();
        console.log("\n** SHEET NAME: " + sheetName + " **");
        var values = range.getValues();
        for (var i = 0; i < values.length; i++) {
          if (values[i][0] == true) {
            var valueGet = rangeGetValues[i][0];
            var getCell = `H${i+2}`;
            console.log("Cell Value: " + valueGet + " -- Cell Target: " +getCell);
            sheet.getRange(getCell).setValue(valueGet);
          }
        }
      }
    }
  }
}
