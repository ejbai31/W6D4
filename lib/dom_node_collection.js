class DOMNodeCollection {
  constructor (array) {
    this.array = array;
  }
  html (string) {
    
    if (!string) {
      return this.array[0].innerHTML;
    } else {
      for(let i = 0; i < this.array.length; i++) {
        this.array[i].innerHTML;
      }
    }
  }
  empty () {
    this.html("");
  }
  append(child){
    if(this.array.length === 0) return;
    
    if(typeof child === "object" && 
    !(child instanceof DOMNodeCollection)){
      child = $l(child);
    }
    
    if(typeof child === "string"){
      this.each((array) => {
        array.innerHTML += child;
      });
    }else if(child instanceof DOMNodeCollection){
      this.each((array) => {
        child.each(())
      })
    }
  }
}

module.exports = DOMNodeCollection;
