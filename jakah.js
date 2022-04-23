var goldRate = 52586;
var needForJakah = eval(goldRate * 7.5);

function PayableJakah() {
    
    var goldVal = Math.round(document.getElementById("gold").value);
    var silverVal = Math.round(document.getElementById("silver").value);
    var creaditVal = Math.round(document.getElementById("creadit").value);
    var bankVal = Math.round(document.getElementById("bankBalance").value);
    var fandVal = Math.round(document.getElementById("fand").value);
    var remitenceVal = Math.round(document.getElementById("remitence").value);
    var insuranceVal = Math.round(document.getElementById("insurance").value);
    var givingLoanVal = Math.round(document.getElementById("payloan").value);
    var forSecurityVal = Math.round(document.getElementById("forsecurity").value);
    var buyFsaleVal = Math.round(document.getElementById("forsale").value);
    var factMetarialsVal = Math.round(document.getElementById("metarials").value);
    var shareMarketVal = Math.round(document.getElementById("sharemarket").value);

    var assets = eval(goldVal+silverVal+creaditVal+bankVal+fandVal+remitenceVal+insuranceVal+givingLoanVal+forSecurityVal+buyFsaleVal+factMetarialsVal+shareMarketVal);
    
    var bankDueVal = Math.round(document.getElementById("loan").value);
    var rentVal = Math.round(document.getElementById("rent").value);
    var salaryVal = Math.round(document.getElementById("salery").value);
    var buyingDueVal = Math.round(document.getElementById("due").value);

    var totalDueVal = (bankDueVal + rentVal + salaryVal + buyingDueVal);

    var finalAssetVal = eval(assets - totalDueVal);

    var paybleJakahVal = Math.round(finalAssetVal / 40);

    if(finalAssetVal > needForJakah){
        document.getElementById("totalassets").value = "BDT." + " " + finalAssetVal + " " + "Tk";
        document.getElementById("jakahpayable").value = "BDT." + " " + paybleJakahVal + " " + "Tk";
    }else{
        alert("Your Total Value Is " + finalAssetVal + "Tk You Are Not Able To Pay Jakah")
    }
};