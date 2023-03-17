import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InfoComponent} from "./info/info.component";
import {SettingsComponent} from "./settings/settings.component";
import {RoleComponent} from "./role/role.component";
import {CommandsComponent} from "./commands/commands.component";
import {TwitchComponent} from "./twitch/twitch.component";
import {EmbeddingComponent} from "./embedding/embedding.component";
import {HelloComponent} from "./hello/hello.component";

const routes: Routes = [
  {path: 'info', component: InfoComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'role', component: RoleComponent},
  {path: 'commands', component: CommandsComponent},
  {path: 'twitch', component: TwitchComponent},
  {path: 'embedding', component: EmbeddingComponent},
  {path: 'hello', component: HelloComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BotRoutingModule { }
