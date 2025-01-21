
export interface MenuItemInterface {
    id: number;
    title: string;
    routerLink: string | null;
    href: string | null;
    icon: string;
    target: string | null;
    hasSubMenu: boolean;
    parentId: number;
}
export type MenuItemsInterface = MenuItemInterface[]
export type MenuItemsType = MenuItemsInterface | null;
export type VerticalMenuItemsInterface = MenuItemInterface[]
export type HorizontalMenuItemsInterface = MenuItemInterface[]

export interface MenuInterface {
    horizontal: MenuItemsInterface | null;
    vertical: MenuItemsInterface | null;
} 