import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  project = {
    course: '',
    title: '',
    author: '',
    summary: '',
    problem: '',
    objectives: '',
    methodology: '',
    findings: ''
  };
  submitted = false;
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
  }

  saveProject(): void {    
    const data = {...this.project};
    console.log('Issue? ', data);
    this.projectService.create(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      err => console.error(`Failed to create project ${data.title}: `, err)
      
    )
  }

  newProject(): void {
    this.submitted = false;
    this.project = {
      course: '',
      title: '',
      author: '',
      summary: '',
      problem: '',
      objectives: '',
      methodology: '',
      findings: ''
    }
  }

}
