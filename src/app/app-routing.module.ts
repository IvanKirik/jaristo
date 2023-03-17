import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./views/home/layout/layout.component";
import {MainComponent} from "./views/home/main/main.component";
import {ServerComponent} from "./views/home/server/server.component";
import {LayoutBotComponent} from "./views/bot/layout-bot/layout-bot.component";


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', component: MainComponent},
      {path: 'server', component: ServerComponent}
    ]
  },
  {
    path: 'bot',
    component: LayoutBotComponent,
    children: [
      {
        path: '', loadChildren: () => import('./views/bot/bot.module').then(m => m.BotModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
