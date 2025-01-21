import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';

import { Shell } from '../model/shell.model';
import { ShellInterface } from '../interfaces/shell.interface';

export const SHELL_CONFIG = new InjectionToken<ShellInterface>('shell-config-object SHELL_CONFIG');


@Injectable({
  providedIn: 'root'
})
export class ShellService {
  constructor(
    @Optional() @Inject(SHELL_CONFIG) public instance: ShellInterface
  ) { }

  public get shell(): Shell {
    return this.instance;
  }


}
