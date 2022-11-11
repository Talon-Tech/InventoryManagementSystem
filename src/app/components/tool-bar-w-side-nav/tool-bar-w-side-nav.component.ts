import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tool-bar-w-side-nav',
  templateUrl: './tool-bar-w-side-nav.component.html',
  styleUrls: ['./tool-bar-w-side-nav.component.scss']
})
export class ToolBarWSideNavComponent implements OnInit {
  isExpanded: any;
  @Output() sidenavClose = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}


