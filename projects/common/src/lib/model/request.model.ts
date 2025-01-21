import { RequestInterface } from '../interfaces/request.interface';

import { SetFormat } from '../utils/timestamp';

type StatusKey = "complete" | "running" | "starting" | "failed" | "none";


export class RequestModel implements RequestInterface {
  private _id!: string;
  private _entity_id!: string;
  private _organization_id!: string;
  private _account_id!: string;
  private _cloud!: string;
  private _friendly_account_name!: string;
  private _region_name!: string;
  private _bastion_arn!: string;
  private _access_arn!: string;
  private _bucket!: string;
  private _bucket_path!: string;
  private _enumeration_subscription!: string;
  private _enumeration_targets!: string;
  private _analyzer_subscription!: string;
  private _verbose!: string;
  private _findings!: string;
  private _EnumeratorObj!: string;
  private _runstartdate!: string;
  private _runenddate!: string;
  private _created!: string;
  private _updated!: string;
  private _deleted!: string;
  private _observation_result_file!: string;
  private _finding_result_file!: string;
  private _observation_result_log!: string;
  private _finding_result_log!: string;
  
  // Custom extended attributes only used by the front-end
  private _runstartdateunix!: string; 
  private _runenddateunix!: string; 
  private _createdunix!: string; 
  private _updatedunix!: string; 
  private _deletedunix!: string; 
  private _status!: string;
  private _showSpinner!: boolean;

  constructor(request: RequestInterface) {
    this.id = request.id;
    this.entity_id = request.entity_id;
    this.organization_id = request.organization_id;
    this.account_id = request.account_id;
    this.cloud = request.cloud;
    this.friendly_account_name = request.friendly_account_name;
    this.region_name = request.region_name;
    this.bastion_arn = request.bastion_arn;
    this.access_arn = request.access_arn;
    this.bucket = request.bucket;
    this.bucket_path = request.bucket_path;
    this.enumeration_subscription = request.enumeration_subscription;
    this.enumeration_targets = request.enumeration_targets;
    this.analyzer_subscription = request.analyzer_subscription;
    this.verbose = request.verbose;
    this.findings = request.findings;
    this.EnumeratorObj = request.EnumeratorObj;
    this.runstartdate = request.runstartdate;
    this.runstartdateunix = request.runstartdate;
    this.runenddate = request.runenddate;
    this.runenddateunix = request.runenddate;
    this.created = request.created;
    this.createdunix = request.created;
    this.updated = request.updated;
    this.updatedunix = request.updated;
    this.deleted = request.deleted;
    this.deletedunix = request.deleted;
    this.observation_result_file = request.observation_result_file;
    this.finding_result_file = request.finding_result_file;
    this.observation_result_log = request.observation_result_log;
    this.finding_result_log = request.finding_result_log;
    this.status = request.status as StatusKey;
    this.showSpinner = request.showSpinner;
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

  get cloud(): string {
    return this._cloud;
  }

  set cloud(value: string) {
    this._cloud = value;
  }

  get friendly_account_name(): string {
    return this._friendly_account_name;
  }

  set friendly_account_name(value: string) {
    this._friendly_account_name = value;
  }

  get region_name(): string {
    return this._region_name;
  }

  set region_name(value: string) {
    this._region_name = value;
  }

  get bastion_arn(): string {
    return this._bastion_arn;
  }

  set bastion_arn(value: string) {
    this._bastion_arn = value;
  }

  get access_arn(): string {
    return this._access_arn;
  }

  set access_arn(value: string) {
    this._access_arn = value;
  }
  
  get bucket(): string {
    return this._bucket;
  }

  set bucket(value: string) {
    this._bucket = value;
  }
  
  get bucket_path(): string {
    return this._bucket_path;
  }

  set bucket_path(value: string) {
    this._bucket_path = value;
  }
  
  get enumeration_subscription(): string {
    return this._enumeration_subscription;
  }

  set enumeration_subscription(value: string) {
    this._enumeration_subscription = value;
  }
  
  get enumeration_targets(): string {
    return this._enumeration_targets;
  }

  set enumeration_targets(value: string) {
    this._enumeration_targets = value;
  }
  
  get analyzer_subscription(): string {
    return this._analyzer_subscription;
  }

  set analyzer_subscription(value: string) {
    this._analyzer_subscription = value;
  }
  
  get verbose(): string {
    return this._verbose;
  }

  set verbose(value: string) {
    this._verbose = value;
  }
  
  get findings(): any {
    return this._findings;
  }

  set findings(value: any) {
    this._findings = value;
  }
  
  get EnumeratorObj(): string {
    return this._EnumeratorObj;
  }

  set EnumeratorObj(value: string) {
    this._EnumeratorObj = value;
  }
  
  get runstartdate(): string {
    return this._runstartdate;
  }

  set runstartdate(value: string) {
    this._runstartdate = this.setTimestampFormatter(value);
  }
  
  get runstartdateunix(): string {
    return this._runstartdateunix;
  }

  set runstartdateunix(value: string) {
    this._runstartdateunix = value;
  }
  
  get runenddate(): string {
    return this._runenddate;
  }

  set runenddate(value: string) {
    this._runenddate = this.setTimestampFormatter(value);
  }
  
  get runenddateunix(): string {
    return this._runenddateunix;
  }

  set runenddateunix(value: string) {
    this._runenddateunix = value;
  }
  
  get created(): string {
    return this._created;
  }

  set created(value: string) {
    this._created = this.setTimestampFormatter(value);
  }
  
  get createdunix(): string {
    return this._createdunix;
  }

  set createdunix(value: string) {
    this._createdunix = value;
  }
  
  get updated(): string {
    return this._updated;
  }

  set updated(value: string) {
    this._updated = this.setTimestampFormatter(value);
  }
  
  get updatedunix(): string {
    return this._updatedunix;
  }

  set updatedunix(value: string) {
    this._updatedunix = value;
  }
  
  get deleted(): string {
    return this._deleted;
  }

  set deleted(value: string) {
    this._deleted = this.setTimestampFormatter(value);
  }
  
  get deletedunix(): string {
    return this._deletedunix;
  }

  set deletedunix(value: string) {
    this._deletedunix = value;
  }
  
  get observation_result_file(): string {
    return this._observation_result_file;
  }

  set observation_result_file(value: string) {
    this._observation_result_file = value;
  }
  
  get finding_result_file(): string {
    return this._finding_result_file;
  }

  set finding_result_file(value: string) {
    this._finding_result_file = value;
  }
  
  get observation_result_log(): string {
    return this._observation_result_log;
  }

  set observation_result_log(value: string) {
    this._observation_result_log = value;
  }
  
  get finding_result_log(): string {
    return this._finding_result_log;
  }

  set finding_result_log(value: string) {
    this._finding_result_log = value;
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
  
  get showSpinner(): boolean {
    return this._showSpinner;
  }

  set showSpinner(value: boolean) {
    this._showSpinner = value;
  }
}