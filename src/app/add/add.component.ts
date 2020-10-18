import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableService } from '../table.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  addEmployee: FormGroup;
  constructor(private fb: FormBuilder ,private data:TableService) {}
  ngOnInit(): void {
    this.addEmployee = this.fb.group({
      name: ['', Validators.required],
      dep: ['', Validators.required],
      code: ['', Validators.required],
      birthDate: ['', Validators.required],
      gender: ['',Validators.required]
    });
  }
  public listItems: Array<string> = [
    'Department 1',
    'Department 2',
    'Department 3',
    'Department 4'
  ];

  onSubmit() {
    console.log(this.addEmployee.value);
    this.data.employees.push(this.addEmployee.value)
  }
}
