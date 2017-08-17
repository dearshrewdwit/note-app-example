(function(){
  test.describe("SingleNoteView", function(){
    var noteMock = {
      text: function() {
        return "a test";
      }
    };

    test.it("has toHtml function that returns html string", function() {
      var singleNoteView = new SingleNoteView(noteMock);
      assert.isTrue(singleNoteView.toHtml() === "<div>a test</div>");
    });
  });
})();
