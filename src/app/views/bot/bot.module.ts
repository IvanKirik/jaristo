import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BotRoutingModule} from './bot-routing.module';
import {LayoutBotComponent} from './layout-bot/layout-bot.component';
import {HeaderComponent} from './layout-bot/header/header.component';
import {FooterComponent} from './layout-bot/footer/footer.component';
import {SidebarComponent} from "./sidebar/sidebar.component";
import { InfoComponent } from './info/info.component';
import {RouterModule} from "@angular/router";
import { SettingsComponent } from './settings/settings.component';
import { RoleComponent } from './role/role.component';
import { CommandsComponent } from './commands/commands.component';
import { TwitchComponent } from './twitch/twitch.component';
import { EmbeddingComponent } from './embedding/embedding.component';
import {NgbAccordionModule} from "@ng-bootstrap/ng-bootstrap";
import { HelloComponent } from './hello/hello.component';
import {SharedModule} from "../../shared/shared.module";
import {StreamsComponent} from "./info/streams/streams.component";



@NgModule({
  declarations: [
    LayoutBotComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    InfoComponent,
    SettingsComponent,
    RoleComponent,
    CommandsComponent,
    TwitchComponent,
    EmbeddingComponent,
    HelloComponent,
    StreamsComponent

  ],
    imports: [
        CommonModule,
        RouterModule,
        BotRoutingModule,
        NgbAccordionModule,
        SharedModule
    ],
})
export class BotModule {
}
