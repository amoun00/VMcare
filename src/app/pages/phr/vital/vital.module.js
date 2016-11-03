/**
 * @author R.Maalouf
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('VM-Care.pages.phr.vital', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('phr.vital', {
        url: '/vital',
        templateUrl: 'app/pages/phr/vital/vital.html',
          title: 'vital',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      });
  }
})();