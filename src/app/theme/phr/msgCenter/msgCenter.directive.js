/**
 * @author R.Maalouf
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('VM-Care.theme.phr')
      .directive('msgCenter', msgCenter);

  /** @ngInject */
  function msgCenter() {
    return {
      restrict: 'E',
      templateUrl: 'app/theme/phr/msgCenter/msgCenter.html',
      controller: 'MsgCenterCtrl'
    };
  }

})();