
function render() {
  $('#preview')
    .html(
      DOMPurify.sanitize(
        marked.parse($('#editor').val())
      )
    )
}

$( document ).ready(function() {
  render();
  $('#editor').on("input", render);
});