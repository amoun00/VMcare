/**
 * @author Rabih Maalouf
 * created on 15.01.2016
 */
(function () {
  'use strict';

  angular.module('VM-Care.pages.phr', [
    'VM-Care.pages.phr.timeline',
    'VM-Care.pages.phr.allergy'
    /*'VM-Care.pages.phr.lifestyle',
    'VM-Care.pages.phr.medical history',
    'VM-Care.pages.phr.vital',
    'VM-Care.pages.phr.consultation',
    'VM-Care.pages.phr.lab',
    'VM-Care.pages.phr.medication',
    'VM-Care.pages.phr.genetic'
    */

  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('phr', {
          url: '/phr',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: 'phr',
          sidebarMeta: {
            icon: 'ion-ios-pulse',
            order: 100,
          },
        });
  }

})();
