/**
 * @author R.Maalouf
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('VM-Care.theme.phr')
      .directive('contentTop', contentTop);

  /** @ngInject */
  function contentTop($location, $state) {
    return {
      restrict: 'E',
      templateUrl: 'app/theme/phr/contentTop/contentTop.html',
      link: function($scope) {
        $scope.$watch(function () {
          $scope.activePageTitle = $state.current.title;
        });
      }
    };
  }

})();