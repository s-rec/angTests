// app.js
angular.module('S-REC', ['auth0','angular-storage','angular-jwt']).config(function (authProvider) {
	authProvider.init({
		domain: 's-rec.eu.auth0.com',
		clientID: 'qTBdYLuPH0PKXo3cNEl1dQwQfCSydiiz'
	});
})
.run(function(auth) {
	auth.hookEvents();
})
