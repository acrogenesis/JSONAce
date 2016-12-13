function isJsonString(string) {
  try {
    JSON.parse(string);
  } catch (e) {
    return false;
  }
  return true;
}

function hiddenSpan(id, message) {
  return `<span id="${id}" class="hidden">${message}</span>`;
}

function filePath(file) {
  return safari.extension.baseURI + file;
}

function appendCSS(file) {
  var css = document.createElement('link');
  css.rel = "stylesheet";
  css.href = filePath(file);
  document.head.appendChild(css);
}

function appendJS(location, file) {
  var js = document.createElement('script');
  js.src = filePath(file);

  if (location === 'head') {
    document.head.appendChild(js);
  } else if (location === 'body') {
    document.body.appendChild(js);
  }
}

function appendSetting(setting) {
  document.body.innerHTML += hiddenSpan(setting.name, setting.message);
}

if (document.body.getElementsByTagName('*').length == 1 &&
    document.getElementsByTagName('pre').length == 1) {

  this.data = document.getElementsByTagName('pre')[0].innerHTML;
}

if (isJsonString(this.data)) {
  appendCSS('jsonace.css');
  appendJS('head', 'ace/ace.js');
  appendJS('body', 'script.js');

  document.body.innerHTML = `<button id="button" class="raw" onclick="toggleStyle()">VIEW RAW</button>
    <div class="data raw hidden">${this.data}</div>
    <div id="ace" class="data pretty">${this.data}</div>`;

  safari.self.addEventListener('message', appendSetting, false);

  ['getFontSize', 'getTheme', 'getTabSize', 'getReadOnly', 'getInvisibles'].forEach(function(setting) {
    safari.self.tab.dispatchMessage(setting);
  });
}
