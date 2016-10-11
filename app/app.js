(function() {
  'use strict';

  angular.module('ngApp', [])
    .controller('mainController', mainController);

  function mainController($scope) {
    $scope.gameList = [
    	{
			id: '1',
			title: 'Tomb Raider',
			platform: 'ps3',
			completions: ['2014-2015', '2016'],
		  },
      {
      id: '2',
      title: 'Metal Gear Solid: 4',
      platform: 'ps3',
      completions: ['2013', '2016-xxxx'],
      },
	 ];
    $scope.formSubmit = formSubmit;
    $scope.addCompletion = addCompletion;
    $scope.removeEl = removeEl;
    $scope.gameTitle = "";
    $scope.gamePlatform = "";
    $scope.completionsList = [];

    function formSubmit() {
      $scope.gameList.push({
        title: $scope.gameTitle,
        platform: $scope.gamePlatform,
        completions: [$scope.completionsList]
        // done: false,
        // date: new Date()
      });
      console.log($scope.gameList);
      $scope.gameTitle = '';
    	$scope.gamePlatform = '';
    	$scope.gameCompletion = ''
    	$scope.completionsList = [];
    }
    function addCompletion() {
    	$scope.completionsList.push(
  			$scope.gameCompletion
  		);
    	$scope.gameCompletion = '';
    	console.log($scope.completionsList);
    }

    // function computeNeeded() {
    //   $scope.needed = $scope.startingEstimate * 10;
    // }

    function removeEl(idx) {
      $scope.gameList.splice(idx, 1);
    }

  }

})();