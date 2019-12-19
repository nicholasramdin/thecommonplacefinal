const uid = location.search.split('=')[1];

const userRef = firebase.database().ref('users').child(uid);


const profileName = document.getElementById('profile-name');

const bioInput = document.getElementById('bio');

const updateButton = document.getElementById('update-profile');


const nameInput = document.getElementById('name');

const emailInput = document.getElementById('email');

userRef.on('value', function(snapshot) {
	const userInfo = snapshot.val();
	profileName.value = userInfo.displayName;
	
    
    if (userInfo.name){
        nameInput.value = userInfo.name;
    }
    
    if (userInfo.email){
        emailInput.value = userInfo.name;
        
    }
    
	if (userInfo.bio) {
		bioInput.value = userInfo.bio;
	}
});




updateButton.onclick = function() {
	userRef.update({
		displayName: profileName.value,
		bio: bioInput.value,
        name: nameInput.value,
        email: emailInput.value
	});
};
