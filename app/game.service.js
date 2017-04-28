(function () {
	'use strict';

	angular.module('ngApp')
		.service('gameService', function () {
			var that = this;
			this.gameList = [
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
			this.removeEl = function (idx) {
				alert(idx);
	      that.gameList.splice(idx, 1);
	    }
		});
})();