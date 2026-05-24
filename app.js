
document.getElementById('pdfBtn').addEventListener('click', () => {
  const element = document.getElementById('report');

  html2pdf()
    .set({
      margin: 0.5,
      filename: 'v7_race_report.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' }
    })
    .from(element)
    .save();
});

document.getElementById('loadBtn').addEventListener('click', () => {
  const file = document.getElementById('excelFile').files[0];

  if(!file){
    alert('Excelファイルを選択してください');
    return;
  }

  const reader = new FileReader();

  reader.onload = function(e){
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: 'array' });

    alert('Excel読込成功: ' + workbook.SheetNames.join(', '));

    console.log(workbook);
  };

  reader.readAsArrayBuffer(file);
});
