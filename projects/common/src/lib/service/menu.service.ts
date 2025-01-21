import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Location } from '@angular/common';

import { MenuInterface, MenuItemsInterface, MenuItemsType } from '../interfaces/menu.interface';

export const MENU_CONFIG = new InjectionToken<MenuInterface>('menu-config-object MENU_CONFIG');

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private _verticalMenuItems!: MenuItemsInterface| null;
  private _horizontalMenuItems!: MenuItemsInterface| null;
  constructor(
    @Optional() @Inject(MENU_CONFIG) public config: MenuInterface
    , private location: Location) {
      this.verticalMenuItems = config.vertical;
      this.verticalMenuItems = config.horizontal;
     }

  get verticalMenuItems(): MenuItemsType {
    return this._verticalMenuItems;
  }
  set verticalMenuItems(items:MenuItemsType ){
    this._verticalMenuItems = items
  }

  get horizontalMenuItems(): MenuItemsType {
    return this._horizontalMenuItems;
  }
  set horizontalMenuItems(items: MenuItemsType){
    this._horizontalMenuItems = items;
  }

  expandActiveSubMenu(menu: MenuItemsType): void {
    if(menu){
      const url = this.location.path();
      const routerLink = url;
      const activeMenuItem = menu.find((item) => item.routerLink === routerLink);
      if (!activeMenuItem) {
        return;
      }
      let menuItem = activeMenuItem;
      while (menuItem.parentId !== 0) {
        const parentMenuItem = menu.find((item) => item.id === menuItem.parentId);
        if (!parentMenuItem) {
          break;
        }
        menuItem = parentMenuItem;
        this.toggleMenuItem(String(menuItem.id));
      }
    }
  }

  toggleMenuItem(menuId: string): void {
    const menuItem = document.getElementById(`menu-item-${menuId}`);
    const subMenu = document.getElementById(`sub-menu-${menuId}`);
    if (!subMenu) {
      return;
    }
    subMenu.classList.toggle('show');
    menuItem?.classList.toggle('expanded');
  }

  closeOtherSubMenus(menu: MenuItemsType, menuId: number): void {
    if(menu){
    const currentMenuItem = menu.find((item) => item.id === menuId);
    if (!currentMenuItem || currentMenuItem.parentId !== 0 || currentMenuItem.target) {
      return;
    }
    menu.forEach((item) => {
      if (item.id !== menuId) {
        const subMenu = document.getElementById(`sub-menu-${item.id}`);
        const menuItem = document.getElementById(`menu-item-${item.id}`);
        if (subMenu?.classList.contains('show')) {
          subMenu.classList.remove('show');
          menuItem?.classList.remove('expanded');
        }
      }
    });
  }
  }

  closeAllSubMenus() {
    const menu = document.querySelector("#vertical-menu .ng-scroll-content");
    if (!menu) return;
    const submenuItems = Array.from(menu.children[0].children);
    for (const item of submenuItems) {
      const submenu = item.children[1];
      if (!submenu) continue;
      const isExpanded = submenu.previousElementSibling?.classList.contains("expanded");
      if (isExpanded) {
        submenu.previousElementSibling?.classList.remove("expanded");
        submenu.classList.remove("show");
      }
    }
  }


}
