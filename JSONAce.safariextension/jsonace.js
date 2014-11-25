this.data = document.body.innerHTML;
this.uri = document.location.href;

if(document.getElementsByTagName("pre")[0]){
  // console.log("JSONView: data is wrapped in <pre>...</pre>, stripping HTML...");
  this.data = document.getElementsByTagName("pre")[0].innerHTML;
}

var json_regex = /^\s*([\[\{].*[\}\]])\s*$/; // Ghetto, but it works
var jsonp_regex = /^[\s\u200B\uFEFF]*([\w$\[\]\.]+)[\s\u200B\uFEFF]*\([\s\u200B\uFEFF]*([\[{][\s\S]*[\]}])[\s\u200B\uFEFF]*\);?[\s\u200B\uFEFF]*$/;
var jsonp_regex2 = /([\[\{][\s\S]*[\]\}])\)/; // more liberal support... this allows us to pass the jsonp.json & jsonp2.json tests
var is_json = json_regex.test(this.data);
var is_jsonp = jsonp_regex.test(this.data);
// console.log("JSONView: is_json="+is_json+" is_jsonp="+is_jsonp);

if(is_json || is_jsonp){
  /*
   * The JSONFormatter helper object. This contains two major functions, jsonToHTML and errorPage,
   * each of which returns an HTML document.
   */
  var outputDoc = '<div id="JSONAceEditor">' +
                  this.data +
                  '</div></body></html>';
  // document.body.innerHTML = outputDoc;
  var impcss = document.createElement('link');
  impcss.rel = "stylesheet";
  impcss.href = safari.extension.baseURI + "default.css";
  var impace = document.createElement('script');
  impace.src = safari.extension.baseURI + "ace.js";
  var beautify = document.createElement('script');
  beautify.src = safari.extension.baseURI + "ext-beautify.js";

  document.head.appendChild(impcss);
  document.head.appendChild(impace);
  document.head.appendChild(beautify);
  document.body.innerHTML = outputDoc;

  var ace_script = document.createElement('script');
  ace_script.src = safari.extension.baseURI + "script.js";
  document.body.appendChild(ace_script);



}else {
  // console.log("JSONView: this is not json, not formatting.");
}
