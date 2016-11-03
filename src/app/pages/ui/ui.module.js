/**
 * @author Rabih Maalouf
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('VM-Care.pages.ui', [
    'VM-Care.pages.ui.typography',
    'VM-Care.pages.ui.buttons',
    'VM-Care.pages.ui.icons',
    'VM-Care.pages.ui.modals',
    'VM-Care.pages.ui.grid',
    'VM-Care.pages.ui.alerts',
    'VM-Care.pages.ui.progressBars',
    'VM-Care.pages.ui.notifications',
    'VM-Care.pages.ui.tabs',
    'VM-Care.pages.ui.slider',
    'VM-Care.pages.ui.panels',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui', {
          url: '/ui',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: 'UI Features',
          sidebarMeta: {
            icon: 'ion-android-laptop',
            order: 200,
          },
        });
  }

})();
