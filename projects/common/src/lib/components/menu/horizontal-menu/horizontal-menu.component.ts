import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgClass } from '@angular/common';
import { ShellService } from '../../../service/shell.service';
import { Shell } from '../../../model/shell.model'
import { MenuService } from '../../../service/menu.service';
import { Menu } from '../../../model/menu.model';
import { MenuItemsType } from '../../../interfaces/menu.interface';

@Component({
  selector: 'dm-horizontal-menu',
  standalone: true,
  imports: [
    RouterModule,
    NgClass,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HorizontalMenuComponent implements OnInit {
  @Input('menuParentId') menuParentId: any;
  public menuItems!: MenuItemsType;
  public baseMenuItems!: MenuItemsType;
  public shell: Shell;
  constructor(public shellService: ShellService, public menuService: MenuService) {
    this.shell = this.shellService.shell;
  }

  ngOnInit() {
    this.baseMenuItems = this.menuService.horizontalMenuItems;
    if(this.baseMenuItems){
      this.menuItems = this.baseMenuItems.filter(item => item.parentId == this.menuParentId);
    }
  }

}