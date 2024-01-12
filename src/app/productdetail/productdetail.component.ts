import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent {
  id:any
   constructor(private route:ActivatedRoute){
    this.id=this.route.snapshot.params["id"]
    console.log(this.id);
    
   }
}
