import React from 'react';
import * as XLSX from 'xlsx';

const ExportExcelButton = ({ data, fileName = 'export.xlsx' }) => {
  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  const exportToExcel = () => {
    // Create a new workbook and add a worksheet
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // Write the workbook to a blob
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const dataBlob = new Blob([excelBuffer], {type: fileType});

    // Create a URL for the blob and trigger the download
    const url = window.URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName + fileExtension);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  return (
    <button onClick={exportToExcel}>Download Excel</button>
  );
};

export default ExportExcelButton;