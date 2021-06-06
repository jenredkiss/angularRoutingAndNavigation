import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
    <p>
      employee-list works!
    </p>
  `,
  styles: [`
  p{
    text-align: center;
  }
` ]
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
