// An initial test script

var {JSDOM} = require('jsdom');
var RDFaParser = require('../src/index.js');

// Picked example from RDFa play
var html = '<div typeof="foaf:Person"><a property="foaf:depiction" href="http://manu.sporny.org/images/manu.png">    <span property="rdfs:label">Manu Sporny</span></a></div>';

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
