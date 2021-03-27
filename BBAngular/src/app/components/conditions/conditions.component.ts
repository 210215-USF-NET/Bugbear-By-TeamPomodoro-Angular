import { Component, OnInit } from '@angular/core';
import { condition } from 'src/app/models/conditions'
import { DndRefService } from 'src/app/services/dnd-ref.service'
import { Router } from '@angular/router';
import { conditionDetail } from 'src/app/models/conditionDetail'
@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {

  conditions: condition[] = [];

  constructor(private dndService: DndRefService, private router: Router) { }

  ngOnInit(): void {
    this.dndService.GetConditions().subscribe(
      (result) =>{
        this.conditions = result["results"];
        console.log(Object.keys(result))
      }
    );
  }

  GetCondition(conditionName: string){
    this.router.navigate(['conditions-details'], {queryParams: {conditions: conditionName}});
  }

}
