import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  template: `
    <p class="p-tag">
      department-list works!
    </p>
  `,
  styles: [`
    p{
      text-align: center;
    }
  ` ]
})
export class DepartmentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
