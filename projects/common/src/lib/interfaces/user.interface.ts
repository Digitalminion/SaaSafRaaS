export interface UserInterface {
    active: boolean;
    identifier: string;
    first_name: string;
    last_name: string;
    email: string;
    verified: boolean;
    user_pool: string;
    groups: any;
    entities: any;
    created: string;
    updated: string;
}