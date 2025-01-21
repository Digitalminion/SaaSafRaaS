import { OrganizationInterface } from '../interfaces/organization.interface';

import { SetFormat } from '../utils/timestamp';

export class OrganizationModel implements OrganizationInterface {
  private _id!: string;
  private _entity_id!: string;
  private _name!: string;
  private _description!: string;
  private _platform_type!: string;
  private _tags: any = [];
  private _created!: string;
  private _updated!: string;
  private _deleted!: string;

  constructor(organization: OrganizationInterface) {
    this.id = organization.id;
    this.entity_id = organization.entity_id;
    this.name = organization.name;
    this.description = organization.description;
    this.platform_type = organization.platform_type;
    this.tags = organization.tags;
    this.created = organization.created;
    this.updated = organization.updated;
    this.deleted = organization.deleted;
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

  get id(): string {
    return this._id;
  }
  
  set id(value: string) {
    this._id = value;
  }

  get entity_id(): string {
    return this._entity_id;
  }
  
  set entity_id(value: string) {
    this._entity_id = value;
  }

  get name(): string {
    return this._name;
  }
  
  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }
  
  set description(value: string) {
    this._description = value;
  }

  get platform_type(): string {
    return this._platform_type;
  }
  
  set platform_type(value: string) {
    this._platform_type = value;
  }

  get tags(): any {
    return this._tags;
  }
  
  set tags(value: any) {
    this._tags = value;
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

  get deleted(): string {
    return this._deleted;
  }
  
  set deleted(value: string) {
    this._deleted = this.setTimestampFormatter(value);
  }
}