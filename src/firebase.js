import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCDPCSq9H8HeUx0ArkFCSq47AaoiLzjHvw",
//   authDomain: "clone-6bd50.firebaseapp.com",
//   projectId: "clone-6bd50",
//   storageBucket: "clone-6bd50.appspot.com",
//   messagingSenderId: "124275383922",
//   appId: "1:124275383922:web:9bc3568d410ad15e402ceb"
// };
const firebaseConfig = {
  apiKey: "AIzaSyBsbc8ORZobqCdSjn4jYMj56T-OJgdqMAc",
  authDomain: "clone-368a9.firebaseapp.com",
  projectId: "clone-368a9",
  storageBucket: "clone-368a9.appspot.com",
  messagingSenderId: "39876110934",
  appId: "1:39876110934:web:9bd06886ff5097d24ce9f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };