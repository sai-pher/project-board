import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProjectComponent } from './component/add-project/add-project.component';
import { ProjectDetailsComponent } from './component/project-details/project-details.component';
import { ProjectsListComponent } from './component/projects-list/projects-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProjectComponent,
    ProjectDetailsComponent,
    ProjectsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
