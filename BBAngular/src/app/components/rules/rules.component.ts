import { Component, OnInit } from '@angular/core';
import { DndRefService } from 'src/app/services/dnd-ref.service'
import { Router } from '@angular/router';
import { rule } from 'src/app/models/rule'

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  rules: rule[] = [];

  constructor(private dndService: DndRefService, private router: Router) { }

  ngOnInit(): void {
    this.dndService.GetRules().subscribe(
      (result) =>{
        this.rules = result["results"];
      }
    );
  }

  GetRule(ruleName: string){
    this.router.navigate(['rules-details'], {queryParams: {rules: ruleName}});
  }

}
