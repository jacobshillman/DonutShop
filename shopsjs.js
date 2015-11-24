/*Insert date:  */
    function date () {
    var dt = new Date();
    return (dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear();
    };

    window.onload = function () {
    var theDiv = document.getElementById("copy");
    var content = document.createTextNode(date());
    theDiv.appendChild(content);
    };

/*Global functions:  */

function getRandom (min, max) {
    return Math.floor(Math.random() * (max - min +1)+min);
  };

function hoursOpen (hours) {
  var hourIndex = new Array();
  for (var index = 0; index < hours; index++) {
    hourIndex[index] = hourIndex.push(index);
  }
return hourIndex;
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

/*Functions to generate hourly Shop info for table:  */
function hoursDisplay (shopID) {
  var hrDisp = "<tr id='highlight'><th>Each Hour Open:</th>";
    for (hrIndex = 0; hrIndex < shopID.indexHours.length; hrIndex++) {
      hrDisp +="<td>"+shopID.indexHours[hrIndex]+"</td>";
    }
  hrDisp += "</tr>"
  return hrDisp;  }
function custDisplay (shopID) {
  var cDisp = "<tr><th>Customers per Hour:</th>";
    for (custIndex = 0; custIndex < shopID.custHourly.length; custIndex++) {
      cDisp +="<td>"+shopID.custHourly[custIndex]+"</td>";
    }
  cDisp += "</tr>"
  return cDisp; }
function salesDisplay (shopID) {
  var sDist = "<tr><th>Sales per Hour:</th>";
    for (saleIndex = 0; saleIndex < shopID.bakeHourly.length; saleIndex++) {
      sDist +="<td>"+shopID.bakeHourly[saleIndex]+"</td>";
    }
  sDist += "</tr>"
  return sDist; }

/*Variables & function to show/hide fieldsets:  */
var startValue = 0;
var shown = "shop0";
function displayShop (id) {
  console.log(document.getElementById(shown));//.setAttribute("class", "hideDonuts");
  shown = "shop"+id;
  startValue = id;
  document.getElementById("shop"+id).setAttribute("class", "showDonuts");
};

/*Shop constructor:  */
function Shop (name,minCust,maxCust,avgPurchase,hours) {
  this.shopName = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPurchase = avgPurchase;
  this.hours = hours;
/*Generate array with each hour Shop is open:  */
  this.indexHours = hoursOpen(this.hours);
/*Random sample of average customers per hour:  */
  this.custHourly = hourlyCust(this.hours, this.minCust, this.maxCust);
/*Customers served daily:   */
  this.custDaily = dailyCust(this.custHourly);
/*Donuts to bake per hour:  */
  this.bakeHourly = hourlyBake(this.custHourly, this.avgPurchase);
/*Donuts to bake per day:  */
  this.bakeDaily = dailyBake(this.bakeHourly);
};

/*Init Shop instances:  */
var donutShop = [5];
donutShop[0] = new Shop("Blue Star Donuts", 8, 43, 4.5, 11);
donutShop[1] = new Shop("Voodoo Doughnut", 4, 37, 2, 24);
donutShop[2] = new Shop("Coco", 9, 23, 6.33, 11);
donutShop[3] = new Shop("Tonallis Donuts & Cream", 2, 28, 1.25, 17);
donutShop[4] = new Shop("Sesame Donuts", 8, 58, 3.75, 24);

var thisShop = new Shop();

/*
function newValues (delta) {
  var thisShop = donutShop[startValue];
  var increment = delta.getAttribute("name");
    thisShop[increment] = parseInt(delta.value);
  Array.prototype.splice.apply(thisShop);
  var newHours = hoursOpen(thisShop.hours);
    thisShop.indexHours = newHours;
  var newAvgPurch = thisShop.avgPurchase;
  var newCust = hourlyCust (thisShop.hours, thisShop.minCust, thisShop.maxCust);
    thisShop.custHourly = newCust;
  var sumCust = dailyCust(newCust);
    document.getElementById("shop"+parseInt(startValue)+"cust").innerHTML = sumCust;
    thisShop.custDaily = sumCust;
  var newSales = hourlyBake(newCust, newAvgPurch);
    thisShop.bakeHourly = newSales;
  var sumSales = dailyBake(newSales);
    document.getElementById("shop"+parseInt(startValue)+"bake").innerHTML = sumSales;
    thisShop.bakeDaily = sumSales;
};
*/

/*Write Shop content to page:  */
function fieldsets () {
/*Write radio buttons to show/hide donutShops:  */
  for (var index = 0; index < donutShop.length; index++){
    document.write("<label class='buttonLabel' htmlFor='"+index+"'><input type='radio' name='shopSelect' id='"
      +index+"' class='radioButton' onclick='displayShop("+this.id+")'>"
      +donutShop[index].shopName+"</label>");
  } /*Radio button for-loop closure.  */
/*Write fieldsets and populate donutShops data:   */
  for (var index = 0; index < donutShop.length; index++){
    document.write("<fieldset class='hideDonuts' id='"+this.donutShop[index].shopName+"'>");
    document.write("<legend><h4>"+this.donutShop[index].shopName+"</h4></legend>");
    document.write("<label>Minimum Customers: </label><input type='number'"+
     "class='minCust' id='"+index+"minCust'"+
      "value='"+this.donutShop[index].minCust+"''>");
    document.write("<label>Maximum Customers: </label><input type='number'"+
     "class='maxCust' id='"+index+"maxCust'"+
      "value='"+this.donutShop[index].maxCust+"'><br>");
    document.write("<label>Average Purchase: </label><input type='number'"+
     "class='avgPurchase' id='"+index+"avgPurchase'"+
      "value='"+this.donutShop[index].avgPurchase+"'>");
    document.write("<label>Hours Open: </label><input type='number'"+
     "class='hours' id='"+index+"hours'"+
      "value='"+this.donutShop[index].hours+"'><br>");
    document.write("<div class='custDaily'>Average Daily Customers: <span "+
     "id='"+index+"cust'>"
     +this.donutShop[index].custDaily+"</span></div>");
    document.write("<div class='donutsPerDay'>Average Donuts Baked Daily: <span "+
     "id='"+index+"bake'>"
     +this.donutShop[index].bakeDaily+
     "</span></div>");
    document.write("<table class='hourlyStats'>"
      +hoursDisplay(this.donutShop[index])
      +custDisplay(this.donutShop[index])
      +salesDisplay(this.donutShop[index])
      +"</table>");
    document.write("</fieldset>");
  } /*Fieldset constructor for-loop closure.  */
}; /*Fieldset function closure.   */
