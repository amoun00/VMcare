/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('demogCtrl', demogCtrl);

  /** @ngInject */
  function demogCtrl($scope, $http) {
      $http.get().then(function(response) {
          //
      })

    $scope.demog = 
      {
        type: 'text-message',
        author: 'Kostya',
        surname: 'Danovsky',
        header: 'Posted new message',
        text: 'Guys, check this out: \nA police officer found a perfect hiding place for watching for speeding motorists. One day, the officer was amazed when everyone was under the speed limit, so he investigated and found the problem. A 10 years old boy was standing on the side of the road with a huge hand painted sign which said "Radar Trap Ahead." A little more investigative work led the officer to the boy\'s accomplice: another boy about 100 yards beyond the radar trap with a sign reading "TIPS" and a bucket at his feet full of change.',
        time: 'Today 11:55 pm',
        ago: '25 minutes ago',
        expanded: false,
      };

    $scope.expandMessage = function(message){
      message.expanded = !message.expanded;
    }
  }
})();