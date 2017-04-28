(function() {
  'use strict';

  angular.module('ngApp')
    .controller('gameDetailsController', gameDetailsController);

  function gameDetailsController($scope, gameService, $routeParams) {
    $scope.idx = $routeParams.id;
    $scope.game = gameService.gameList[$scope.idx];
    $scope.removeEl = removeEl;

    function removeEl(idx) {
      gameService.removeEl(idx);
    }
  }
})();