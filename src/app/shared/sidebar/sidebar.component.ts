import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

declare const __moduleName: string;

@Component({
  moduleId: __moduleName,
  selector: 'sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class SidebarComponent { }
