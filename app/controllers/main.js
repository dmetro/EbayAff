module.exports = function ($scope, BackendService, $state, menuService) {

    var data = {};
    data["providerId"] = 1;
    data["rotationId"] = 0;

    $scope.orders = {};
    $scope.rotetions = {};

    $scope.date;
    //function call
    // $scope.GetData();
    //BackendService.GetRotetions(1).then(function (response) {

    //    if (response != null) {
    //        if (response.data["Error"] != null) {

    //            $scope.rotetions = response.data.Data;
    //        }
    //        else {
    //            console.log("user Notok ")
    //        }
    //    }
    //});

    $scope.selectedItem = "0";

  

    //BackendService.getAllOrders(data).then(function (response) {

   

}