(function(){
  test.describe("NoteController", function() {
    function NoteMock(str) {
      this._text = str;
    }

    NoteMock.prototype = {
      text: function(){
        return this._text;
      }
    };

    var noteListModelMock = {
      create: function(str) {
        return new NoteMock(str);
      },
      all: function() {
        return [new NoteMock("a test")];
      }
    };

    function NoteListViewMock(noteListMock) {
      this._noteListMock = noteListMock;
    }

    NoteListViewMock.prototype = {
      toHtml: function(){
        var listItems = this._noteListMock.all().map(function(note) {
          return "<li><div>" + note.text() + "</div></li>";
        }).join("");
        return "<ul>" + listItems + "</ul>";
      }
    };

    var elementMock = {};

    test.it("updates the innerHTML property of the app element to contain noteListView HTML", function() {
      var noteController = new NoteController(elementMock, noteListModelMock, NoteListViewMock);
      noteController.display();
      assert.isTrue(elementMock.innerHTML === "<ul><li><div>a test</div></li></ul>", "the innerHTML property of the app element contains HTML");
    });
  });
})();
