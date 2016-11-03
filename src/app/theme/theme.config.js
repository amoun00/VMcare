/**
 * Created by Rabih Maalouf on 13.05.2016.
 */

(function () {
  'use strict';

  angular.module('VM-Care.theme')
    .config(config);

  /** @ngInject */
  function config(baConfigProvider, colorHelper) {
    //baConfigProvider.changeTheme({blur: true});
    //
    //baConfigProvider.changeColors({
    //  default: 'rgba(#000000, 0.2)',
    //  defaultText: '#ffffff',
    //  dashboard: {
    //    white: '#ffffff',
    //  },
    //});
  }
})();
