'use strict';

var IDLE = 1000;

angular.module('blink', [])

	.directive('blink', function($timeout) {
		return {
			restrict: 'E',
			transclude: true,
			scope: {},
			controller: function($scope, $element) {
				function showElement() {
					$element.css("display", "inline");
					$timeout(hideElement, IDLE);
				}
	 
				function hideElement() {
					$element.css("display", "none");
					$timeout(showElement, IDLE);
				}
				showElement();
			},
			template: '<span ng-transclude></span>',
			replace: true
		};
	});
