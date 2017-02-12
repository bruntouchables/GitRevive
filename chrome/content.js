/**
 * Created by Shahen Kosyan and Henrikh Kantuni on 2/12/17.
 */


'use strict';

let observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.target.classList.contains('header-dark')) {
      mutation.target.classList.remove('header-dark');
      observer.disconnect();
    }
  });
});

observer.observe(document, {
  childList: true,
  subtree: true
});