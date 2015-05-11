(function() {
  function getTheme(){
    var theme = document.getElementById("theme");
    while (theme === null) {
      theme = document.getElementById("theme");
    }
    return theme;
  }

  function getEditor(){
    var editor = document.getElementById("JSONAceEditor");
    while (editor === null) {
      editor = document.getElementById("JSONAceEditor");
    }
    return editor;
  }

  function getFontSize(){
    var fontsize = document.getElementById("fontsize");
    while (fontsize === null) {
      fontsize = document.getElementById("fontsize");
    }
    return fontsize;
  }

  function getTabSize(){
    var tabsize = document.getElementById("tabsize");
    while (tabsize === null) {
      tabsize = document.getElementById("tabsize");
    }
    return tabsize;
  }

  function getReadOnly(){
    var readonly = document.getElementById("readonly");
    while (readonly === null) {
      readonly = document.getElementById("readonly");
    }
    return readonly;
  }

  function getInvisibles(){
    var invisibles = document.getElementById("invisibles");
    while (invisibles === null) {
      invisibles = document.getElementById("invisibles");
    }
    return invisibles;
  }

  function getRaw(){
    var raw = document.getElementById("raw");
    while (raw === null) {
      raw = document.getElementById("raw");
    }
    return raw;
  }

  function init() {
    console.log('entre');
    var editor = ace.edit('JSONAceEditor');
    editor.getSession().setMode('ace/mode/json');
    getEditor().style.fontSize = getFontSize().textContent;
    editor.setTheme('ace/theme/' + getTheme().textContent + '');
    editor.getSession().setTabSize(parseInt(getTabSize().textContent));
    editor.setReadOnly(getReadOnly().textContent === 'true');
    editor.setShowInvisibles(getInvisibles().textContent === 'true');

    var val = editor.session.getValue();
    var o = JSON.parse(val);
    val = JSON.stringify(o, null, parseInt(getTabSize().textContent));
    editor.session.setValue(val);

    var rawButton = getRaw();
    rawButton.href = location.protocol+'//'+location.host+location.pathname+'?&jsonace='+Math.floor(Math.random()*1000)+'#raw-json';
  }

  init();
}());
