// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig:any = {
  apiKey: "AIzaSyBd5SloQL2pyk_XSfZYin-f9gUl4Ca3iuM",
  authDomain: "esp8266-a2827.firebaseapp.com",
  databaseURL: "https://esp8266-a2827-default-rtdb.firebaseio.com",
  projectId: "esp8266-a2827",
  storageBucket: "esp8266-a2827.appspot.com",
  messagingSenderId: "560343706695",
  appId: "1:560343706695:web:b83879c93d0cfbc6271562",
  measurementId: "G-5EZXBDC21N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);