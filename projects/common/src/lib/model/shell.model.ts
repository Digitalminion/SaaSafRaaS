import { ShellInterface } from "../interfaces/shell.interface";

export class Shell implements ShellInterface{
    constructor(public name: string,
      public loadingSpinner: boolean,
      public fixedHeader: boolean,
      public fixedSidenav: boolean,
      public fixedFooter: boolean,
      public sidenavIsOpened: boolean,
      public sidenavIsPinned: boolean,
      public menu: string,
      public menuType: string,
      public theme: string,
      public rtl: boolean) { }
  }