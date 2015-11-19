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
      //Show/Hide shop fieldset on checkbox click:

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

//     check.setAttribute("onclick", displayShop());

    var label = document.createElement("label");
      label.htmlFor=this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'')+"Select"
      label.id=this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'')+"Label";
      label.appendChild(document.createTextNode(this.donutShop[index].shopName));
    box.appendChild(check);
    box.appendChild(label);
  };

    //Populate shops data:
  for (var index = 0; index < donutShop.length; index++){
      //Create fieldsets and child elements:
    var form = document.getElementById("shopsData");
      var fieldset = document.createElement("fieldset");
        fieldset.className="donuts";
        fieldset.id=this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'');
      var fieldsetLegend = document.createElement("legend");
      var h4 = document.createElement("h4");
      var minCustLabel = document.createElement("Label");
      var minCustText = document.createElement("input");
        minCustText.type = "text";
        minCustText.className = "minCust";
        minCustText.id = this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'')
         +"minCust";
        minCustText.value = this.donutShop[index].minCust;
      var maxCustLabel = document.createElement("label");
      var maxCustText = document.createElement("input");
        maxCustText.type = "text";
        maxCustText.className = "maxCust";
        maxCustText.id = this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'')
         +"maxCust";
        maxCustText.value = this.donutShop[index].maxCust;
      var lineBreak = document.createElement("br");
      var avgPurchLabel = document.createElement("label");
      var avgPurchText = document.createElement("input");
        avgPurchText.type = "text";
        avgPurchText.className = "avgPurchase";
        avgPurchText.id = this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'')
         +"avgPurchase";
        avgPurchText.value = this.donutShop[index].avgPurchase;
      var hoursLabel = document.createElement("label");
      var hoursText = document.createElement("input");
        hoursText.type = "text";
        hoursText.className = "hours";
        hoursText.id = this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'')
         +"hours";
        hoursText.value = this.donutShop[index].hours;
      var custDailyLabel = document.createElement("div");
        custDailyLabel.className = "custDaily";
      var custDailySpan = document.createElement("span");
        custDailySpan.id = this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'')
        +"cust";
      var donutstDailyLabel = document.createElement("div");
        donutstDailyLabel.className = "custDaily";
      var donutsDailySpan = document.createElement("span");
        donutsDailySpan.id = this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'')
        +"bake";
      var hoverTable = document.createElement("span");
        hoverTable.className = "hoverTable";
      var hoverTableButton = document.createElement("button");
        hoverTableButton.type = "button";
        hoverTableButton.id = "shop"
        +this.donutShop[index].shopName.replace(/[^a-zA-Z0-9]/g,'');
      var statsHourly = document.createElement("table");
        statsHourly.className = "hourlyStats";
        var trow1 = document.createElement("tr");
          trow1.id = "highlight";
        var col1Head = document.createElement("th");
//        var col1Data = hoursDisplay();
        var trow2 = document.createElement("tr");
        var col2Head = document.createElement("th");
//        var col2Data = custDisplay();
        var trow3 = document.createElement("tr");
        var col3Head = document.createElement("th");
        var col3Data = salesDisplay();



          //Functions to generate hourly Shop info for hidden table:
/*        function hoursDisplay () {
          for (hrIndex = 0; hrIndex <
          this.donutShop[index].indexHours.length; hrIndex++) {
          var hrDisp = document.createElement("td");
            td.appendChild(document.createTextNode(this.donutShop[index].custHourly[hrIndex]));
            hrDisp += document.createElement("td");
              td.appendChild(document.createTextNode(this.donutShop[index].custHourly[hrIndex]));
            }
          return hrDisp;  }

        function custDisplay () {
          var cDisp = document.createElement("td");
          for (custIndex = 0; custIndex <
          this.donutShop[index].custHourly.length; custIndex++) {
            cDisp += document.createElement("td");
              td.appendChild(document.createTextNode(this.donutShop[index].custHourly[custIndex]));
            }
          return cDisp; }
*/
        function salesDisplay () {
            for (saleIndex = 0; saleIndex < this.donutShop[index].bakeHourly.length; saleIndex++) {
          var sDisp = insertCell(document.createTextNode(this.donutShop[index].custHourly[saleIndex]));
            sDisp += insertCell(document.createTextNode(this.donutShop[index].custHourly[saleIndex]));
            return sDisp;}
           }

      //Instantiate elements created:
    form.appendChild(fieldset);
    fieldset.appendChild(fieldsetLegend);
    fieldsetLegend.appendChild(h4);
      h4.appendChild(document.createTextNode(this.donutShop[index].shopName));
    fieldset.appendChild(minCustLabel);
      minCustLabel.appendChild(document.createTextNode("Minimum Customers: "));
    fieldset.appendChild(minCustText);
    fieldset.appendChild(maxCustLabel);
      maxCustLabel.appendChild(document.createTextNode("Maximum Customers: "));
    fieldset.appendChild(maxCustText);
    fieldset.appendChild(lineBreak);
    fieldset.appendChild(avgPurchLabel);
      avgPurchLabel.appendChild(document.createTextNode("Average Purchase: "));
    fieldset.appendChild(avgPurchText);
    fieldset.appendChild(hoursLabel);
      hoursLabel.appendChild(document.createTextNode("Hours Open: "));
    fieldset.appendChild(hoursText);
    fieldset.appendChild(custDailyLabel);
      custDailyLabel.appendChild(document.createTextNode("Average Daily Customers: "));
      custDailyLabel.appendChild(custDailySpan);
      custDailySpan.appendChild(document.createTextNode(this.donutShop[index].custDaily));
    fieldset.appendChild(donutstDailyLabel);
      donutstDailyLabel.appendChild(document.createTextNode("Average Donuts Baked Daily: "));
      donutstDailyLabel.appendChild(donutsDailySpan);
      donutsDailySpan.appendChild(document.createTextNode(this.donutShop[index].bakeDaily))
    fieldset.appendChild(hoverTable);
      hoverTable.appendChild(hoverTableButton);
      hoverTableButton.appendChild(document.createTextNode("Hourly Statistics"));
    fieldset.appendChild(hourlyStats);
      hourlyStats.appendChild(trow1);
        trow1.appendChild(col1Head);
          col1Head.appendChild(document.createTextNode("Each Hour Open:"));
        trow1.appendChild(col1Data());
      hourlyStats.appendChild(trow2);
        trow2.appendChild(col2Head);
          col2Head.appendChild(document.createTextNode("Customers per Hour:"));
        trow2.appendChild(col2Data);
      hourlyStats.appendChild(trow3);
        trow3.appendChild(col3Head);
          col3Head.appendChild(document.createTextNode("Sales per Hour:"));
        trow3.appendChild(col3Data);


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

}
};

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

