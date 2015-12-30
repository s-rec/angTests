// app.js
angular.module('app', ['auth0','angular-storage','angular-jwt']).config(function (authProvider) {
	authProvider.init({
		domain: 's-rec.eu.auth0.com',
		clientID: 'qTBdYLuPH0PKXo3cNEl1dQwQfCSydiiz'
	});
})
.run(function(auth) {
	auth.hookEvents();
})
