'use strict';

eventsApp.factory('eventData', function ($http, $q) {
    return {
        getEvent: function () {
            var deferred = $q.defer();
            $http({method: "GET", url: "/data/event/1"}).
                success(function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    deferred.reject(status);
                })
            return deferred.promise;
            }
        }
    }
);






/*
 event: {
 name: 'Angular Boot Camp',
 date: '1/1/2013',
 time: '10:30 AM',
 location: {
 address: "Google Headquarters",
 city: "Mountain View",
 state: "CA"
 },
 imgUrl: "/img/angularjs-logo.jpg",
 sessions: [
 {
 name: "Well-behaved controllers",
 creatorName: "Jenniffer Lockwood",
 duration: 1,
 level: "Introductory",
 abstract: "In this session you'll learn to take control of your contollers",
 upvoteCount: 0
 },
 {
 name: "Scopes for fun and profit",
 creatorName: "Anton Von Lewenhook",
 duration: 2,
 level: "Intermediate",
 abstract: "The scope is created by the controller and has a dollar sign in front of it.  Ka-ching!",
 upvoteCount: 0
 },
 {
 name: "Directives I have known",
 creatorName: "Champ Norton",
 duration: 4,
 level: "Advanced",
 abstract: "Oh, you've been waiting to hear about directives, haven't you?  Now you will!",
 upvoteCount: 0
 }
 ]
 }
 */
/*
 eventsApp.factory('eventData', function (eventResource, authService) {
 return {
 getEvent: function(eventId, callback) {
 return eventResource.get({id:eventId}, function(event) {
 if (callback)
 callback(event);
 });
 },
 getAllEvents: function(callback) {
 return eventResource.queryAll(callback);
 },
 getNextSessionId:function (event) {
 var max = 0;
 for (var idx = 0; idx < event.sessions.length; idx++) {
 if (event.sessions[idx].id > max) {
 max = event.sessions[idx].id;
 }
 }
 return max+1;
 },
 save: function(event, callback) {
 if (event.id) {
 eventResource.save(event, function() { if (callback) callback(); });
 } else {
 eventResource.queryAll(function(events) {
 event.creator = authService.getCurrentUserName();
 event.id = getNextEventId(events);
 event.sessions = [];
 eventResource.save(event);
 if (callback)
 callback();
 });
 }
 }
 };

 function getNextEventId(events) {
 var max = 0;
 for (var idx = 0; idx < events.length; idx++) {
 if (events[idx].id > max) {
 max = events[idx].id;
 }
 }
 return max+1;
 }
 });
 */