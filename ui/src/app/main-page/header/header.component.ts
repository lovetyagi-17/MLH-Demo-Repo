import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl} from '@angular/forms';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private http : HttpClient,
    private profileService : UserService,
    private fb : FormBuilder,
    private router: ActivatedRoute,
    private route : Router,
    private _toastr :ToastrService 
  ) { }

  get firstName(): any {
    return localStorage.getItem('UserFirstName');
  }

  get lastName(): any {
    return localStorage.getItem('UserLastName');
  }

  get email(): any {
    return localStorage.getItem('UserEmail');
  }

  Logout(){
    localStorage.removeItem('UserId');
    localStorage.removeItem('UserToken');
    localStorage.removeItem('UserFirstName');
    localStorage.removeItem('UserLastName');
    localStorage.removeItem('UserEmail');
    this._toastr.success("Logout Successfully",'Message');
    this.route.navigateByUrl('/home');
  }


  ngOnInit(): void {
  }

}
