(function(exports){
  function NoteController(element, noteListModel, noteListView) {
    this._element = element;
    this._noteListModel = noteListModel;
    this._noteListModel.create("Favourite drink: seltzer");
    this._noteListView = new noteListView(this._noteListModel);
  }

  NoteController.prototype = {
    display: function() {
      this._element.innerHTML = this._noteListView.toHtml();
    }
  };

  exports.NoteController = NoteController;
})(this);
