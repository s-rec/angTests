
function showLinkedIn() {
  // insert the SignIn plugin
  $('#buttonContent').html('<script type="IN/Login" data-onauth="loadData"><\/script>');

  // tell the LinkedIn JavaScript code to re-parse the element containing the SignIn plugin
  IN.parse($('#buttonContent')[0]);

  // hide button trigger, if needed
  $('#buttonControl').hide();

  // show the LinkedIn control
  $('#buttonContent').show();
}

function OnLinkedInFrameworkLoad() {
  IN.Event.on(IN, "auth", OnLinkedInAuth);
}

function OnLinkedInAuth() {
    IN.API.Profile("me").result(ShowProfileData);
}

function ShowProfileData(profiles) {
    var member = profiles.values[0];
    var id=member.id;
    var firstName=member.firstName; 
    var lastName=member.lastName; 
    var photo=member.pictureUrl; 
    var headline=member.headline; 

    //use information captured above
    document.getElementById("profiles").innerHTML = "<p id=\"" + member.id + "\">Bienvenido " + member.firstName + " " + member.lastName + "</p>";
}

function GetProfileData() {

	Person profile=client.getProfileForCurrentUser();
	System.out.println("Name:"+profile.getFirstName()+" "+profile.getLastName());

}
