/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  let map = {};
  let start = -1;
  let midStart = -1;
  for (let i = 0; i < word.length; i++) {
    let char = word.charAt(i);

    if (!isNaN(char)) {
      if (start == -1) {
        start = i;
      }
      if (char == !"0") {
      }
    } else {
      if (start != -1) {
        // if (i != word.length - 1) {
        let sub = word.substring(start, i);
        if (map[sub] === undefined) {
          map[sub] = 1;
        } else {
          map[sub]++;
        }
        start = -1;
        midStart = -1;
      }
    }
  }

  if (start != -1) {
    let sub = word.substring(start);

    if (map[sub] === undefined) {
      map[sub] = 1;
    } else {
      map[sub]++;
    }
  }

  return Object.keys(map).length;
};

console.log(
  numDifferentIntegers(
    "2393706880236110407059624696967828762752651982730115221690437821508229419410771541532394006597463715513741725852432559057224478815116557380260390432211227579663571046845842281704281749571110076974264971989893607137140456254346955633455446057823738757323149856858154529105301197388177242583658641529908583934918768953462557716z97438020429952944646288084173334701047574188936201324845149110176716130267041674438237608038734431519439828191344238609567530399189316846359766256507371240530620697102864238792350289978450509162697068948604722646739174590530336510475061521094503850598453536706982695212493902968251702853203929616930291257062173c79487281900662343830648295410"
  )
);
