/**
 * @author R.Maalouf
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('VM-Care.pages.schedule')
      .directive('schCalendar', schCalendar);

  /** @ngInject */
  function schCalendar() {
    return {
      restrict: 'E',
      controller: 'schCalendarCtrl',
      templateUrl: 'app/pages/schedule/schedulectrl/schCalendar.html'
    };
  }
})();