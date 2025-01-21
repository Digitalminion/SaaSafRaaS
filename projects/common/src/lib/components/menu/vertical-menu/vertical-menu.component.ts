import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ShellService } from '../../../service/shell.service';
import { Shell } from '../../../model/shell.model'
import { MenuService } from '../../../service/menu.service';
import { Menu } from '../../../model/menu.model';
import { MenuItemsType } from '../../../interfaces/menu.interface';
@Component({
  selector: 'dm-vertical-menu',
  standalone: true,
  imports: [
    RouterModule,
    NgClass,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VerticalMenuComponent implements OnInit {
  @Input('menuItems') menuItems!: MenuItemsType;
  @Input('menuParentId') menuParentId: any;
  parentMenu!: Array<any>;
  public shell: Shell;
  constructor(public shellService: ShellService, public menuService: MenuService) {
    this.shell = this.shellService.shell;
  }

  ngOnInit() {
    if(this.menuItems){
    this.parentMenu = this.menuItems.filter(item => item.parentId == this.menuParentId);
    }
  }

  onClick(menuId: any) {
    this.menuService.toggleMenuItem(menuId);
    this.menuService.closeOtherSubMenus(this.menuItems, menuId);
  }

}
