function resetEverything(table) {

  if (table.getRange('A2').getFilter() != null) { //If there is a filter...
    table.getRange('A2').getFilter().remove()
  }

  uncheckBoxes(table) // Also recreates  the removed filter
  createCheckBoxes(table)
  resetFormulas(table)

  table.getRange('A3:I1000').setBackground(null)
}

function resetFormulas(table) {
  table.getRange('C3:I').clearContent()
  table.getRange('C3').setValue(ftwQuery)

  // DEPRECEATED
  // let maxRows = table.getMaxRows()
  // table.getRange(3, 1, 1, 9).setValues(formulas)
  // table.getRange(4, 1, maxRows, 9).clearContent()
  // table.getRange(3, 1, 1, 9).copyTo(table.getRange(4, 1, maxRows, 9))
}

function createCheckBoxes(table) {
  let checkBoxDataRange = table.getRange('B3:B1000')

  checkBoxDataRange.insertCheckboxes()

  let dataValidation = SpreadsheetApp.newDataValidation()
    .setAllowInvalid(true)
    .requireCheckbox('VERDADEIRO', 'FALSO')
    .build()
  checkBoxDataRange.setDataValidation(dataValidation)
}


function uncheckBoxes() {
  if (replenishmentSheet.getFilter() != null) { //If there is a filter...
    replenishmentSheet.getRange('A2').getFilter().remove()
    replenishmentSheet.getRange('B3:B1000').setValue('FALSO')
    replenishmentSheet.getRange('A2:I').createFilter()
  } else {
    replenishmentSheet.getRange('B3:B1000').setValue('FALSO')
    replenishmentSheet.getRange('A2:I').createFilter()
  }
}
