/**
 * @author R.Maalouf
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('VM-Care.pages.phr.allergy', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('phr.allergy', {
        url: '/allergy',
        templateUrl: 'app/pages/phr/allergy/allergy.html',
          title: 'Allergy',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      });
  }
})();