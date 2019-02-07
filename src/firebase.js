import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyCIqGEFhPaZbPq08YgV07N1pyFoYSOtr8I",
    authDomain: "property-listing-react.firebaseapp.com",
    databaseURL: "https://property-listing-react.firebaseio.com",
    projectId: "property-listing-react",
    storageBucket: "property-listing-react.appspot.com",
    messagingSenderId: "436920932013"
};

firebase.initializeApp(config);

const fb = {
    auth: firebase.auth(),
    storege:firebase.storage()
}

export default fb;