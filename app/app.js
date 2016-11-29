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
   $scope.gamePlatformsOptions = ['please choose a platform', 'psx', 'ps2', 'Add new platform'];
    // $scope.formSubmit = formSubmit;
    $scope.addCompletion = addCompletion;
    $scope.removeEl = removeEl;
    $scope.addNewPlatform = addNewPlatform;
    $scope.gameTitle = '';
    $scope.gamePlatform = 'psx';
    $scope.completionsList = [];

    $scope.validMessage = {
      validRequired: 'Please fill required field'
    };

    $scope.formSubmit = function () {
      if(!$scope.gameForm.$invalid) {
        alert('Great! Game has been added!');
        $scope.reset(gameForm);
      } else {
        return
      }

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

    //rest form
    $scope.reset = function(thisForm) {
      console.log('forms');
      console.log(thisForm);
      console.log(gameForm);
        $scope.gameForm.$setPristine();
        $scope.gameForm.$setUntouched();
    }

    function addCompletion() {
    	$scope.completionsList.push($scope.gameCompletion);
    	$scope.gameCompletion = '';
    	console.log($scope.completionsList);
    }

    function removeEl(arrayName, idx) {
      arrayName.splice(idx, 1);
    }
    function addNewPlatform () {
      $scope.gamePlatformsOptions.push($scope.newPlatform);
      $scope.gamePlatform = $scope.newPlatform;
    }
  }
})();