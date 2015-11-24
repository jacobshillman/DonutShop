  /*Global functions:   */
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

var startValue = 0;
var shown = "shop0";

function displayShop (id) {
  document.getElementById(shown).setAttribute("class", "hideDonuts");
  shown = "shop"+id;
  startValue = id;
  document.getElementById("shop"+id).setAttribute("class", "showDonuts");
};

    /*Insert date:  */
  function date () {
  var dt = new Date();
  return (dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear();
  };
  var dateDiv = document.getElementById("copy");
  var content = document.createTextNode(date());
  dateDiv.appendChild(content);

  /*Shop constructor:   */
function Shop (name, minCust, maxCust, avgPurchase, hours) {
  this.shopName = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPurchase = avgPurchase;
  this.hours = hours;

/*Generate array with each hour Shop is open:   */
  this.indexHours = hoursOpen(this.hours);

/*Random sample of average customers per hour:   */
  this.custHourly = hourlyCust(this.hours, this.minCust, this.maxCust);

/*Customers per day:   */
  this.custDaily = dailyCust(this.custHourly);

/*Donuts to bake per hour:   */
  this.bakeHourly = hourlyBake(this.custHourly, this.avgPurchase);

/*Donuts to bake per day:   */
  this.bakeDaily = dailyBake(this.bakeHourly);

/*Generat number inputs for display:  */
};

  /*Init Shop instances:   */
var donutShop = [5];
donutShop[0] = new Shop("Blue Star Donuts", 8, 43, 4.5, 11);
donutShop[1] = new Shop("Voodoo Doughnut", 4, 37, 2, 24);
donutShop[2] = new Shop("Coco", 9, 23, 6.33, 11);
donutShop[3] = new Shop("Tonallis Donuts & Cream", 2, 28, 1.25, 17);
donutShop[4] = new Shop("Sesame Donuts", 8, 58, 3.75, 24);

var thisShop = new Shop();

function newValues (delta) {
  thisShop = donutShop[startValue];
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
  hiddenTable(thisShop);
};

/*Write radio buttons to select which shop to view:   */
function radioSelect () {
  for (var index = 0; index < donutShop.length; index++){
/*Create labels for radioboxes for each Shop:   */
    var label = document.createElement("label");
      label.htmlFor = index;
      label.className = "radioLabel"
    document.getElementById("shopsData").appendChild(label);
/*Create radioboxes to Show/Hide shop fieldset on radiobox click for each Shop:   */
    var radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "showFields";
      radio.value = "shop"+index;
      radio.form = "shopsData";
      radio.id = index;
      radio.addEventListener("click", function() {
        displayShop(this.id);
      });
    label.appendChild(radio);
      label.appendChild(document.createTextNode(this.donutShop[index].shopName));
  } /*for loop closure.   */
}; /*radioSelect function closure.  */

radioSelect();

  /*Write Shop content to page:   */
function fieldsets () {
  for (var index = 0; index < donutShop.length; index++){
/*Create fieldset:   */
      var fieldset = document.createElement("fieldset");
        fieldset.className="hideDonuts";
        fieldset.id = "shop"+index;
      document.getElementById("shopsData").appendChild(fieldset);
/*Create fieldset legend:   */
    var fieldsetLegend = document.createElement("legend");
    fieldset.appendChild(fieldsetLegend);
/*Create h4 element inside fieldset legend:   */
    var h4 = document.createElement("h4");
      fieldsetLegend.appendChild(h4);
        h4.appendChild(document.createTextNode(this.donutShop[index].shopName));

/*Create minimum customers per hour label:   */
    var minCustLabel = document.createElement("Label");
    document.getElementById("shop"+index).appendChild(minCustLabel);
      minCustLabel.appendChild(document.createTextNode("Minimum Customers: "));
/*Create minimum customers per hour textbox:   */
    var minCustText = document.createElement("input");
      minCustText.type = "number";
      minCustText.className = "minCust";
      minCustText.id = "shop"+index+"minCust";
      minCustText.name = "minCust"
      minCustText.value = this.donutShop[index].minCust;
      minCustText.addEventListener("change", function () {
        newValues(this);
      });
    fieldset.appendChild(minCustText);

/*Create maximum customers per hour label:   */
    var maxCustLabel = document.createElement("label");
    document.getElementById("shop"+index).appendChild(maxCustLabel);
      maxCustLabel.appendChild(document.createTextNode("Maximum Customers: "));
/*Create minimum customers per hour textbox:   */
    var maxCustText = document.createElement("input");
      maxCustText.type = "number";
      maxCustText.className = "maxCust";
      maxCustText.id = "shop"+index+"maxCust";
      maxCustText.name = "maxCust"
      maxCustText.value = this.donutShop[index].maxCust;
      maxCustText.addEventListener("change", function () {
        newValues(this);
      });
    fieldset.appendChild(maxCustText);

/*Line break for formatting:   */
    var lineBreak = document.createElement("br");
      document.getElementById("shop"+index).appendChild(lineBreak);

/*Create average purchase per customer label:   */
    var avgPurchLabel = document.createElement("label");
    document.getElementById("shop"+index).appendChild(avgPurchLabel);
      avgPurchLabel.appendChild(document.createTextNode("Average Purchase: "));
/*Create average purchase per customer textbox:   */
    var avgPurchText = document.createElement("input");
      avgPurchText.type = "number";
      avgPurchText.className = "avgPurchase";
      avgPurchText.id = "shop"+index+"avgPurchase";
      avgPurchText.name = "avgPurchase"
      avgPurchText.value = this.donutShop[index].avgPurchase;
      avgPurchText.addEventListener("change", function () {
        newValues(this);
      });
    fieldset.appendChild(avgPurchText);

/*Create hours open per day label:   */
    var hoursLabel = document.createElement("label");
    document.getElementById("shop"+index).appendChild(hoursLabel);
      hoursLabel.appendChild(document.createTextNode("Hours Open: "));
/*Create hours open per day textbox:   */
    var hoursText = document.createElement("input");
      hoursText.type = "number";
      hoursText.className = "hours";
      hoursText.id = "shop"+index+"hours";
      hoursText.name = "hours"
      hoursText.value = this.donutShop[index].hours;
      hoursText.addEventListener("change", function () {
        newValues(this);
      });
    fieldset.appendChild(hoursText);

/*Create average customers daily label:   */
    var custDailyLabel = document.createElement("div");
      custDailyLabel.className = "custDaily";
    fieldset.appendChild(custDailyLabel);
      custDailyLabel.appendChild(document.createTextNode("Average Daily Customers: "));
/*Create average customers daily span:   */
    var custDailySpan = document.createElement("span");
      custDailySpan.id = "shop"+index+"cust";
    custDailyLabel.appendChild(custDailySpan);
      custDailySpan.appendChild(document.createTextNode(this.donutShop[index].custDaily));

/*Create average donuts sold daily label:   */
    var donutstDailyLabel = document.createElement("div");
      donutstDailyLabel.className = "custDaily";
    fieldset.appendChild(donutstDailyLabel);
      donutstDailyLabel.appendChild(document.createTextNode("Average Donuts Baked Daily: "));
/*Create average donuts sold daily span:   */
    var donutsDailySpan = document.createElement("span");
      donutsDailySpan.id = "shop"+index+"bake";
    donutstDailyLabel.appendChild(donutsDailySpan);
      donutsDailySpan.appendChild(document.createTextNode(this.donutShop[index].bakeDaily))

/*Create span for :hover event:   */
    var tableHover = document.createElement("span");
      tableHover.className = "hoverTable";
      tableHover.id = index+"table";
    fieldset.appendChild(tableHover);
/*Create button to show hourly statistics on:hover:   */
    var tableButton = document.createElement("button");
      tableButton.type = "button";
      tableButton.className = "tableButton";
      tableButton.id = "show"+"shop"+index;
      tableButton.addEventListener("click", function () {
        hiddenTable(donutShop);
      });
      tableButton.appendChild(document.createTextNode("Hourly Statistics"));
    tableHover.appendChild(tableButton);
  } /*for loop closure.   */
}; /*fieldsets function closure.  */

fieldsets()

function hiddenTable (theShop) {
  for (var index = 0; index < donutShop.length; index++){
  /*Create hourly statistics table:   */
      var statsHourly = document.createElement("table");
        statsHourly.className = "hourlyStats";
  /*Create hourly statistics table first row:   */
      var row1 = statsHourly.insertRow(0);
        row1.id = "highlight";
  /*Create hourly statistics table first row header cell:   */
      var row1Head = document.createElement("th");
        row1.appendChild(row1Head);
        row1Head.appendChild(document.createTextNode("Each Hour Open:"));
  /*Create hourly statistics table first row data cells:   */
        for (cellIndex = 0; cellIndex < theShop[index].indexHours.length; cellIndex++) {
          var row1Data = row1.insertCell(-1);
          row1Data.innerHTML = theShop[index].indexHours[cellIndex];};
  /*Create hourly statistics table second row:   */
      var row2 = statsHourly.insertRow(1);
  /*Create hourly statistics table second row header cell:   */
      var row2Head = document.createElement("th");
        row2.appendChild(row2Head);
        row2Head.appendChild(document.createTextNode("Customers per Hour:"));
  /*Create hourly statistics table second row data cells:   */
      var row2Data;
        for (cellIndex = 0; cellIndex < theShop[index].custHourly.length; cellIndex++) {
          var row2Data = row2.insertCell(-1);
          row2Data.innerHTML = theShop[index].custHourly[cellIndex];};
  /*Create hourly statistics table third row:   */
      var row3 = statsHourly.insertRow(2);
  /*Create hourly statistics table third row header cell:   */
      var row3Head = document.createElement("th");
        row3.appendChild(row3Head);
        row3Head.appendChild(document.createTextNode("Sales per Hour:"));
  /*Create hourly statistics table second row data cells:   */
      var row3Data;
        for (cellIndex = 0; cellIndex < theShop[index].bakeHourly.length; cellIndex++) {
          var row3Data = row3.insertCell(-1);
          row3Data.innerHTML = theShop[index].bakeHourly[cellIndex];};
      document.getElementById("shop"+index).appendChild(statsHourly);
  } /*for loop closure.   */
}; /*hiddenTable function closure.  */

