import { FindingInterface } from '../interfaces/finding.interface';
import { SetFormat } from '../utils/timestamp';

export class FindingModel implements FindingInterface {
  private _id!: string;
  private _entity_id!: string;
  private _organization_id!: string;
  private _account_id!: string;
  private _request_id!: string;
  private _service!: string;
  private _platform!: string;
  private _version!: string;
  private _notes!: string;
  private _run_datetime!: string;
  private _created!: string;
  private _updated!: string;
  private _deleted!: string;
  private _payload!: string;

  constructor(finding: FindingInterface) {
    this.id = finding.id;
    this.entity_id = finding.entity_id;
    this.organization_id = finding.organization_id;
    this.account_id = finding.account_id;
    this.request_id = finding.request_id;
    this.service = finding.service;
    this.platform = finding.platform;
    this.version = finding.version;
    this.notes = finding.notes;
    this.run_datetime = finding.run_datetime;
    this.created = finding.created;
    this.updated = finding.updated;
    this.deleted = finding.deleted;
    this.payload = finding.payload;
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
  
  get organization_id(): string {
    return this._organization_id;
  }

  set organization_id(value: string) {
    this._organization_id = value;
  }

  get account_id(): string {
    return this._account_id;
  }

  set account_id(value: string) {
    this._account_id = value;
  }

  get request_id(): string {
    return this._request_id;
  }

  set request_id(value: string) {
    this._request_id = value;
  }

  get service(): string {
    return this._service;
  }

  set service(value: string) {
    this._service = value;
  }

  get platform(): string {
    return this._platform;
  }

  set platform(value: string) {
    this._platform = value;
  }
    
  get version(): string {
    return this._version;
  }

  set version(value: string) {
    this._version = value;
  }
  
  get notes(): string {
    return this._notes;
  }

  set notes(value: string) {
    this._notes = value;
  }

  get run_datetime(): string {
    return this._run_datetime;
  }

  set run_datetime(value: string) {
    this._run_datetime = this.setTimestampFormatter(value);
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

  get payload(): string {
    return this._payload;
  }

  set payload(value: string) {
    this._payload = value;
  }
}