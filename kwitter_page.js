var firebaseConfig = {
      apiKey: "AIzaSyCDJPGI0-1l40KIppoMqScS99U8APIDn9o",
      authDomain: "kwitter-dcea0.firebaseapp.com",
      databaseURL: "https://kwitter-dcea0-default-rtdb.firebaseio.com",
      projectId: "kwitter-dcea0",
      storageBucket: "kwitter-dcea0.appspot.com",
      messagingSenderId: "270084471312",
      appId: "1:270084471312:web:6aea4c3bf1b21dbd512895"
    };
    
    
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name"); 
    room_name = localStorage.getItem("room_name");

    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0

          })
    }












































function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
