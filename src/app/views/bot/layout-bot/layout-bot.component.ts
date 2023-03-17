import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {BotService} from "../../../shared/services/bot.service";

@Component({
  selector: 'app-layout-bot',
  templateUrl: './layout-bot.component.html',
  styleUrls: ['./layout-bot.component.scss']
})
export class LayoutBotComponent implements OnInit {

  private subscriptionList: Subscription[] = [];
  set sub(sub: Subscription) {
    this.subscriptionList.push(sub);
  }
  public sidebarOpen: boolean = false;

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
