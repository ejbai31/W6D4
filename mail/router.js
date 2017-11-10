
class Router {
  constructor(node){
    this.node = node;
  }
  start(){
    this.render();
    window.addEventListener("hashchange", ()=>{
      this.render();
    })
  }
  
  render(){
    this.node.innerHTML = "";
    let component = this.activeRoute();
    if(component {
      this.node.appendChid(component.render());
    })
  }
  
  activeRoute(){
   let hash = window.location.hash.substr(1);
   let component = this.routes[hash];
   return component;
 }
}

module.exports = Router;
