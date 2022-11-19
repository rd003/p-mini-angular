import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Status } from 'src/app/models/status';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  
  frm!:FormGroup;
  status!:Status;
  get f(){
    return this.frm.controls; //will be used in validation
  }

  onPost(){
    this.status={statusCode:0,message:'wait..'};
    this.categoryService.addUpdate(this.frm.value).subscribe({
      next:(res)=>{
        this.status=res;
        if(this.status.statusCode==1){
          this.frm.reset();
        }
      },
      error:(err)=>{
        console.log(err); 
      }
    })
  }
  constructor(private fb:FormBuilder,private categoryService:CategoryService,route:ActivatedRoute ) { 
    const id= route.snapshot.params['id'];
    if(id){
      categoryService.getById(id).subscribe(
        {
          next:(res)=>{
            this.frm.patchValue(res);      
          },
          error:(err)=>{
            console.log(err); 
          }
        }
      );
    }
  }

  ngOnInit(): void {
    this.frm= this.fb.group({
      'id':[0],
      'name':['',Validators.required]
    })
  }

}
