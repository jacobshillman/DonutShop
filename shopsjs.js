    //Donut Shops 2-D array declarations:
var donutShops = [5];
donutShops[0] = new Array(5);
donutShops[0][0] = "Blue Star Donuts";
donutShops[0][1] = 8;
donutShops[0][2] = 43;
donutShops[0][3] = 4.5;
donutShops[0][4] = 11;
donutShops[1] = new Array(5);
donutShops[1][0] = "Voodoo Doughnut";
donutShops[1][1] = 4;
donutShops[1][2] = 37;
donutShops[1][3] = 2;
donutShops[1][4] = 24;
donutShops[2] = new Array(5);
donutShops[2][0] = "Coco";
donutShops[2][1] = 9;
donutShops[2][2] = 23;
donutShops[2][3] = 6.33;
donutShops[2][4] = 11;
donutShops[3] = new Array(5);
donutShops[3][0] = "Tonallis Donuts & Cream";
donutShops[3][1] = 2;
donutShops[3][2] = 28;
donutShops[3][3] = 1.25;
donutShops[3][4] = 17;
donutShops[4] = new Array(5);
donutShops[4][0] = "Sesame Donuts";
donutShops[4][1] = 8;
donutShops[4][2] = 58;
donutShops[4][3] = 3.75;
donutShops[4][4] = 24;

var formElement = document.getElementById("shopsData");

function fieldsets (donutshop) {
  for (var index = 0; index < donutShops.length; index++){
    document.write("<fieldset id="+this.donutShops[index][0]+">");
    document.write("<legend><h4>"+this.donutShops[index][0]+"</h4></legend>");
    document.write("<label>Minimum Customers: </label><input type='text' class='minCust' id='"+this.donutShops[index][0]+"minCust' value='"+this.donutShops[index][1]+"''>");
    document.write("<label>Maximum Customers: </label><input type='text' class='maxCust' id='"+this.donutShops[index][0]+"maxCust' value='"+this.donutShops[index][2]+"'><br>");
    document.write("<label>Average Purchase: </label><input type='text' class='avgPurchase' id='"+this.donutShops[index][0]+"avgPurchase' value='"+this.donutShops[index][3]+"'>");
    document.write("<label>Hours Open: </label><input type='text' class='hours' id='"+this.donutShops[index][0]+"hours' value='"+this.donutShops[index][4]+"'>");
    document.write("</fieldset>");
  }
};

