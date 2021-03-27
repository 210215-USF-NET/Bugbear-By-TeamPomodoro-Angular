import { Component, OnInit } from '@angular/core';
import { DndRefService } from 'src/app/services/dnd-ref.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quick-ref',
  templateUrl: './quick-ref.component.html',
  styleUrls: ['./quick-ref.component.css']
})
export class QuickRefComponent implements OnInit {

  constructor(private dndService: DndRefService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  GetConditions(){
    this.router.navigate(['conditions']);
  }

}
