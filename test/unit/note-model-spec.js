(function(){
  console.log("NoteModel: ");

  var noteModel = new NoteModel("test");

  assert.isTrue(noteModel.text() === "test", "has a method to return its text");
})();
