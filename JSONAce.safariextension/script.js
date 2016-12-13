function toggleStyle() {
  var divs = document.getElementsByClassName('data');
  for (var i = 0; i < divs.length; i++) {
    divs.item(i).classList.toggle('hidden');
  }

  var button = document.getElementById('button');
  button.innerHTML = (button.innerHTML === 'VIEW RAW') ? 'PRETTIFY' : 'VIEW RAW';
}

(function() {
  function getTheme() {
    return document.getElementById('theme').textContent;
  }

  function getFontSize() {
    return document.getElementById('fontsize').textContent;
  }

  function getTabSize() {
    return parseInt(document.getElementById('tabsize').textContent, 10);
  }

  function getReadOnly() {
    return document.getElementById('editor').textContent !== 'true';
  }

  function getInvisibles() {
    return document.getElementById('invisible').textContent === 'true';
  }

  var div = document.getElementById('ace');

  var json = JSON.parse(div.innerHTML);
  div.innerHTML = JSON.stringify(json, null, getTabSize());

  var editor = ace.edit(div);
  editor.getSession().setMode('ace/mode/json');
  editor.getSession().setTabSize(getTabSize());
  editor.setFontSize(getFontSize());
  editor.setReadOnly(getReadOnly());
  editor.setShowInvisibles(getInvisibles());
  editor.setTheme('ace/theme/' + getTheme());
} ());
