//Global functions:
function getRandom (min, max) {
    return Math.floor(Math.random() * (max - min +1)+min);
  };

function getCust (random, hours) {
    return getRandom(donutshop[]
}

//Shops constructor:
function Shop (name,minCust,maxCust,avgPurchase,hours) {
    this.shopName = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgPurchase = avgPurchase;
    this.hours = hours;
}

var donutShop = [5];
donutShop[0] = new Shop("Blue Star Donuts",8,43,4.5,11);
donutShop[1] = new Shop("Voodoo Doughnut",4,37,2,24);
donutShop[2] = new Shop("Coco",9,23,6.33,11);
donutShop[3] = new Shop("Tonallis Donuts & Cream",2,28,1.25,17);
donutShop[4] = new Shop("Sesame Donuts",8,58,3.75,24);


/*
var cust = 0;

function getCustomers () {
    for (var index = 0; index < donutShops.length; index++) {
       var cust = getRandom(this.donutShops[index][1], this.donutShops[index][2]
        +1)*this.donutShops[index][4];
    };
    return cust;
};

*******  "cust.getCustomers(); = how to execute a function from a variable."
*/
function fieldsets (donutshop) {
  for (var index = 0; index < donutShops.length; index++){
    document.write("<fieldset id='"+this.donutShops[index][0]+"'>");

    document.write("<legend><h4>"+this.donutShops[index][0]+"</h4></legend>");

    document.write("<label>Minimum Customers: </label><input type='text'"+
     "class='minCust' id='"+this.donutShops[index][0]+" minCust'"+
      "value='"+this.donutShops[index][1]+"''>");

    document.write("<label>Maximum Customers: </label><input type='text'"+
     "class='maxCust' id='"+this.donutShops[index][0]+" maxCust'"+
      "value='"+this.donutShops[index][2]+"'><br>");

    document.write("<label>Average Purchase: </label><input type='text'"+
     "class='avgPurchase' id='"+this.donutShops[index][0]+" avgPurchase'"+
      "value='"+this.donutShops[index][3]+"'>");

    document.write("<label>Hours Open: </label><input type='text'"+
     "class='hours' id='"+this.donutShops[index][0]+" hours'"+
      "value='"+this.donutShops[index][4]+"'>");

    document.write("<div class='custPerDay'>Average Daily Customers: <span "+
     "id='"+this.donutShops[index][0]+" cust'>"
     +getRandom(this.donutShops[index][1], this.donutShops[index][2]
        +1)*this.donutShops[index][4]+"</span></div>");

    document.write("<div class='donutsPerDay'>Average Donuts Baked Daily: <span "+
     "id='"+this.donutShops[index][0]+" bake'>"
     +getRandom(+this.donutShops[index][1], this.donutShops[index][2])
     *this.donutShops[index][4]*Math.ceil(this.donutShops[index][3])+
     "</span></div>");

    document.write("</fieldset>");
  }
};
console.log(cust);

console.log(donutShops[2][4]);
console.log(document.getElementById("Tonallis Donuts &amp; Cream bake"));
