/**
 * @author R.Maalouf
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('VM-Care.pages.ui.alerts', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.alerts', {
          url: '/alerts',
          templateUrl: 'app/pages/ui/alerts/alerts.html',
          title: 'Alerts',
          sidebarMeta: {
            order: 500,
          },
        });
  }

})();
