'use strict';

eventsApp.controller('EventController',

    function EventController($scope, eventData) {
        $scope.sortOrder = "name";
        eventData.getEvent().then(
            function (event) {
                $scope.event = event;
            },
            function (statusCode) {
                console.log(statusCode);
            }
        );
        $scope.upVoteSession = function (session) {
            session.upvoteCount++;
        };
        $scope.downVoteSession = function (session) {
            session.upvoteCount--;
        };
        $scope.now = new Date();
        $scope.snippet = '<span style="color:red;">My cool snippet</span>';
        $scope.mystyle = {color: 'red'}
        $scope.disableButton = false;
    }
);