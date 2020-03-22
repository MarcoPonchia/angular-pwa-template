// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiPath: "http://192.168.1.165:3000",
  // apiPath: "http://localhost:3000"
  firebaseConfig: {
    apiKey: "AIzaSyDCFT-7bWywk5-Uhj9qszSEZU8t5d9bU1g",
    authDomain: "angular-pwa-template.firebaseapp.com",
    databaseURL: "https://angular-pwa-template.firebaseio.com",
    projectId: "angular-pwa-template",
    storageBucket: "angular-pwa-template.appspot.com",
    messagingSenderId: "568704490419",
    appId: "1:568704490419:web:33b92eabb2dc7f39df49c6",
    measurementId: "G-GZQZCS7MLM"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
