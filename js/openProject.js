$(document).ready(function () {
  for (let i = 0; i < $('.open-project-btn').length; i++) {
    $('.open-project-btn')
      .eq(i)
      .click(function () {
        $('.project-detail').eq(i).toggleClass('hidden');
        $('.project-detail').eq(i).toggleClass('flex');
      });

    $('.close-pd')
      .eq(i)
      .click(function () {
        $('.project-detail').eq(i).toggleClass('hidden');
        $('.project-detail').eq(i).toggleClass('flex');
        $('.project-video').eq(i).trigger('pause');
      });
  }

  for (let i = 0; i < $('#website .open-project-btn').length; i++) {
    $('#website .open-project-btn')
      .eq(i)
      .click(function () {
        $('#website .project-video').eq(i).trigger('play');
      });

    $('#mograph .open-project-btn')
      .eq(i)
      .click(function () {
        $('#mograph .project-video').eq(i).trigger('play');
      });

    $('#website .close-pd')
      .eq(i)
      .click(function () {
        $('#website .project-video').eq(i).trigger('pause');
      });

    $('#mograph .close-pd')
      .eq(i)
      .click(function () {
        $('#mograph .project-video').eq(i).trigger('pause');
      });
  }
});
