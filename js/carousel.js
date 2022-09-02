$(document).ready(function () {
  for (let i = 0; i < $('.slide-radio').length; i++) {
    $('.slide-radio')
      .eq(i)
      .click(function () {
        if (window.innerWidth > 600) {
          $('#first').css('margin-left', `calc(-30rem * ${i})`);
        } else {
          $('#first').css('margin-left', `calc(-80vw * ${i})`);
        }
      });
  }

  function changeLink(index) {
    if (index == 0) {
      $('.slide img')
        .eq(0)
        .attr('src', `img/pengurus/${dataPengurus[dataPengurus.length - 1]['LinkGambar']}.png`);
      $('.nama-pengurus')
        .eq(0)
        .text(`${dataPengurus[dataPengurus.length - 1]['Nama']}`);
      $('.jabatan-pengurus')
        .eq(0)
        .text(`${dataPengurus[dataPengurus.length - 1]['Jabatan']}`);
    } else {
      $('.slide img')
        .eq(0)
        .attr('src', `img/pengurus/${dataPengurus[index - 1]['LinkGambar']}.png`);
      $('.nama-pengurus')
        .eq(0)
        .text(`${dataPengurus[index - 1]['Nama']}`);
      $('.jabatan-pengurus')
        .eq(0)
        .text(`${dataPengurus[index - 1]['Jabatan']}`);
    }

    $('.slide img').eq(1).attr('src', `img/pengurus/${dataPengurus[index]['LinkGambar']}.png`);
    $('.nama-pengurus').eq(1).text(`${dataPengurus[index]['Nama']}`);
    $('.jabatan-pengurus').eq(1).text(`${dataPengurus[index]['Jabatan']}`);

    if (index == dataPengurus.length - 1) {
      $('.slide img').eq(2).attr('src', `img/pengurus/${dataPengurus[0]['LinkGambar']}.png`);
      $('.nama-pengurus').eq(2).text(`${dataPengurus[0]['Nama']}`);
      $('.jabatan-pengurus').eq(2).text(`${dataPengurus[0]['Jabatan']}`);
    } else {
      $('.slide img')
        .eq(2)
        .attr('src', `img/pengurus/${dataPengurus[index + 1]['LinkGambar']}.png`);
      $('.nama-pengurus')
        .eq(2)
        .text(`${dataPengurus[index + 1]['Nama']}`);
      $('.jabatan-pengurus')
        .eq(2)
        .text(`${dataPengurus[index + 1]['Jabatan']}`);
    }
  }

  const dataPengurus = [
    {
      Nama: 'Bintang Fajar Julio',
      Jabatan: 'Humas SPNJ',
      LinkGambar: 'bintang-fajar-julio',
    },
    {
      Nama: 'Rizky Adi',
      Jabatan: 'Ketua SPNJ',
      LinkGambar: 'rizky-adi',
    },
    {
      Nama: 'Gilang Adhi Perkasa',
      Jabatan: 'Wakil Ketua SPNJ',
      LinkGambar: 'gilang-adhi-perkasa',
    },
    {
      Nama: 'Alifia Ayu Masita',
      Jabatan: 'Bendahara SPNJ',
      LinkGambar: 'alifia-ayu-masita',
    },
    {
      Nama: 'Bagus Tri Yulianto Darmawan',
      Jabatan: 'Kestari SPNJ',
      LinkGambar: 'bagus-kestari',
    },
    {
      Nama: 'Hedya Tiesyapana',
      Jabatan: 'Media Partner SPNJ',
      LinkGambar: 'hedya-tiesyapana',
    },
    {
      Nama: 'Hamza Firdaus',
      Jabatan: 'Kadiv Android',
      LinkGambar: 'hamza-firdaus',
    },
    {
      Nama: 'Dinda Ayu Syafitri',
      Jabatan: 'Kadiv Website',
      LinkGambar: 'dinda-ayu-syafitri',
    },
    {
      Nama: 'Rivansa Rifky Ariq',
      Jabatan: 'Kadiv Motion Graphic',
      LinkGambar: 'rivansa-rifky-ariq',
    },
  ];

  let currentSlide = 1;
  $('#prev-button').click(function () {
    if (currentSlide == 0) {
      currentSlide = dataPengurus.length - 1;
    } else {
      currentSlide--;
    }
    changeLink(currentSlide);
  });

  $('#next-button').click(function () {
    if (currentSlide == dataPengurus.length - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    changeLink(currentSlide);
  });

  let currentDivision = 0;
  $('#prev-division').click(function () {
    if (currentDivision == 0) {
      currentDivision = 2;
    } else {
      currentDivision--;
    }
    $('.division-name').eq(0).css('margin-top', `calc(-2.25rem * ${currentDivision})`);
    if (window.innerWidth >= 1024) {
      $('#android').css('margin-top', `calc(-34rem * ${currentDivision})`);
    } else if (window.innerWidth >= 640) {
      $('#android').css('margin-top', `calc(-55rem * ${currentDivision})`);
    } else {
      $('#android').css('margin-top', `calc(-83rem * ${currentDivision})`);
    }
  });

  $('#next-division').click(function () {
    if (currentDivision == 2) {
      currentDivision = 0;
    } else {
      currentDivision++;
    }

    $('.division-name').eq(0).css('margin-top', `calc(-2.25rem * ${currentDivision})`);
    if (window.innerWidth >= 1024) {
      $('#android').css('margin-top', `calc(-34rem * ${currentDivision})`);
    } else if (window.innerWidth >= 640) {
      $('#android').css('margin-top', `calc(-55rem * ${currentDivision})`);
    } else {
      $('#android').css('margin-top', `calc(-83rem * ${currentDivision})`);
    }
  });
});
