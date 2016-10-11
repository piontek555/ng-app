(function() {
  'use strict';

  angular.module('ngApp', [])
    .controller('mainController', mainController);

  function mainController($scope) {
    $scope.gameList = [
    	{
			title: 'Tomb Raider',
			platform: 'ps3',
			completions: ['2014-2015', '2016'],
		  },
      {
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
        completions: $scope.completionsList
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

    function removeEl(arrayName, idx) {
      arrayName.splice(idx, 1);
    }
  }
})();