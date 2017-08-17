(function(exports){
  function NoteListView(noteListModel) {
    this._noteListModel = noteListModel;
  }

  NoteListView.prototype = {
    toHtml: function(){
      var listItems = this._noteListModel.all().map(function(note) {
        return "<li><div>" + note.text().substr(0, 20) + "</div></li>";
      }).join("");
      return "<ul>" + listItems + "</ul>";
    }
  };

  exports.NoteListView = NoteListView;
})(this);
