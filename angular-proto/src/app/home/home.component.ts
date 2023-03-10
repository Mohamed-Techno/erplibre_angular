import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>
      home works!
    </p>
<br>
<br>
    <ul>
        <li *ngFor="let fruit of newList">{{fruit}}</li>
    </ul>

<br>
<br>
  <input type="text" #box (keyup)="getValue(box.value)">
  <div class="buttons">
    <button (click)="addElement()" class="button is-info">Add Food Elements</button>
  `,
  styles: [
  ]
})
export class HomeComponent {

    listFruits = [
    "Pomme",
    "Banane",
    "Raisins" ,
    "Ananas"]

    newList: string[] = [...this.listFruits];
    value: string = '';
    ngOnInit()
    {

    }

    getValue(val:string)
    {
        console.warn(val)
        this.value = val;
    }
    addElement()
    {
        this.listFruits.push(this.value);
        this.newList = [...this.listFruits];
    }
}
