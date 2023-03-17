import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-embedding',
  templateUrl: './embedding.component.html',
  styleUrls: ['./embedding.component.scss']
})
export class EmbeddingComponent implements OnInit {

  public stateWindowEmbedding: boolean = true;
  public stateWindowYourEmbedding: boolean = true;
  public stateWindowMessage: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
