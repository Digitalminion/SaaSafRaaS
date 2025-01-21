import { UserInterface } from '../interfaces/user.interface';

import { SetFormat } from '../utils/timestamp';

export class UserModel implements UserInterface {
  private _active!: boolean;
  private _identifier!: string;
  private _first_name!: string;
  private _last_name!: string;
  private _email!: string;
  private _verified!: boolean;
  private _user_pool!: string;
  private _groups: any[] = [];
  private _entities: any[] = [];
  private _created!: string;
  private _updated!: string;

  constructor(user: UserInterface) {
    this.active = user.active;
    this.identifier = user.identifier;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.verified = user.verified;
    this.user_pool = user.user_pool;
    this.groups = user.groups || [];
    this.entities = user.entities || [];
    this.created = user.created;
    this.updated = user.updated;
  }
  
  private setTimestampFormatter(value: string): string {
    if (value != "") {
      const formattedValue = SetFormat(value);
      return formattedValue;
    } else {
      // Value is empty or null, don't try to transform it.
      return value;
    }
  }

  get active(): boolean {
    return this._active;
  }
  set active(value: boolean) {
    this._active = value;
  }

  get identifier(): string {
    return this._identifier;
  }
  set identifier(value: string) {
    this._identifier = value;
  }

  get first_name(): string {
    return this._first_name;
  }
  set first_name(value: string) {
    this._first_name = value;
  }

  get last_name(): string {
    return this._last_name;
  }
  set last_name(value: string) {
    this._last_name = value;
  }

  get email(): string {
    return this._email;
  }
  set email(value: string) {
    this._email = value;
  }

  get verified(): boolean {
    return this._verified;
  }
  set verified(value: boolean) {
    this._verified = value;
  }

  get user_pool(): string {
    return this._user_pool;
  }
  set user_pool(value: string) {
    this._user_pool = value;
  }

  get groups(): any[] {
    return this._groups;
  }
  set groups(value: any[]) {
    this._groups = value;
  }

  get entities(): any[] {
    return this._entities;
  }
  set entities(value: any[]) {
    this._entities = value;
  }

  get created(): string {
    return this._created;
  }
  set created(value: string) {
    this._created = this.setTimestampFormatter(value);
  }

  get updated(): string {
    return this._updated;
  }
  set updated(value: string) {
    this._updated = this.setTimestampFormatter(value);
  }
}