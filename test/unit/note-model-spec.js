(function(){
  test.describe("NoteModel", function(){
    test.it("has a method to return its text", function() {
      var noteModel = new NoteModel("test");
      assert.isTrue(noteModel.text() === "test");
    });
  });
})();
