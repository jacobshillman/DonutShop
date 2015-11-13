//Global functions:
function getRandom (min, max) {
    return Math.floor(Math.random() * (max - min +1)+min);
  };

function hourlyCust (hours, min, max) {
  var hourlyCustomers = new Array (hours);
  for (var index = 0; index < hours; index++) {
    hourlyCustomers[index] = getRandom(min, max);
  }
  return hourlyCustomers;
};

function dailyCust (cust) {
  var custDaily = 0;
    for (var index = 0; index < cust.length; index++) {
    custDaily += cust[index];
  }
  return custDaily;
};

function hourlyBake (hours, avgpurchase) {
  var bakedHourly = new Array(hours);
  for (var index = 0; index < hours.length; index++) {
    bakedHourly[index] = Math.ceil(avgpurchase * hours[index]);
  }
  return bakedHourly;
};

function dailyBake (bake) {
  var bakedDaily = 0;
    for (var index = 0; index < bake.length; index++) {
    bakedDaily += bake[index];
  }
  return bakedDaily;
};

//Shop constructor:
function Shop (name,minCust,maxCust,avgPurchase,hours,custDaily,avgCust,bakeHourly,bakeDaily) {
  this.shopName = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPurchase = avgPurchase;
  this.hours = hours;

    //Random sample of average customers per hour:
  this.avgCust = hourlyCust(this.hours, this.minCust, this.maxCust);
    console.log(this.shopName + ", Customers per hour: " + this.avgCust);

  this.custDaily = dailyCust (this.avgCust);

    //Donuts to bake per hour:
  this.bakeHourly = hourlyBake (this.avgCust, this.avgPurchase);
    console.log(this.shopName + ", Donuts to bake per hour: " + this.bakeHourly);

    //Donuts to bake per day:
  this.bakeDaily = dailyBake (this.bakeHourly);
    console.log(this.shopName + ", Donuts to bake per day: " + this.bakeDaily);
};

var donutShop = [5];
donutShop[0] = new Shop("Blue Star Donuts", 8, 43, 4.5, 11);
donutShop[1] = new Shop("Voodoo Doughnut", 4, 37, 2, 24);
donutShop[2] = new Shop("Coco", 9, 23, 6.33, 11);
donutShop[3] = new Shop("Tonallis Donuts & Cream", 2, 28, 1.25, 17);
donutShop[4] = new Shop("Sesame Donuts", 8, 58, 3.75, 24);

function fieldsets (donutshop) {
  for (var index = 0; index < donutShop.length; index++){
    document.write("<fieldset id='"+this.donutShop[index].shopName+"'>");

    document.write("<legend><h4>"+this.donutShop[index].shopName+"</h4></legend>");

    document.write("<label>Minimum Customers: </label><input type='text'"+
     "class='minCust' id='"+this.donutShop[index].shopName+" minCust'"+
      "value='"+this.donutShop[index].minCust+"''>");

    document.write("<label>Maximum Customers: </label><input type='text'"+
     "class='maxCust' id='"+this.donutShop[index].shopName+" maxCust'"+
      "value='"+this.donutShop[index].maxCust+"'><br>");

    document.write("<label>Average Purchase: </label><input type='text'"+
     "class='avgPurchase' id='"+this.donutShop[index].shopName+" avgPurchase'"+
      "value='"+this.donutShop[index].avgPurchase+"'>");

    document.write("<label>Hours Open: </label><input type='text'"+
     "class='hours' id='"+this.donutShop[index].shopName+" hours'"+
      "value='"+this.donutShop[index].hours+"'><br>");

    document.write("<div class='custDaily'>Average Daily Customers: <span "+
     "id='"+this.donutShop[index].shopName+" cust'>"
     +this.donutShop[index].custDaily+"</span></div>");

    document.write("<div class='donutsPerDay'>Average Donuts Baked Daily: <span "+
     "id='"+this.donutShop[index].shopName+" bake'>"
     +this.donutShop[index].bakeDaily+
     "</span></div>");
/*
    document.write("<div class='avgCust'>Hourly Customers: <span "+
     "id='"+this.donutShop[index].shopName+" cust'>"
     +this.donutShop[index].avgCust+"</span></div>");

    document.write("<div class='bakeHourly'>Donuts per Hour: <span "+
     "id='"+this.donutShop[index].shopName+" bake'>"
     +this.donutShop[index].bakeHourly+
     "</span></div>");
*/
    document.write("</fieldset>");
  }
};
