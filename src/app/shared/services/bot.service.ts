import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BotService {

  private openSidebarSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public openSidebar$: Observable<boolean> = this.openSidebarSubject.asObservable();

  constructor() { }

  setOpenSidebar(newValue: boolean) {
    this.openSidebarSubject.next(newValue);
  }
}
