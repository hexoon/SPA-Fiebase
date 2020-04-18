import { firebase_config } from './firebase_config.js';

firebase_config();


let btn_face = document.querySelector("#btn_face")
function login_face() {
    var provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider)
        .then(data => {
            console.log(data.user)
            let main = document.querySelector("#main")
                main.classList.remove("active")
            let index = document.querySelector("#index")
                index.classList.add("active")

        })
};

btn_face.onclick = login_face



let btn_google = document.querySelector("#btn_google")
function login_google() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });

};

btn_google.onclick = login_google


let main = document.querySelector("#main")
let index = document.querySelector("#index")
let test_navigation = document.querySelector("#test_navigation")

let btn_test = document.querySelector("#btn_test")

function test_nav() {
            main.classList.remove("active")
            test_navigation.classList.add("active")
};

btn_test.onclick = test_nav

function return_home () {
    test_navigation.classList.remove("active")
    main.classList.add("active")
}

let btn_home = document.querySelector("#return_home")
btn_home.onclick = return_home