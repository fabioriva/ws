angular.module('popover', [])

	.directive('popover', function(){
		return {
			restrict: 'A',
			link: function(scope, element, attrs){
				
				var options = {
					content: $(element).children().html(),
					html: true,
					placement: 'top',
					//title: '<strong>' + attrs.title + '</strong>',
					trigger: 'click hover'
				};
				$(element).popover(options);
			}
		}
	});