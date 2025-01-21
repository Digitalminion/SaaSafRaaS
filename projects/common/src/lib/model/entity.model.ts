import { EntityInterface } from '../interfaces/entity.interface';
import { SetFormat } from '../utils/timestamp';

export class EntityModel implements EntityInterface {
    private _id!: string;
    private _name!: string;
    private _description!: string;
    private _bastion_arn!: string;
    private _tags: any = [];
    private _created!: string;
    private _updated!: string;
    private _deleted!: string;

    constructor(entity: EntityInterface) {
        this.id = entity.id;
        this.name = entity.name;
        this.description = entity.description;
        this.bastion_arn = entity.bastion_arn;
        this.tags = entity.tags;
        this.created = entity.created;
        this.updated = entity.updated;
        this.deleted = entity.deleted;
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

    get bastion_arn(): string {
      return this._bastion_arn;
    }

    set bastion_arn(value: string) {
      this._bastion_arn = value;
    }

    get tags(): any {
      return this._tags;
    }

    set tags(value: any) {
      this._tags = value;
    }

    get created(): string {
      return this._created
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