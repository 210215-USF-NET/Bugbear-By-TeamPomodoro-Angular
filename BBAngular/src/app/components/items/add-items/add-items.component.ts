import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BBRESTService } from 'src/app/services/bb-rest.service';
import { AuthService } from '@auth0/auth0-angular';
import { LogService } from 'src/app/services/bb-logging.service';
import { item } from 'src/app/models/item';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  itemToAdd: item;

  constructor(private BBService: BBRESTService, public auth: AuthService, private router: Router, private logger: LogService) {
    this.itemToAdd = 
    {
      itemName: '',
      itemDescription: '',
      itemID: 0
    }
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.BBService.AddItem(this.itemToAdd).subscribe(
      (item) => {
        alert(`${item.itemName} was added!`);
        this.router.navigate(['get-items']);
      }
    );
  }

}
