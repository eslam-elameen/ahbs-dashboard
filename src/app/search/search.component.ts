import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { TableService } from '../table.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchComponent implements OnInit {
  searchEmployee: FormGroup;

  constructor(private fb: FormBuilder, private data: TableService) {}

  public listItems: Array<string> = [
    'Department 1',
    'Department 2',
    'Department 3',
    'Department 4',
  ];
  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
  public gridData;
  public gridView: any[];
  public mySelection: string[] = [];
  filteredData;
  mainData=[];


  ngOnInit(): void {
   
    this.mainData = this.data.employees;
    this.gridData = this.data.employees;
    this.filteredData = this.data.employees;
    this.gridView = this.gridData;
  
    this.searchEmployee = this.fb.group({
      name: ['', Validators.required],
      dep: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.searchEmployee.value);

    if (this.searchEmployee.valid) {
      let emp = this.filteredData.filter((item) => {
        return (
          item.name === this.searchEmployee.value.name &&
          item.dep === this.searchEmployee.value.dep
        );
      });
      console.log(emp);

      this.gridData = emp;
      this.gridView = this.gridData;
    }else{
      this.gridData=this.mainData
      this.gridView = this.gridData;

    }
  }
}
