import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { ShellService } from '../../service/shell.service';
import { Shell } from '../../model/shell.model'
import { MenuService } from '../../service/menu.service';
import { Menu } from '../../model/menu.model';

import { VerticalMenuComponent } from '../menu/vertical-menu/vertical-menu.component';
import { MenuItemsType } from '../../interfaces/menu.interface';

@Component({
  selector: 'dm-sidenav',
  standalone: true,
  imports: [
    MatDividerModule, 
    VerticalMenuComponent
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidenavComponent implements OnInit {
  public menuItems!: MenuItemsType;
  public shell: Shell;
  constructor(public shellService: ShellService, public menuService: MenuService) {
    this.shell = this.shellService.shell;
  }

  ngOnInit() {
    this.menuItems = this.menuService.verticalMenuItems;
  }

  public closeSubMenus() {
    let menu = document.getElementById("vertical-menu");
    if (menu) {
      for (let i = 0; i < menu.children[0].children.length; i++) {
        let child = menu.children[0].children[i];
        if (child) {
          if (child.children[0].classList.contains('expanded')) {
            child.children[0].classList.remove('expanded');
            child.children[1].classList.remove('show');
          }
        }
      }
    }
  }

}
