(function(){
  console.log("NoteListModel: ");

  function NoteMock(str) {
    this._text = str;
  }

  NoteMock.prototype = {
    text: function(){
      return this._text;
    }
  };

  var noteListModel = new NoteListModel(NoteMock);

  assert.isTrue(new NoteListModel().all().length === 0, "is instantiated with no notes");

  noteListModel.create("a new note");

  assert.isTrue(noteListModel.all().length === 1, "has a method to return its notes");

  assert.isTrue(typeof(noteListModel.create("a new note")) === typeof(new NoteMock()), "creates note");

  assert.isTrue(noteListModel.all().length === 2, "stores notes");
})();
