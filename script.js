angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchActivity   = '';     // set the default search/filter term
  
  // create the list of Activities 
  $scope.activities = [
    { name: 'Dog Day', activity: 'Outdoor', season:'spring',rating: 10 },
    { name: 'Portland Vegan Beer & Food Festival', activity: 'Food & Beverage', season:'summer', rating: 4 },
    { name: 'Craft Fest', activity: 'Kid Friendly', season: 'winter',rating: 7 },
    { name: 'Pancake Day', activity: 'Food & Beverage', season: 'fall', rating: 6 }
  ];
  
});