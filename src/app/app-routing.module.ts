import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';


//Routing and Navigation
const routes: Routes = [
  { path: 'departments', component: DepartmentListComponent},
  { path: 'employees', component: EmployeeListComponent},
  { path: 'user-info', component: UserInfoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//Routing and Navigation
export const routingComponents = [DepartmentListComponent, EmployeeListComponent, UserInfoComponent]
