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

  /*Shop constructor:   */
function Shop (name,minCust,maxCust,avgPurchase,hours) {
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
};

  /*Init Shop instances:   */
var donutShop = [5];
donutShop[0] = new Shop("Blue Star Donuts", 8, 43, 4.5, 11);
donutShop[1] = new Shop("Voodoo Doughnut", 4, 37, 2, 24);
donutShop[2] = new Shop("Coco", 9, 23, 6.33, 11);
donutShop[3] = new Shop("Tonallis Donuts & Cream", 2, 28, 1.25, 17);
donutShop[4] = new Shop("Sesame Donuts", 8, 58, 3.75, 24);

  /*Write Shop content to page:   */
function fieldsets (donutshop) {
  for (var index = 0; index < donutShop.length; index++){

/*Create checkboxes to Show/Hide shop fieldset on checkbox click for each Shop:   */
    var form = document.getElementById("shopsData");
    var box = document.createElement("div");
      box.className="box";
    shopsData.appendChild(box);
    var check = document.createElement("input");
      check.type="checkbox";
      check.name=this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'');
      check.value=this.donutShop[index].shopName;
      check.form="shopsData";
      check.id=this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'')+"Select";
//      check.setAttribute("onclick", displayShop());
    box.appendChild(check);
        //Create labels for checkboxes for each Shop:
    var label = document.createElement("label");
      label.htmlFor=this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'')+"Select"
      label.id=this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'')+"Label";
      label.appendChild(document.createTextNode(this.donutShop[index].shopName));
    box.appendChild(label);
  } /*Checkbox for loop closure.  */

/*Populate shopsData table:   */
  for (var index = 0; index < donutShop.length; index++){

/*Create fieldset:   */
    var form = document.getElementById("shopsData");
      var fieldset = document.createElement("fieldset");
        fieldset.className="donuts";
        fieldset.id=this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'');
      form.appendChild(fieldset);

/*Create fieldset legend:   */
    var fieldsetLegend = document.createElement("legend");
    fieldset.appendChild(fieldsetLegend);
/*Create h4 element inside fieldset legend:   */
    var h4 = document.createElement("h4");
      fieldsetLegend.appendChild(h4);
        h4.appendChild(document.createTextNode(this.donutShop[index].shopName));

/*Create minimum customers per hour label:   */
    var minCustLabel = document.createElement("Label");
    fieldset.appendChild(minCustLabel);
      minCustLabel.appendChild(document.createTextNode("Minimum Customers: "));
/*Create minimum customers per hour textbox:   */
    var minCustText = document.createElement("input");
      minCustText.type = "text";
      minCustText.className = "minCust";
      minCustText.id = this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'')+"minCust";
      minCustText.value = this.donutShop[index].minCust;
    fieldset.appendChild(minCustText);

/*Create maximum customers per hour label:   */
    var maxCustLabel = document.createElement("label");
    fieldset.appendChild(maxCustLabel);
      maxCustLabel.appendChild(document.createTextNode("Maximum Customers: "));
/*Create minimum customers per hour textbox:   */
    var maxCustText = document.createElement("input");
      maxCustText.type = "text";
      maxCustText.className = "maxCust";
      maxCustText.id = this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'')+"maxCust";
      maxCustText.value = this.donutShop[index].maxCust;
    fieldset.appendChild(maxCustText);

/*Line break for formatting:   */
    var lineBreak = document.createElement("br");
      fieldset.appendChild(lineBreak);

/*Create average purchase per customer label:   */
    var avgPurchLabel = document.createElement("label");
    fieldset.appendChild(avgPurchLabel);
      avgPurchLabel.appendChild(document.createTextNode("Average Purchase: "));
/*Create average purchase per customer textbox:   */
    var avgPurchText = document.createElement("input");
      avgPurchText.type = "text";
      avgPurchText.className = "avgPurchase";
      avgPurchText.id = this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'')+"avgPurchase";
      avgPurchText.value = this.donutShop[index].avgPurchase;
    fieldset.appendChild(avgPurchText);
    
/*Create hours open per day label:   */
    var hoursLabel = document.createElement("label");
    fieldset.appendChild(hoursLabel);
      hoursLabel.appendChild(document.createTextNode("Hours Open: "));
/*Create hours open per day textbox:   */
    var hoursText = document.createElement("input");
      hoursText.type = "text";
      hoursText.className = "hours";
      hoursText.id = this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'')+"hours";
      hoursText.value = this.donutShop[index].hours;
    fieldset.appendChild(hoursText);
    
/*Create average customers daily label:   */
    var custDailyLabel = document.createElement("div");
      custDailyLabel.className = "custDaily";
    fieldset.appendChild(custDailyLabel);
      custDailyLabel.appendChild(document.createTextNode("Average Daily Customers: "));
