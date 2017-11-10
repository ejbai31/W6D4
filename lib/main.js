const DOMNodeCollection = require('./dom_node_collection');


window.$l = function (arg) {
  const matches = document.querySelectorAll(arg);
  if (arg instanceof HTMLElement) {
    Array.from(arg);
    return new DOMNodeCollection (arg);
  }
  return Array.from(matches);

};
