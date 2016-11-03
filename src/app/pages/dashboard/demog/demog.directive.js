/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('demog', demog);

  /** @ngInject */
  function demog() {
    return {
      restrict: 'E',
      controller: 'demogCtrl',
      templateUrl: 'app/pages/dashboard/demog/demog.html'
    };
  }
})();