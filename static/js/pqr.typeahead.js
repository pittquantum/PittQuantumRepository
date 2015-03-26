
//Namespaces
var pqr = pqr || {};
pqr.htmlUtilities = pqr.htmlUtilities || {}; //General DOM maniplating and such mostly using jquery 
pqr.bindevents = pqr.bindevents || {}; //Any event binding should be done here if possible 
pqr.propertiesFormatter = pqr.propertiesFormatter || {}; //Functions to properly format various ascpets of the molecules  
pqr.threeDMole = pqr.threeDMole || {}; //Everything relating to 3dmol FILE: pqr.threedmol.js
pqr.typeahead = pqr.typeahead || {}; //Everything relating to typeahead plugin 

pqr.typeahead.data  = ['Methyl 2-Hydroxybenzoate', '3-methylbutyl acetate', 'ethyl heptanoate', 'octyl acetate', 'ethyl formate', 'ethyl pentanoate', 'pentyl acetate', 'ethyl nonanoate'];

pqr.typeahead.substringmatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substrRegex;
 
    // an array that will be populated with substring matches
    matches = [];
 
    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');
 
    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        // the typeahead jQuery plugin expects suggestions to a
        // JavaScript object, refer to typeahead docs for more info
        matches.push({ value: str });
      }
    });
 
    cb(matches);
  };
};

pqr.typeahead.activateNoBs = function(inputSelector){

  $(inputSelector).typeahead({
    hint: true,
    highlight: true,
    minLength: 2
  },
  {
    name: 'molecules',
    displayKey: 'value',
      source: pqr.typeahead.substringmatcher(pqr.typeahead.data)
  });

  $('.tt-query').css('background-color','#fff');

};

//Bootstrap-typeahead
pqr.typeahead.activate = function(inputSelector){
  $(inputSelector).typeahead({source: pqr.typeahead.data});
};