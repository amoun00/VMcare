/**
 * @author R.Maalouf
 * created on 1/12/16
 */
(function () {
  'use strict';

  angular.module('VM-Care.pages.phr.timeline', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('phr.timeline', {
        url: '/timeline',
        templateUrl: 'app/pages/phr/timeline/timeline.html',
          title: 'Timeline',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
      });
  }
})();