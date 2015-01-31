var app = angular.module('rtfmApp');

app.service('threadService', function($firebase, environmentService) {

		// some Firebase 'magic'
		// var url = environmentService.getEnv().firebase; // notice the url to Firebase(url), ref to $firebase(ref)
		// var ref = new Firebase(url) // this is the vanilla JS version, DON'T USE IN ANGULAR. just know that 'ref' is related to the below situation
		// var thing = $firebase(ref) // when you wrap the angular in it // USE THING AND WRAP IT IN ANGULAR FIRE ($firebase)
		// var thingObject = thing.$asObject(); // return as an object
		// var thingArray = thing.$asArray(); // return as an array
		// thingArray.$add(thingToPush) // Look up $asArray and $asObject()
		var firebaseUrl = environmentService.getEnv().firebase // returning our environmentService using firebase

		this.getThreads = function() {
			console.log($firebase(new Firebase(firebaseUrl + '/threads')))
			return $firebase(new Firebase(firebaseUrl + '/threads'));
		}

		this.getThread = function(id) {
			return $firebase(new Firebase(firebaseUrl + '/threads/' + id))
		}

		this.getComments = function(id) {
			return $firebase(new Firebase(firebaseUrl + '/threads' + id + '/comments'))	
		}

})