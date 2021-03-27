import { Component, OnInit } from '@angular/core';
import { conditionDetail } from 'src/app/models/conditionDetail'
import { DndRefService } from 'src/app/services/dnd-ref.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conditions-details',
  templateUrl: './conditions-details.component.html',
  styleUrls: ['./conditions-details.component.css']
})
export class ConditionsDetailsComponent implements OnInit {

  detail: conditionDetail;


  constructor(private dndService: DndRefService, private router: Router, private route: ActivatedRoute) {
    this.detail = {
      name: '',
      index: '',
      desc: [],
      url: ''
    }
    
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        console.log(params)
        this.dndService.GetCondition(params["conditions"]).subscribe(
          foundCondition => {
            this.detail = foundCondition;
            console.log(this.detail)
          }
        )
      }
    )
  }

}
