import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
    <button
      class="btn btn-primary"
      [class.active]="isActive"
      (click)="onSave($event)"
    >
      Save
    </button>
    <input [value]="email" (keyup.enter)="onKeyUp()" />
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" /> <br />
    {{ course.title | uppercase }} <br />
    {{ course.students | number }} <br />
    {{ course.rating | number: '2.2-2' }} <br />
    {{ course.price | currency: 'NOK':true:'2.2-2' }} <br />
    {{ course.relaseDate | date: 'mediumDate' }} <br />

    <i class="{{iconClass}} fa-star" (click)="changeStar()"></i>
  `
})
export class CoursesComponent {
  isActive = true;
  isFull = false;
  email = 'any@example.com';
  iconClass = 'far';

  onSave($event) {
    console.log('Button was clocked ', $event);
  }

  onKeyUp() {
    console.log(this.email);
  }

  changeStar() {
    this.isFull = !this.isFull;
    !this.isFull ? this.iconClass = 'far' : this.iconClass = 'fas';
  }

  course = {
    title: 'The complete Angular Course',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    relaseDate: new Date(2016, 3, 1)
  };
}
