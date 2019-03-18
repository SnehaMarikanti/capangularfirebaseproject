import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'loginApp';

  ngOnInit() {

    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyBV1oi1qg8RwOmTLXJapE0BmtAfzi7APBc',
      authDomain: 'mycapproject-56103.firebaseapp.com',
      databaseURL: 'https://mycapproject-56103.firebaseio.com',
      projectId: 'mycapproject-56103',
      storageBucket: 'mycapproject-56103.appspot.com',
      messagingSenderId: '99299208840'
    };
    firebase.initializeApp(config);

  }
}
