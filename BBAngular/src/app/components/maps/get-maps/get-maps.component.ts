import { Component, OnInit, Output } from '@angular/core'
import { Router } from '@angular/router'
import { map } from 'src/app/models/map'
import { BBRESTService } from 'src/app/services/bb-rest.service'
import { AuthService } from '@auth0/auth0-angular'
import { LogService } from 'src/app/services/bb-logging.service'
import { campaign } from 'src/app/models/campaign'
import { SharingDataService } from 'src/app/services/sharing-data.service'

@Component({
  selector: 'app-get-maps',
  templateUrl: './get-maps.component.html',
  styleUrls: ['./get-maps.component.css']
})
export class GetMapsComponent implements OnInit {
  maps: map[] = []
  mapID : number
  campaign: campaign;

  constructor(private BBService: BBRESTService, private router: Router, public auth: AuthService, private logger: LogService, private sharingService: SharingDataService) {
    auth.user$.toPromise
    this.campaign = this.sharingService.getData()
  }

  ngOnInit(): void {
    console.log(this.sharingService.getData())
    this.auth.user$.subscribe(user => {
      this.BBService.GetUserByEmail(user.email).subscribe(
        user => {
          this.BBService.GetMaps().subscribe(
            (result) => {
              result.forEach(map => {
                console.log(map)
                if(this.campaign.campaignMaps.some(s => s.mapID == map.mapID))
                {
                  this.maps.push(map)
                }
              })
            }
          )
        }
      )
    })
  }

  GetMap(mapID: number) {
    this.router.navigate(['map-details'], { queryParams: { map: mapID } });
  }

}
