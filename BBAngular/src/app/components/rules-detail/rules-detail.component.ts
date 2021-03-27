import { Component, OnInit } from '@angular/core';
import { DndRefService } from 'src/app/services/dnd-ref.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ruleDetail } from 'src/app/models/ruleDetail'

@Component({
  selector: 'app-rules-detail',
  templateUrl: './rules-detail.component.html',
  styleUrls: ['./rules-detail.component.css']
})
export class RulesDetailComponent implements OnInit {

  detail: ruleDetail;
  
  constructor(private dndService: DndRefService, private router: Router, private route: ActivatedRoute) {
    this.detail = {
      name: '',
      index: '',
      desc: '',
      url: ''
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.dndService.GetRule(params["rules"]).subscribe(
          foundRule => {
            this.detail = foundRule;
          }
        )
      }
    )
  }

}
