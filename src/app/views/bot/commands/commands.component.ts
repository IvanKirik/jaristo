import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss']
})
export class CommandsComponent implements OnInit {

  commands: {name: string, description: string, vision: boolean }[] = [
    {
      name: '!help',
      description: 'Выводит список доступных команд',
      vision: false
    },
    {
      name: '!userinfo [user]',
      description: 'Выводит список доступных команд',
      vision: false
    },
    {
      name: '!kick [user] [reason]',
      description: 'Выводит список доступных команд',
      vision: false
    },
    {
      name: '!clear [count]',
      description: 'Выводит список доступных команд',
      vision: false
    },
    {
      name: '!ban [user] [reason]',
      description: 'Выводит список доступных команд',
      vision: false
    },
    {
      name: '!reload [cog]',
      description: 'Выводит список доступных команд',
      vision: false
    }
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
