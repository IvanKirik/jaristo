import { Component, OnInit } from '@angular/core';
import {BotService} from "../../../shared/services/bot.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],

})
export class SidebarComponent implements OnInit {

  private subscriptionList: Subscription[] = [];
  set sub(sub: Subscription) {
    this.subscriptionList.push(sub);
  }
  public sidebarOpen: boolean = true;

  constructor(private botService: BotService) {}

  ngOnInit(): void {
    this.sub = this.botService.openSidebar$
      .subscribe(data => {
        this.sidebarOpen = data;
      })
  }

  ngOnDestroy(): void {
    this.subscriptionList.forEach(s => s.unsubscribe());
  }
}
