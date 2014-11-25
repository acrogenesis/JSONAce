(function() {
  var editor = ace.edit("JSONAceEditor");
  editor.getSession().setMode("ace/mode/json");
  var val = editor.session.getValue();
  var o = JSON.parse(val);
  val = JSON.stringify(o, null, 4);
  editor.session.setValue(val);
}());
