import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { item } from 'src/app/models/item'
import { BBRESTService } from 'src/app/services/bb-rest.service'
import { AuthService } from '@auth0/auth0-angular'
import { LogService } from 'src/app/services/bb-logging.service'

@Component({
  selector: 'app-get-items',
  templateUrl: './get-items.component.html',
  styleUrls: ['./get-items.component.css']
})
export class GetItemsComponent implements OnInit {
  items: item[] = [];
  itemID: number

  constructor(private BBService: BBRESTService, private router: Router, public auth: AuthService, private logger: LogService) {
  }

  ngOnInit(): void {
    this.BBService.GetItems().subscribe(
      (result) => {
        result.forEach(item => {
          this.items.push(item)
          this.logger.debug(`${item.itemName} added to page array`)
        })
      }
    )
  }
  
  GetItem(itemID: number) {
    this.logger.info(`Getting details for item ${itemID}`)
    this.router.navigate(['item-details'], { queryParams: { item: itemID } });
  }
}
