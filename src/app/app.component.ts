import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'buy-and-sell';

  constructor(
    public auth: AngularFireAuth,
  ) {}

  async signInClicked() {
    try {
      const provider = new GoogleAuthProvider();
      await this.auth.signInWithPopup(provider);
    } catch (error) {
      console.log('error =>', error);
    }
  }

  signOutClicked(): void {
    this.auth.signOut();
  }

}
