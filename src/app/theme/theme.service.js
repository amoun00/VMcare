/**
 * Created by Rabih Maalouf on 12.05.2016.
 */

(function () {
  'use strict';

  angular.module('VM-Care.theme')
    .service('themeLayoutSettings', themeLayoutSettings);

  /** @ngInject */
  function themeLayoutSettings(baConfig) {
    var isMobile = (/android|webos|iphone|ipad|ipod|blackberry|windows phone/).test(navigator.userAgent.toLowerCase());
    var mobileClass = isMobile ? 'mobile' : '';
    var blurClass = baConfig.theme.blur ? 'blur-theme' : '';
    angular.element(document.body).addClass(mobileClass).addClass(blurClass);

    return {
      blur: baConfig.theme.blur,
      mobile: isMobile,
    }
  }

})();