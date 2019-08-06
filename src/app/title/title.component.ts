import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'title-case',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  titleCase = '';
  constructor() { }

  ngOnInit() {
  }

}
