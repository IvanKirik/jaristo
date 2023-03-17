import { Component, OnInit } from '@angular/core';
import {BotService} from "../../../../shared/services/bot.service";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public sidebarOpen: boolean = false;

  constructor(private botService: BotService) { }

  ngOnInit(): void {
  }

  public onSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    this.botService.setOpenSidebar(this.sidebarOpen)
  }

}
