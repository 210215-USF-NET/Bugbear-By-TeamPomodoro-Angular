import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { BBRESTService } from '../../../services/bb-rest.service';
import { item } from 'src/app/models/item';
import { LogService } from 'src/app/services/bb-logging.service';

@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.css']
})
export class EditItemsComponent implements OnInit {
  itemToEdit: item;

  constructor(private route: ActivatedRoute, private BBService: BBRESTService, private router: Router, public auth: AuthService, private logger: LogService) { 
    this.itemToEdit = {
      itemName: '',
      itemDescription: '',
      itemID: 0
    }
  }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(
      params => {
        this.BBService.GetItem(params.item).subscribe(
          (foundItem) => {
            this.itemToEdit = foundItem;
          }
        )
      }
    )
  }

  onSubmit(): void {
    this.BBService.EditItem(this.itemToEdit).subscribe(
      () => {
        alert(`${this.itemToEdit.itemName}'s info was successfully edited`);
        this.router.navigate(['get-items']);
      }
    )
  }
}
