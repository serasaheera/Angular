import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
  name = 'sera';
  students = [
               { id :1,
                 name : "miju",
                 age : 2,
                 address : "anangadi"
                 },
                 {
                  id :2,
                  name : "asma",
                  age : 20,
                  address : "kannur"
                 },
                 {
                 id :3,
                 name : "ummu",
                 age : 24,
                 address : "eranamkulam"
                 },
                 {
                  id :4,
                  name : "shuhaib",
                  age : 22,
                  address : "malappuram"
                  },
                  {
                    id :5,
                    name : "suhairath",
                    age : 16,
                    address : "kozhikode"
                    }
  ]
}
