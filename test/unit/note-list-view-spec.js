(function(){
  test.describe("NoteListView", function(){

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


    test.it("toHtml method returns html string", function() {
      var noteListView = new NoteListView(noteListMock);
      assert.isTrue(noteListView.toHtml() === "<ul><li><div>a test</div></li></ul>");
    });

    test.it("can handle many notes", function() {
      var manyNoteListView = new NoteListView(manyNoteListMock);
      assert.isTrue(manyNoteListView.toHtml() === "<ul><li><div>a test</div></li><li><div>a second test</div></li></ul>");
    });

    test.it("can handle empty notes", function() {
      var emptyNoteListView = new NoteListView(emptyNoteListMock);
      assert.isTrue(emptyNoteListView.toHtml() === "<ul></ul>");
    });
  });
})();
