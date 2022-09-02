$(document).ready(function () {
  for (let i = 0; i < $('.open-project-btn').length; i++) {
    $('.open-project-btn')
      .eq(i)
      .click(function () {
        $('.project-detail').eq(i).toggleClass('hidden');
        $('.project-detail').eq(i).toggleClass('flex');
        $('.project-video').eq(i).trigger('play');
      });

    $('.close-pd')
      .eq(i)
      .click(function () {
        $('.project-detail').eq(i).toggleClass('hidden');
        $('.project-detail').eq(i).toggleClass('flex');
        $('.project-video').eq(i).trigger('pause');
      });
  }
});
