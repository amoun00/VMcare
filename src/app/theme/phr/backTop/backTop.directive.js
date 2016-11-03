/**
 * @author R.Maalouf
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('VM-Care.theme.phr')
      .directive('backTop', backTop);

  /** @ngInject */
  function backTop() {
    return {
      restrict: 'E',
      templateUrl: 'app/theme/phr/backTop/backTop.html',
      controller: function () {
        $('#backTop').backTop({
          'position': 200,
          'speed': 100
        });
      }
    };
  }

})();