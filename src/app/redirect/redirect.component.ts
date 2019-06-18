import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
params
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.params = []
        console.log('params',params); 
        Object.keys(params).forEach(key => this.params.push({key,value:params[key]}))
      });
  }

}
