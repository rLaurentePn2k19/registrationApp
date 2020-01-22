import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  photo = 'https://data.whicdn.com/images/281869398/original.jpg';
  iD: number
  public dataList;


  constructor(private router: ActivatedRoute, private userService: UserServiceService) { }

  ngOnInit() {
    this.iD = this.router.snapshot.params['id']
    this.userService.getUser().subscribe(data => {
      this.dataList = data[this.iD-1]
    })
  }

  back(){
    this.userService.back();
  }
}
