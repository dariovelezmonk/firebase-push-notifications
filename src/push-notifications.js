import firebase from 'firebase';

export const initializeFirebase = () => {
    firebase.initializeApp({
        apiKey: "AIzaSyDwJ8tpAFoLkIZ5PaPA6wX6SoY844vqBCA",
        authDomain: "myproject-77439.firebaseapp.com",
        databaseURL: "https://myproject-77439.firebaseio.com",
        projectId: "myproject-77439",
        storageBucket: "myproject-77439.appspot.com",
        messagingSenderId: "10367122422",
        appId: "1:10367122422:web:2a0d07c5c4da58c33ba5d7"
    });
};

export const askForPermissionToReceiveNotifications = async () => {
    try {
        const messaging = firebase.messaging();
        await messaging.requestPermission();
        const token = await messaging.getToken();
        return token;
    } catch (error) {
        console.log(error.message);
    }
};