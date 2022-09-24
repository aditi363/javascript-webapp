// decalring variables
var hc = 0;
var steeptea = 0;
var creamychill = 0;
var icedcap = 0;
var cookies = 0;
var cname = "";

// event listner 
window.addEventListener("load", init);

function init() { 
    var a = document.getElementById("hcBtn");
    a.addEventListener("click", onhcSubmit);

    var o = document.getElementById("ssBtn");
    o.addEventListener("click", onsteepteaSubmit);

    var c = document.getElementById("ccBtn");
    c.addEventListener("click", onccSubmit);

    var d = document.getElementById("icBtn");
    d.addEventListener("click", onicSubmit);

    var e = document.getElementById("ckBtn");
    e.addEventListener("click", onckSubmit);
 
    var check = document.getElementById("checkout");
    check.addEventListener("click", onCheckOut);
} 
function onhcSubmit() {

    hc = prompt("What size would you like for the Hot Chocolate?") 
    while (!parseInt(hc))
        hc = prompt("Only numbers") 
    document.getElementById("lblhc").textContent = "hot Chocolate  $3 X " + hc  
    document.getElementById("checkout").style.visibility = "visible"
}

function onsteepteaSubmit() {  
    steeptea = prompt("How many steeptea juices would you like?")
           
    while (!parseInt(steeptea))
        steeptea = prompt("Please enter number only")
       
    document.getElementById("lblss").textContent = "steeptea 2$  X " + steeptea
    
    document.getElementById("checkout").style.visibility = "visible"
}

function onccSubmit() {
    creamychill = prompt("How many Creamy chill juices would you like?")
      
    while (!parseInt(creamychill))
        creamychill = prompt("Please enter number only")
           
    document.getElementById("lblcc").textContent = "Creamy Chill 4$ X " + creamychill
       
    document.getElementById("checkout").style.visibility = "visible"
}

function onicSubmit() {

    icedcap = prompt("How many Ice Cap would you like?")  
    while (!parseInt(icedcap))
        icedcap = prompt("Please enter number only")
    document.getElementById("lblic").textContent = "Iced Capp  4$ X " + icedcap
    document.getElementById("checkout").style.visibility = "visible"
}

function onckSubmit() {
    cookies = prompt("How many Cookies would you like?")  
    while (!parseInt(cookies))
        cookies = prompt("Please enter number only")

    document.getElementById("lblck").textContent = "Cookies  2$ X " + cookies
    document.getElementById("checkout").style.visibility = "visible"
}

function onCheckOut() {
    //Prompt the user to enter customer name     
    cname = prompt("Please enter your name") 
    document.getElementById("rTbl").style.visibility = "visible" 
    document.getElementById("customerName").textContent = "Customer name is  " + cname   
    hc = parseFloat(hc)
    steeptea = parseFloat(steeptea)
    creamychill = parseFloat(creamychill)
    icedcap = parseFloat(icedcap)
    cookies = parseFloat(cookies)
    
// displaying details of the products
    document.getElementById("aplNo").textContent = hc
    document.getElementById("ssNo").textContent = steeptea
    document.getElementById("ccNo").textContent = creamychill
    document.getElementById("icNo").textContent = icedcap
    document.getElementById("ckNo").textContent = cookies

// fetching amount 
    var totalhc = document.getElementById("aplTotal").textContent = hc * 3
    var totalsteeptea = document.getElementById("ssTotal").textContent = steeptea * 2
    var totalcc = document.getElementById("ccTotal").textContent = creamychill * 4
    var totalic = document.getElementById("icTotal").textContent = icedcap * 4
    var totalck = document.getElementById("ckTotal").textContent = cookies * 2


    //to calculate gst    
    var gst = (hc * 5 + steeptea * 5) * 13 / 100
    document.getElementById("gst").textContent = "$" + gst

    //to calculate total price    
    var total = (totalhc + totalsteeptea + totalcc + totalic + totalck + gst)
    document.getElementById("total").textContent = "$" + total
}