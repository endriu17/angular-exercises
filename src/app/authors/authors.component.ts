import { AuthorsService } from './../authors.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  header =  "Authors";
  authors;

  constructor(service: AuthorsService) {
      this.authors = service.getAuthors();
  }

}
