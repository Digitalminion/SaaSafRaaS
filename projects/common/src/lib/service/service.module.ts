import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuInterface } from '../interfaces/menu.interface';
import { ShellInterface } from '../interfaces/shell.interface';
import { MenuService, MENU_CONFIG } from './menu.service';
import { ShellService, SHELL_CONFIG } from './shell.service';

@NgModule({
  imports: [ CommonModule ]
})
export class ServiceModule {
  static forRoot(menuConfig?: MenuInterface, shellConfig?:ShellInterface ): ModuleWithProviders<ServiceModule> {
    return {
      ngModule: ServiceModule,
      providers: [
        MenuService
        ,ShellService
        ,{provide: SHELL_CONFIG, useValue: shellConfig}
        ,{provide: MENU_CONFIG, useValue: menuConfig}
      ],
    };
  }
}