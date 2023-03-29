import { Component, OnInit } from '@angular/core';
import {BotService} from "../../../../shared/services/bot.service";

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public sidebarOpen: boolean = false;

  constructor(private botService: BotService) { }

  ngOnInit(): void {
  }

  public onSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    this.botService.setOpenSidebar(this.sidebarOpen)
  }

}
