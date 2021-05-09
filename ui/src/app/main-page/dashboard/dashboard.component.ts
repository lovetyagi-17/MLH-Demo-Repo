import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl} from '@angular/forms';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private http : HttpClient,
    private profileService : UserService,
    private fb : FormBuilder,
    private router: ActivatedRoute,
    private route : Router,
    private toastr :ToastrService 
  ) { }

  
  get firstName(): any {
    return localStorage.getItem('UserFirstName');
  }

  get lastName(): any {
    return localStorage.getItem('UserLastName');
  }

  ngOnInit(): void {
  }

}
