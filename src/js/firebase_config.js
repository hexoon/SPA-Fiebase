export const firebase_config = () => {
    var firebaseConfig = {
        apiKey: "AIzaSyAPfCLxiFA43Ovy7_4rSk-4lw5p0x3oaCc",
        authDomain: "intentologinface.firebaseapp.com",
        databaseURL: "https://intentologinface.firebaseio.com",
        projectId: "intentologinface",
        storageBucket: "intentologinface.appspot.com",
        messagingSenderId: "456284442373",
        appId: "1:456284442373:web:a2269dfc53fafa12e1316c",
        measurementId: "G-2ST3KTJE1G"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
}