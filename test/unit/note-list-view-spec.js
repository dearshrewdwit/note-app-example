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

    var longMessage = "a test that is a really long set of characters";

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

    var longNoteListMock = {
      all: function() {
        return [new NoteMock(longMessage)];
      }
    };

    test.it("toHtml method returns html string", function() {
      var noteListView = new NoteListView(noteListMock);
      console.log(noteListView.toHtml());
      assert.isTrue(noteListView.toHtml() === "<ul><li><div>a test</div></li></ul>");
    });

    test.it("can handle many notes", function() {
      var noteListView = new NoteListView(manyNoteListMock);
      assert.isTrue(noteListView.toHtml() === "<ul><li><div>a test</div></li><li><div>a second test</div></li></ul>");
    });

    test.it("can handle empty notes", function() {
      var noteListView = new NoteListView(emptyNoteListMock);
      assert.isTrue(noteListView.toHtml() === "<ul></ul>");
    });

    test.it("only shows first 20 characters of a note", function() {
      var noteListView = new NoteListView(longNoteListMock);
      var expectedSubString = longMessage.substr(0, 20);
      assert.isTrue(noteListView.toHtml() === "<ul><li><div>" + expectedSubString + "</div></li></ul>");
    });
  });
})();
