$(() => {
  $.get("/api/notes").then(data => {
    data.forEach(e => {
      $("#notes-list").append(Notes);
    });
  });

  const Notes = (data) => {
    return
    `<div class="jumbotron jumbotron-fluid bg-dark text-white">
        <div class="container">
            <p>${data}</p>
        </div>
    </div>`
  }
});
