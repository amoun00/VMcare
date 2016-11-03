/**
 * @author R.Maalouf
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('VM-Care.pages.lifestyle')
      .directive('lfPieChart', lfPieChart);

  /** @ngInject */
  function lfPieChart() {
    return {
      restrict: 'E',
      controller: 'lfPieChartCtrl',
      templateUrl: 'app/pages/lifestyle/lfPieChart/lfPieChart.html'
    };
  }
})();