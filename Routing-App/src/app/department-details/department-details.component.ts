import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
    <h3>You selected department with id {{departmentId}}</h3>
  `,
  styles: [
  ]
})
export class DepartmentDetailsComponent implements OnInit {

  public departmentId:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.departmentId = id;
  }

}
