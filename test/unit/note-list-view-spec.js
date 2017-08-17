(function(){
  console.log("NoteListView: ");
  
  // note mock as function because constructor is called (::new)
  function NoteMock(str) {
    this._text = str;
  }

  NoteMock.prototype = {
    text: function(){
      return this._text;
    }
  };

  // note list mocks as objects with functions as property values
  var noteListMock = {
    all: function() {
      return [new NoteMock("a test")];
    }
  };

  var emptyNoteListMock = {
    all: function() {
      return [];
    }
  };

  var manyNoteListMock = {
    all: function() {
      return [new NoteMock("a test"), new NoteMock("a second test")];
    }
  };

  var noteListView = new NoteListView(noteListMock);

  assert.isTrue(noteListView.toHtml() === "<ul><li><div>a test</div></li></ul>", "toHtml method returns html string");

  var manyNoteListView = new NoteListView(manyNoteListMock);

  assert.isTrue(manyNoteListView.toHtml() === "<ul><li><div>a test</div></li><li><div>a second test</div></li></ul>", "can handle many notes");

  var emptyNoteListView = new NoteListView(emptyNoteListMock);

  assert.isTrue(emptyNoteListView.toHtml() === "<ul></ul>", "can handle empty notes");

})();
