function batasiKata(elem, batas) {
    var text = elem.textContent.trim().split(' ');
    if (text.length > batas) {
      elem.textContent = text.slice(0, batas).join(' ') + '...';
    }
  }

  var cardDescription1 = document.getElementById('description');
  var cardDescription2 = document.getElementById('description2');
  var cardDescription3 = document.getElementById('description3');
  var kataBatas = 12; // Ganti dengan jumlah kata yang Anda inginkan
  batasiKata(cardDescription1, kataBatas);
  batasiKata(cardDescription2, kataBatas);
  batasiKata(cardDescription3, kataBatas);