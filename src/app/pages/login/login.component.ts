import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserapiService } from 'src/app/services/userapi.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
login = new FormGroup({email:new FormControl('', Validators.required) ,
pass:new FormControl('', Validators.required) ,
})
  constructor(private data: UserapiService , private router: Router , private http:HttpClient) { }
  ISLOGGED = false; 
  ngOnInit(): void {
    this.ISLOGGED=false;
  }
  
  Login(){
    // console.log("test")
    this.data.LoginApi(this.login.value).subscribe(
      res=>{
        console.log(res.token)
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${res.token}`
        });
        this.http.get("http://localhost:4200/", { headers }).subscribe(response => {
          console.log(response);
        });
        localStorage.setItem('UserToken', `${res.token}`)
       
        localStorage.setItem('photo' ,res.data.UserData.image )
        // alert("sucessfully logged in")
    if(res.data.UserData.type == 'user'){
      this.data.AdminOrNot = false;
    }
    else if(res.data.UserData.type == 'admin'){
      this.data.AdminOrNot = true;
    }
   
    this.data.photo = res.data.UserData.image;
    console.log("***************************")
  console.log(this.data.photo);
    },
      err=>console.log(err),
      ()=>{
       this.data.isLogin = true;
     console.log(this.data.AdminOrNot )
     //  this.data.AdminOrNot = true;
       // window.location.reload();
        this.router.navigate(['']);
        
      }
    )
  }

}
