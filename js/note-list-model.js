(function(exports){
  function NoteListModel(noteModel) {
    this._noteModel = noteModel;
    this._notes = [];
  }

  NoteListModel.prototype = {
    all: function(){
      return this._notes;
    },
    create: function(str){
      var note = new this._noteModel(str);
      this._notes.push(note);
      return note;
    }
  };

  exports.NoteListModel = NoteListModel;
})(this);
