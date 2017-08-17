(function(){
  test.describe("NoteListModel", function(){

    function NoteMock(str) {
      this._text = str;
    }

    NoteMock.prototype = {
      text: function(){
        return this._text;
      }
    };

    var noteListModel = new NoteListModel(NoteMock);

    test.it("is instantiated with no notes", function() {
      assert.isTrue(new NoteListModel().all().length === 0);
    });

    test.it("has a method to return its notes", function() {
      noteListModel.create("a new note");
      assert.isTrue(noteListModel.all().length === 1);
    });

    test.it("creates note", function() {
      assert.isTrue(typeof(noteListModel.create("a new note")) === typeof(new NoteMock()));
    });
  });
})();
