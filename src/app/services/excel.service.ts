import { Injectable } from '@angular/core';
import *as ExcelJs from 'exceljs';
import {saveAs} from 'file-saver';


@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() {

  }

  generateExcel(data: any[], fileName: string, headerMap:{[key:string]:any}) {


    const workbook = new ExcelJs.Workbook();
    const worksheet = workbook.addWorksheet("Kitap 1")

    const turkishHeaders = Object.values(headerMap)
    const headerRow =worksheet.addRow(turkishHeaders)

    headerRow.eachCell((cell) => {
      cell.font = { bold: true, size: 14 }; // Kalın ve büyük font
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true }; // Ortalı ve metin sarmalı
      cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFCC' } }; // Arka plan rengi (açık sarı)
    });

    data.forEach((item) => {
      const row = [];
      Object.keys(headerMap).forEach((header) => {
        row.push(item[header]);
      })
      worksheet.addRow(row);
    })

    const columnWidths = Object.values(headerMap).map((header) => ({
      width: header.length + 10, // Başlık uzunluğuna göre genişlik belirler
    }));
    worksheet.columns = worksheet.columns.map((col, index) => ({
      ...col,
      width: columnWidths[index]?.width || 15, // Default genişlik 15
    }));

    // Satır yüksekliklerini ayarlama
    worksheet.eachRow((row, rowNumber) => {
      row.height = 68; // Tüm satırların yüksekliğini 20 yap
      row.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true }; // Hücre içeriğini ortalar ve metni sarar
    });

    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
      saveAs(blob,`${fileName}.xlsx`);
    })
  }
}
