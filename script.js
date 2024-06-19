function days() {
  let kalender = new Date();
  hari = kalender.getDay();
  let strHari = 'Sekarang Hari ';

  switch (hari) {
    case 0:
      alert(`${strHari}MINGGU`);
      break;
    case 1:
      alert(`${strHari}SENIN`);
      break;
    case 2:
      alert(`${strHari}SELASA`);
      break;
    case 3:
      alert(`${strHari}RABU`);
      break;
    case 4:
      alert(`${strHari}KAMIS`);
      break;
    case 5:
      alert(`${strHari}JUM'AT`);
      break;
    case 6:
      alert(`${strHari}SABTU`);
      break;
    default:
      alert('Gak Tau Sekarang Hari Apa?');
      break;
  }
}

function sorry() {
  alert('Tidak Menerima Acara');
}