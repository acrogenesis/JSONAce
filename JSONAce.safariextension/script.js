(function() {
  // console.log(getTheme());
  var editor = ace.edit('JSONAceEditor');
  editor.getSession().setMode('ace/mode/json');
  document.getElementById('JSONAceEditor').style.fontSize = document.getElementById('fontsize').textContent;
  editor.setTheme('ace/theme/' + document.getElementById("theme").textContent + '');
  editor.getSession().setTabSize(parseInt(document.getElementById('tabsize').textContent));
  editor.setReadOnly(document.getElementById('readonly').textContent === 'true');
  editor.setShowInvisibles(document.getElementById('invisibles').textContent === 'true');

  var val = editor.session.getValue();
  var o = JSON.parse(val);
  val = JSON.stringify(o, null, parseInt(document.getElementById('tabsize').textContent));
  editor.session.setValue(val);

  var rawButton = document.getElementById('raw');
  rawButton.href = location.protocol+'//'+location.host+location.pathname+'?&jsonace='+Math.floor(Math.random()*1000)+'#raw-json';
}());
