/**
 * @author R.Maalouf
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('VM-Care.pages', [
    'ui.router',
    'VM-Care.pages.dashboard',
    'VM-Care.pages.profile',
    'VM-Care.pages.lifestyle',
    'VM-Care.pages.phr',
    'VM-Care.pages.mail',
    'VM-Care.pages.schedule',
    /*'VM-Care.pages.ui',  
    'VM-Care.pages.form',
    'VM-Care.pages.tables',
    'VM-Care.pages.charts',
    'VM-Care.pages.maps',
    'VM-Care.pages.tree'*/
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');

/* remove the below static menu items
    baSidebarServiceProvider.addStaticItem({
      title: 'Pages',
      icon: 'ion-document',
      subMenu: [{
        title: 'Sign In',
        fixedHref: 'auth.html',
        blank: true
      }, {
        title: 'Sign Up',
        fixedHref: 'reg.html',
        blank: true
      }, {
        title: '404 Page',
        fixedHref: '404.html',
        blank: true
      }]
    });
    baSidebarServiceProvider.addStaticItem({
      title: 'Menu Level 1',
      icon: 'ion-ios-more',
      subMenu: [{
        title: 'Menu Level 1.1',
        disabled: true
      }, {
        title: 'Menu Level 1.2',
        subMenu: [{
          title: 'Menu Level 1.2.1',
          disabled: true
        }]
      }]
    });*/
  }

})();
