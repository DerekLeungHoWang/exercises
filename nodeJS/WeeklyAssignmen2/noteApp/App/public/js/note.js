/*=====================================*/
/*---------handlebars compile------------*/
/*=====================================*/
var notesTemplate = Handlebars.compile(
    `
    {{#each notes}}
    <div class="note">
        <span class="input"><textarea data-id="{{ @index }}"> {{ this }}</textarea></span>

        <button class="remove btn btn-xs" data-id="{{ @index }}"><i class = "fa fa-trash" aria-hidden="true"></i></button>
        </div>
        {{/each}}
    `
);

const reloadNotes = (notes) => {
  console.log(notes,"line14 notes. js");
  $("#notes").html(notesTemplate({ notes: notes })); //1st notes is res.data
};

const beginSaving = (target) => {
  $(target).prop("disabled", true);
  $(".saving").show();
};

const endSaving = (target) => {
  $(target).prop("disabled", true);
  setTimeout(() => {
    $(".saving").hide();  
  }, 250);
  
};

$(() => {
  console.log("ready");
  endSaving();

  // Initial get request from our client to our server, we are trying to get all of our notes for the user currently logged in, so we can render each note onto the DOM.
  axios
    .get("/api/notes")
    .then(res => {
      console.log(`Getting notes: ${res.data}`);
      reloadNotes(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

  $("#form-add").submit(e => {
    e.preventDefault();
    console.log("submit button pressed");

    var val = $("textarea[name=note]").val();
    console.log(val);

    if (val === "") {
      return;
    }
    $('textarea[name=note]').val('');
    axios.post('/api/notes/', {
        content:val
    }).then((res)=>{
        console.log(res.data)
        reloadNotes(res.data);
    }).catch((err)=>{
        console.log(err)
    })
  });

//   $('#notes').on('blur', 'textarea', (event)=>{
//     console.log(event.currentTarget);
//     beginSaving(event.currentTarget);
//     axios.put('/api/notes/' + $(event.currentTarget).data('id'),{
//            content:$(event.currentTarget).val()
//     }).then((res)=>{
//         endSaving(event.currentTarget);
//         reloadNotes(res.data);
//     }).catch((e)=>{
//         endSaving(e.currentTarget);
//         alert(e);
//     });
//   });

$('#notes').on('click', '.remove', (event)=>{
    beginSaving(event.currentTarget); // show saving message on DOM
// Below we send out delete request using the data-id property on our targeted text area/ button
console.log($(event.currentTarget).data('id'))
    axios.delete('/api/notes/' + $(event.currentTarget).data('id')).then((res)=>{
        endSaving(event.currentTarget); // remove saving message from the DOM
        reloadNotes(res.data); // reload the notes on the DOM so that we only render the updated notes
    }).catch((e)=>{
        endSaving(e.currentTarget);
        alert(e);
    });
});







});
