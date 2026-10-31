class Browser{

//properties

browserVersion:number
browserName:string="chrome"


//methods

launchBrowser(){
console.log("launch the chrome browser");

}

loadUrl(){
  console.log("load the URL");  
}

//default constructor
// constructor(){
//     console.log("this is a default constructor");
    
// }

//parameterized constructor
constructor(ver:number){
    console.log(this.browserVersion=ver);
    
}

}

//create object for the class
let br=new Browser(120)
console.log(br.browserName)
console.log(br.browserVersion)
br.launchBrowser()
br.loadUrl()