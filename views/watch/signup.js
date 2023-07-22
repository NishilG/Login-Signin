// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCk2y1X6n-D0q7wvMkWpw3CrsBbd0rqT4g",
    authDomain: "bubbly-hope-386107.firebaseapp.com",
    projectId: "bubbly-hope-386107",
    storageBucket: "bubbly-hope-386107.appspot.com",
    messagingSenderId: "678578659104",
    appId: "1:678578659104:web:33114c8b6bd87e66d20145",
    measurementId: "G-YBTYCBMFSQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)

document
    .getElementById("signup")
    .addEventListener("submit", (event) => {
        event.preventDefault();
        const login = event.target.login.value;
        const password = event.target.password.value;

        firebase
            .auth()
            .createUserWithEmailAndPassword(login, password)
            .then(({ user }) => {
                db.collection('users').doc(user.uid).set({
                    Course : false
                })
                return user.getIdToken().then((idToken) => {
                    return fetch("/sessionLogin", {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                            "CSRF-Token": Cookies.get("XSRF-TOKEN"),
                        },
                        body: JSON.stringify({ idToken }),
                    });
                });
            })
            .then(() => {
                return firebase.auth().signOut();
            })
            .then(() => {
                window.location.assign("/profile");
            });
        return false;
    });