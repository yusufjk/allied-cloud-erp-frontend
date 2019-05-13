import firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCX1ILZNli0zkwCiTPPFDyoUmalmw_PdD8",
    authDomain: "springapiapp.firebaseapp.com",
    databaseURL: "https://springapiapp.firebaseio.com",
    projectId: "springapiapp",
    storageBucket: "springapiapp.appspot.com",
    messagingSenderId: "136499793820"
};
const mAuth = firebase.initializeApp(config);
export default mAuth;