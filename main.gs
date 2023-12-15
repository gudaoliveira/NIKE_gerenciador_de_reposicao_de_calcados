let ss = SpreadsheetApp.getActiveSpreadsheet()
let ui = SpreadsheetApp.getUi()
let rawDataSheet = ss.getSheetByName('raw_data')
let replenishmentSheet = ss.getSheetByName('dash_replenishment')

let ftwQuery = '=QUERY(raw_data!A2:N;\" select M, I, sum(G), N, min(L), B, A where A is not NULL and A = \'FOOTWEAR DIVISION\' and L > 31 group by M, I, N, B, A order by B label M\'\', I\'\', sum(G)\'\', N\'\', min(L)\'\',  B\'\', A\'\'\")'

// DEPRECEATED
// let formulas = [
//   [
//     '=IF(ISBLANK($C3);"";ROW(A1))',
//     '',
//     '=\'DADOS BRUTOS\'!$N1',
//     '=XLOOKUP($C3;\'DADOS BRUTOS\'!M:M;\'DADOS BRUTOS\'!I:I)',
//     '=COUNTIF(\'DADOS BRUTOS\'!$M:$M;\'DADOS BRUTOS\'!N1)',
//     '=TEXTJOIN("/";TRUE;\'DADOS BRUTOS\'!O1:AQ1)',
//     '=XLOOKUP($C3;\'DADOS BRUTOS\'!$M:$M;\'DADOS BRUTOS\'!$L:$L)',
//     '=XLOOKUP($C3;\'DADOS BRUTOS\'!$M:$M;\'DADOS BRUTOS\'!$B:$B)',
//     '=XLOOKUP($C3;\'DADOS BRUTOS\'!$M:$M;\'DADOS BRUTOS\'!$A:$A)'
//   ]
// ]


// This function is also depreciated, but i'm maintaining here as a redundancy
// It makes the same job as the "where" on the query, but with the filter
// function ftwFilter() {
//   resetFilters(replenishmentSheet)

//   let groupCriteria = SpreadsheetApp.newFilterCriteria()
//     .setHiddenValues(['APPAREL DIVISION', 'EQUIPMENT DIVISION'])
//     .build()

//   let remainingItensCriteria = SpreadsheetApp.newFilterCriteria()
//     .whenNumberGreaterThan(31)
//     .build()

//   let idCriteria = SpreadsheetApp.newFilterCriteria()
//     .whenCellNotEmpty()
//     .build()

//   // Filter only the rows that the value is not empty
//   replenishmentSheet.getFilter().setColumnFilterCriteria(1, idCriteria)

//   // Filter only the items that have more than 31 itens available on stock    
//   replenishmentSheet.getFilter().setColumnFilterCriteria(7, remainingItensCriteria)

//   // Filter only the itens in the FOOTWEAR group
//   replenishmentSheet.getFilter().setColumnFilterCriteria(9, groupCriteria)

//   // Sort the subgroup column
//   replenishmentSheet.getFilter().sort(8, true)

//   ui.alert('Filtrando os itens do FOOTWEAR', 'A sua lista de reposição está pronta, com todos os itens do FOOTWEAR com mais de 31 pares constando no sistema', ui.ButtonSet.OK)
// }
