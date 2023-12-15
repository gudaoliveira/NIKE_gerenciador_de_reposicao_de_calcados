let fSource = DriveApp.getFolderById('xxxxxxxxxxxxxxxxxxxxxxxxx') // Change to the ID for the folder that will have your CSV
let fi = fSource.getFilesByName('data.txt') // Here, you can change the name of the file contaning the data in CSV format
let file = fi.next()

let csvData = Utilities.parseCsv(file.getBlob().getDataAsString())

function importCSV() {

  resetEverything(replenishmentSheet)

  rawDataSheet.getRange('A2:L').clearContent()
  rawDataSheet.getRange(2, 1, csvData.length, csvData[0].length).setValues(csvData)

  rawDataSheet.getRange('K:L').setNumberFormat('#,##0')
  rawDataSheet.getRange('D2:E').setNumberFormat('@')

  ui.alert('Sucesso!', 'Seu arquivo foi importado com sucesso', ui.ButtonSet.OK)
}
