// An initial test script

var {JSDOM} = require('jsdom');
var RDFaParser = require('../src/index.js');

// Picked example from RDFa play
var html = '<div vocab="http://schema.org/" typeof="Person"><a property="image" href="http://manu.sporny.org/images/manu.png">    <span property="name">Manu Sporny</span></a>,   <span property="jobTitle">Founder/CEO</span>  <div>    Phone: <span property="telephone">(540) 961-4469</span>  </div>  <div>    E-mail: <a property="email" href="mailto:msporny@digitalbazaar.com">msporny@digitalbazaar.com</a> </div>  <div>    Links: <a property="url" href="http://manu.sporny.org/">Manu’s homepage</a>  </div></div>';

var doc = (new JSDOM(html, { url: "https://example.org/", contentType: "text/html"})).window.document;

var processor = new RDFaParser.RDFaProcessor();
processor.onTriple = (triple) => {
  console.log(triple);
};

try {
  processor.process(doc, {baseURI: 'http://example.org/'});
} catch (e) {
  console.trace(e);
}
