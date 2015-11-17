    //Insert date:
    function date () {
    var dt = new Date();
    return (dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear();
    };

    window.onload = function () {
    var theDiv = document.getElementById("copy");
    var content = document.createTextNode(date());
    theDiv.appendChild(content);
    };

  //Global functions:
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

  //Shop constructor:
function Shop (name,minCust,maxCust,avgPurchase,hours) {
  this.shopName = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPurchase = avgPurchase;
  this.hours = hours;

    //Generate array with each hour Shop is open:
  this.indexHours = hoursOpen(this.hours);

    //Random sample of average customers per hour:
  this.custHourly = hourlyCust(this.hours, this.minCust, this.maxCust);

  this.custDaily = dailyCust(this.custHourly);

    //Donuts to bake per hour:
  this.bakeHourly = hourlyBake(this.custHourly, this.avgPurchase);

    //Donuts to bake per day:
  this.bakeDaily = dailyBake(this.bakeHourly);
};

  //Init Shop instances:
var donutShop = [5];
donutShop[0] = new Shop("Blue Star Donuts", 8, 43, 4.5, 11);
donutShop[1] = new Shop("Voodoo Doughnut", 4, 37, 2, 24);
donutShop[2] = new Shop("Coco", 9, 23, 6.33, 11);
donutShop[3] = new Shop("Tonallis Donuts & Cream", 2, 28, 1.25, 17);
donutShop[4] = new Shop("Sesame Donuts", 8, 58, 3.75, 24);

  //Write Shop content to page:
function fieldsets (donutshop) {
  for (var index = 0; index < donutShop.length; index++){

      //Checkboxes for each Shop:
    var form = document.getElementById("shopsData");
    var box = document.createElement("div");
      box.className="box";
    shopsData.appendChild(box);
    var check = document.createElement("input");
      check.type="checkbox";
      check.name=this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'');
      check.value=this.donutShop[index].shopName;
      check.form="shopsData";
      check.id=this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'')+"select";
    var label = document.createElement("label");
      label.htmlFor=this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'')+"select"
      label.id=this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'')+"Label";
      label.appendChild(document.createTextNode(this.donutShop[index].shopName));
    box.appendChild(check);
    box.appendChild(label);
  };

    //Populate shops data: 
  for (var index = 0; index < donutShop.length; index++){

    document.write("<fieldset id='"+this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'')
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

          //Functions to generate hourly Shop info for table:
        function hoursDisplay () {
          var hrDisp = "<tr id='highlight'><th>Each Hour Open:</th>";
            for (hrIndex = 0; hrIndex < this.donutShop[index].indexHours.length; hrIndex++) {
              hrDisp +="<td>"+this.donutShop[index].indexHours[hrIndex]+"</td>";
            }
          hrDisp += "</tr>"
          return hrDisp;  }
        function custDisplay () {
          var cDisp = "<tr><th>Customers per Hour:</th>";
            for (custIndex = 0; custIndex < this.donutShop[index].custHourly.length; custIndex++) {
              cDisp +="<td>"+this.donutShop[index].custHourly[custIndex]+"</td>";
            }
          cDisp += "</tr>"
          return cDisp; }
        function salesDisplay () {
          var sDist = "<tr><th>Sales per Hour:</th>";
            for (saleIndex = 0; saleIndex < this.donutShop[index].bakeHourly.length; saleIndex++) {
              sDist +="<td>"+this.donutShop[index].bakeHourly[saleIndex]+"</td>";
            }
          sDist += "</tr>"
          return sDist; }

    document.write("</fieldset>");

}
};
