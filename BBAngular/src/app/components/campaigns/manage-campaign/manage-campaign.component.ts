import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { campaign } from 'src/app/models/campaign';
import { character } from 'src/app/models/character';
import { user } from 'src/app/models/user';
import { LogService } from 'src/app/services/bb-logging.service';
import { BBRESTService } from 'src/app/services/bb-rest.service';
import { SharingDataService } from 'src/app/services/sharing-data.service';

@Component({
  selector: 'app-manage-campaign',
  templateUrl: './manage-campaign.component.html',
  styleUrls: ['./manage-campaign.component.css']
})
export class ManageCampaignComponent implements OnInit {
  campaign: campaign;
  @ViewChild('user2Find') 
  user2Find: ElementRef
  allCharacters: character[]

  constructor(private BBService: BBRESTService, private router: Router, private route: ActivatedRoute, public auth: AuthService, private logger: LogService, private sharingService: SharingDataService) {
    this.campaign = this.sharingService.getData();
  }

  ngOnInit(): void {
    
    this.BBService.GetCharacters().subscribe(
      (result) => {
        this.allCharacters = result;
      }
    );
  }
  addCharacterToCampaign(result: number){
    this.BBService.GetCharacter(result).subscribe(
      (result) => {
        this.campaign.campaignCharacters.push(result)
        this.BBService.EditCampaign(this.campaign).subscribe(
          (campaign) => {
            this.sharingService.setData(campaign);
          }
        );
      }
    )
  }
}