/*Create average customers daily span:   */
    var custDailySpan = document.createElement("span");
      custDailySpan.id = this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'')+"cust";
    custDailyLabel.appendChild(custDailySpan);
      custDailySpan.appendChild(document.createTextNode(this.donutShop[index].custDaily));
    
/*Create average donuts sold daily label:   */
    var donutstDailyLabel = document.createElement("div");
      donutstDailyLabel.className = "custDaily";
    fieldset.appendChild(donutstDailyLabel);
      donutstDailyLabel.appendChild(document.createTextNode("Average Donuts Baked Daily: "));
/*Create average customers daily span:   */
    var donutsDailySpan = document.createElement("span");
      donutsDailySpan.id = this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'')+"bake";
    donutstDailyLabel.appendChild(donutsDailySpan);
      donutsDailySpan.appendChild(document.createTextNode(this.donutShop[index].bakeDaily))
    
/*Create button to show hourly statistics on:hover:   */
    var hoverTable = document.createElement("button");
      hoverTable.type = "button";
      hoverTable.className = "tableButton";
      hoverTable.id = "shop"+this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'');
      hoverTable.appendChild(document.createTextNode("Hourly Statistics"));
    fieldset.appendChild(hoverTable);
      
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
      for (cellIndex = 0; cellIndex < this.donutShop[index].indexHours.length; cellIndex++) {
        var row1Data = row1.insertCell(-1);
        row1Data.innerHTML= this.donutShop[index].indexHours[cellIndex];};
/*Create hourly statistics table second row:   */
    var row2 = statsHourly.insertRow(1);
/*Create hourly statistics table second row header cell:   */
    var row2Head = document.createElement("th");
      row2.appendChild(row2Head);
      row2Head.appendChild(document.createTextNode("Customers per Hour:"));
/*Create hourly statistics table second row data cells:   */
    var row2Data;
      for (cellIndex = 0; cellIndex < this.donutShop[index].custHourly.length; cellIndex++) {
        var row2Data = row2.insertCell(-1);
        row2Data.innerHTML= this.donutShop[index].custHourly[cellIndex];};
/*Create hourly statistics table third row:   */
    var row3 = statsHourly.insertRow(2);
/*Create hourly statistics table third row header cell:   */
    var row3Head = document.createElement("th");
      row3.appendChild(row3Head);
      row3Head.appendChild(document.createTextNode("Sales per Hour:"));
/*Create hourly statistics table second row data cells:   */
    var row3Data;
      for (cellIndex = 0; cellIndex < this.donutShop[index].bakeHourly.length; cellIndex++) {
        var row3Data = row3.insertCell(-1);
        row3Data.innerHTML= this.donutShop[index].bakeHourly[cellIndex];};

    fieldset.appendChild(statsHourly);


  } /*shopsData table for loop closure.  */

};  /*Fieldset function closure.  */



/*
  var fieldsetTest=false;
function displayShop(){
    if(fieldsetTest){
     document.getElementById("BlueStarDonuts").id="BlueStarDonutsChecked";
      fieldsetTest=false;
    }else{
      document.getElementById("BlueStarDonutsChecked").id="BlueStarDonuts";
      fieldsetTest=true;
    }
};
*/

/*
    document.write("<fieldset class='donuts' id='"+this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'')
      +"'>");

    document.write("<legend><h4>"+this.donutShop[index].shopName+"</h4></legend>");

    document.write("<label>Minimum Customers: </label><input type='text'"+
     "class='minCust' id='"+this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'')
     +"minCust'"+"value='"+this.donutShop[index].minCust+"''>");

    document.write("<label>Maximum Customers: </label><input type='text'"+
     "class='maxCust' id='"+this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'')
     +"maxCust'"+"value='"+this.donutShop[index].maxCust+"'><br>");

    document.write("<label>Average Purchase: </label><input type='text'"+
     "class='avgPurchase' id='"+this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'')
     +"avgPurchase'"+"value='"+this.donutShop[index].avgPurchase+"'>");

    document.write("<label>Hours Open: </label><input type='text'"+
     "class='hours' id='"+this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'')
     +"hours'"+"value='"+this.donutShop[index].hours+"'><br>");

    document.write("<div class='custDaily'>Average Daily Customers: <span "+
     "id='"+this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'')+"cust'>"
     +this.donutShop[index].custDaily+"</span></div>");

    document.write("<span class='donutsPerDay'>Average Donuts Baked Daily: <span "+
     "id='"+this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'')+"bake'>"
     +this.donutShop[index].bakeDaily+
     "</span></span>");

    document.write("<span class='hoverTable'><button id='shop"+
      this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'')
      +"' type='button'>Hourly Statistics</button>");

    document.write("<table class='hourlyStats'>"
      +hoursDisplay(this.donutShop[index])
      +custDisplay(this.donutShop[index])
      +salesDisplay(this.donutShop[index])
      +"</table>");

    document.write("</fieldset>");

*/

