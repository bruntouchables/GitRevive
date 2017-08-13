/**
 * Created by Shahen Kosyan and Henrikh Kantuni on 2/12/17.
 */


'use strict';

let observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    let elementClassList = mutation.target.classList;
    let isHeader = elementClassList.contains('header') && elementClassList.length === 1;
    let isGist = elementClassList.contains('gist-header');
    
    if (isHeader || isGist) {
      mutation.target.classList.add('revive');
      observer.disconnect();
    }
  });
});

observer.observe(document, {
  childList: true,
  subtree: true
});
