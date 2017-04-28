(function() {
  'use strict';

  angular.module('ngApp')
    .controller('mainController', mainController);

  function mainController($scope, gameService, $location) {
    console.log(gameService)
   $scope.gamePlatformsOptions = ['please choose a platform', 'psx', 'ps2', 'Add new platform'];
    $scope.formSubmit = formSubmit;
    $scope.showGameDetails = showGameDetails;
    $scope.gameList = gameService.gameList;
    $scope.addCompletion = addCompletion;
    $scope.removeEl = removeEl;
    $scope.addNewPlatform = addNewPlatform;
    $scope.gameTitle = '';
    $scope.gamePlatform = 'psx';
    $scope.completionsList = [];

    $scope.validMessage = {
      validRequired: 'Please fill required field'
    };

    function formSubmit () {
      if(!$scope.gameForm.$invalid) {
        alert('Great! Game has been added!');
        $scope.reset(gameForm);
      } else {
        alert('Error!');
        return
      }

      gameService.gameList.push({
        title: $scope.gameTitle,
        platform: $scope.gamePlatform,
        completions: $scope.completionsList
      });

      console.log(gameService.gameList);
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

    function addCompletion(e) {
      e.preventDefault();
    	$scope.completionsList.push($scope.gameCompletion);
    	$scope.gameCompletion = '';
    }

    function removeEl(idx) {
      gameService.removeEl(idx);
    }

    function addNewPlatform () {
      $scope.gamePlatformsOptions.push($scope.newPlatform);
      $scope.gamePlatform = $scope.newPlatform;
    }

    function showGameDetails () {
      console.log($location);
    }
  }
})();