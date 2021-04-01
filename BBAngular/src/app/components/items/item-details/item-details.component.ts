import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { BBRESTService } from 'src/app/services/bb-rest.service'
import { AuthService } from '@auth0/auth0-angular'
import { item } from 'src/app/models/item';
import { LogService } from 'src/app/services/bb-logging.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  item: item;

  constructor(private BBService: BBRESTService, private route: ActivatedRoute, private router: Router, public auth: AuthService, private logger: LogService) {
    this.item = {
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
            foundItem => {
              this.item = foundItem;
            }
          )
        }
      );
  }

  DeleteItem(itemToBeDeleted: item): void {
    if (confirm(`Are you sure you want to delete ${itemToBeDeleted.itemName}?`).valueOf()) {

      this.BBService.DeleteItem(itemToBeDeleted.itemID).subscribe(
        () => {
          alert(`${itemToBeDeleted.itemName} has been deleted`);
          this.logger.info(`${itemToBeDeleted.itemName} has been deleted`);
          this.router.navigate(['get-items']);
        }
      );
    }
  }
  EditItem(itemID: number): void {
    this.router.navigate(['edit-items'], { queryParams: { item: itemID } });
  }

}
