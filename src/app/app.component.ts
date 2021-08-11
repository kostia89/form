import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  myForm: FormGroup;
  
  constructor (
    private fb: FormBuilder
  ) {}

  // get f (){
  //   return this.form.controls;
  // }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      framework: ['', [Validators.required]],
      frameworkVersion: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      
    })
  }
  angula: boolean;
  reac: boolean;
  vu: boolean;
  angular(){
    this.angula = true
    this.reac = false
    this.vu = false
  }
  react(){
    this.reac = true
    this.angula = false
    this.vu = false
  }
  vue(){
    this.vu = true
    this.reac = false
    this.angula = false
  }
  loadForm(){
    console.log(this.myForm.value);
    
  }
}
