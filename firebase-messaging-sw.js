
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyDCFT-7bWywk5-Uhj9qszSEZU8t5d9bU1g",
    authDomain: "angular-pwa-template.firebaseapp.com",
    databaseURL: "https://angular-pwa-template.firebaseio.com",
    projectId: "angular-pwa-template",
    storageBucket: "angular-pwa-template.appspot.com",
    messagingSenderId: "568704490419",
    appId: "1:568704490419:web:33b92eabb2dc7f39df49c6",
    measurementId: "G-GZQZCS7MLM"
});
const messaging = firebase.messaging();
