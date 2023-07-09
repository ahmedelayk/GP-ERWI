// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { environment as firebase1 } from './environment.firebase1';
import { environment as firebase2 } from './environment.firebase2';

export const environment = {
  production: false,
  firebase1: firebase1.firebase,
  firebase2: firebase2.firebase
//   firebaseConfig: {
//     apiKey: "AIzaSyBd5SloQL2pyk_XSfZYin-f9gUl4Ca3iuM",
//     authDomain: "esp8266-a2827.firebaseapp.com",
//     databaseURL: "https://esp8266-a2827-default-rtdb.firebaseio.com",
//     projectId: "esp8266-a2827",
//     storageBucket: "esp8266-a2827.appspot.com",
//     messagingSenderId: "560343706695",
//     appId: "1:560343706695:web:b83879c93d0cfbc6271562",
//     measurementId: "G-5EZXBDC21N"
//   },
  // firebaseConfig2: {
    // apiKey: "AIzaSyBYPJyZue6pCdt2r82x-YYRI5Xx7QM7gy0",
    // authDomain: "chat-app-a60f0.firebaseapp.com",
    // databaseURL: "https://chat-app-a60f0-default-rtdb.firebaseio.com",
    // projectId: "chat-app-a60f0",
    // storageBucket: "chat-app-a60f0.appspot.com",
    // messagingSenderId: "1066136217705",
    // appId: "1:1066136217705:web:4514ad471413c0a7d69af8",
    // measurementId: "G-K31TMT6D21"
  // }
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBYPJyZue6pCdt2r82x-YYRI5Xx7QM7gy0",
//   authDomain: "chat-app-a60f0.firebaseapp.com",
//   databaseURL: "https://chat-app-a60f0-default-rtdb.firebaseio.com",
//   projectId: "chat-app-a60f0",
//   storageBucket: "chat-app-a60f0.appspot.com",
//   messagingSenderId: "1066136217705",
//   appId: "1:1066136217705:web:4514ad471413c0a7d69af8",
//   measurementId: "G-K31TMT6D21"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);