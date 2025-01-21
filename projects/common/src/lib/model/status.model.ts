import { StatusInterface } from '../interfaces/status.interface';

import { SetFormat } from '../utils/timestamp';

type StatusKey = "complete" | "running" | "starting" | "failed" | "none";

export class StatusModel implements StatusInterface {
  private _id!: string;
  private _entity_id!: string;
  private _organization_id!: string;
  private _account_id!: string;
  private _request_id!: string;
  private _status!: string;
  private _message!: string;
  private _starttime!: string;
  private _endtime!: string;
  private _created!: string;
  private _updated!: string;
  private _deleted!: string;

  constructor(status: StatusInterface) {
    this.id = status.id;
    this.entity_id = status.entity_id;
    this.organization_id = status.organization_id;
    this.account_id = status.account_id;
    this.request_id = status.request_id;
    this.status = status.status as StatusKey;
    this.message = status.message;
    this.starttime = status.starttime;
    this.endtime = status.endtime;
    this.created = status.created;
    this.updated = status.updated;
    this.deleted = status.deleted;
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

  get status(): string {
    return this._status;
  }
  set status(value: StatusKey) {
    const displayStatus: Record<StatusKey, string> = {
      complete: "Done",
      running: "Running",
      starting: "Starting",
      failed: "Failed",
      none: "Not Started",
    };
    this._status = displayStatus[value];
  }

  get message(): string {
    return this._message;
  }
  set message(value: string) {
    this._message = value;
  }

  get starttime(): string {
    return this._starttime;
  }
  set starttime(value: string) {
    this._starttime = value;
  }

  get endtime(): string {
    return this._endtime;
  }
  set endtime(value: string) {
    this._endtime = value;
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