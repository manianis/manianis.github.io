$(function () {
  $('.btn_solution').click(function (e) {
    e.preventDefault();
    var href = $(this).attr('href');
    $(href).toggle();
  });

  const sommaire = $('#sommaire');
  const ul = $('<ul>').appendTo(sommaire);
  $('h2').each((idx, el) => {
    el.id = 'h2_titre_' + idx;
    const text = $(el).text();
    const li = $('<li>').appendTo(ul);
    const a = $(`<a>`)
      .attr('href', '#h2_titre_' + idx)
      .text(text)
      .appendTo(li);
  });
});