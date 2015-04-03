function math() {
    
    var paycheck = $("#paycheck").val();
    var church = $("#churchOffering").val() / 100;
    var housing = $("#housing").val() / 100;
    var food = $("#food").val() / 100;
    var transportation = $("#transportation").val() / 100;
    var savings = $("#savings").val() / 100;
    var miscellaneous = 1 - church - housing - food - transportation - savings;

    //alert("you submitted " + paycheck + " for your paycheck");

    $("#churchOfferingResult").text("Church: " + (paycheck * church));
    $("#housingResult").text("Housing: " + (paycheck * housing));
    $("#foodResult").text("Food: " + (paycheck * food));
    $("#transportationResult").text("Transportation: " + (paycheck * transportation));
    $("#savingsResult").text("Savings: " + (paycheck * savings));
    $("#miscellaneous").text("Miscellaneous: " + (paycheck * miscellaneous));
    
}