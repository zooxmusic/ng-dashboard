import { Component } from '@angular/core';
import {Login} from './models/login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    constructor() {
        this.loadScripts();
    }
    async getFileText(file: string){
        const response = await fetch(file)
        return await response.text()
    }

    async loadScripts() {
        const styles = [
            '/assets/styles/bootstrap.min.css',
            '/assets/styles/font-awesome.min.css',
            '/assets/styles/style.css'
        ];
        console.log("ABOUT TO CREATE CSS")
        for (let i = 0; i < styles.length; i++) {
            const text = await this.getFileText(styles[i]);
            console.log("CREATING STYLES WITH")
            console.log(text)
            const styleNode:any = document.createElement('style');

            styleNode.type = "text/css"
            styleNode.rel = "stylesheet"
            styleNode.innerHTML = text;
            document.getElementsByTagName('head')[0].appendChild(styleNode);
        }
    }
  loginInfo: Login = {
      first_name: 'Andrew',
      last_name: 'Yang',
      avatar: 'ay.jpeg',
      title: 'Senior Developer'
  };
}

