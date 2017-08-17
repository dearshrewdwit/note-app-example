(function(exports){
  function SingleNoteView(noteModel) {
    this._noteModel = noteModel;
  }

  SingleNoteView.prototype = {
    toHtml: function(){
      return "<div>" + this._noteModel.text() + "</div>";
    }
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
