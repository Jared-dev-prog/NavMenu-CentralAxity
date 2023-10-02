export interface INavMenuCentralAxityProps {
    description: string;
    isDarkTheme: boolean;
    environmentMessage: string;
    hasTeamsContext: boolean;
    userDisplayName: any;
    listMenu: ItemMenu[];
    getListMenu: (route: string) => any;
    collectionData: any[];
}
export interface ItemMenu extends ItemMenuView {
    ID: number;
    Orden: number;
    CategoriaPadreId: number;
    children: ItemMenu[];
}
export interface ItemMenuView {
    Title: string;
    Link: string;
    childrenList: ItemMenu[];
}
export interface collectionData {
    route: string;
}
//# sourceMappingURL=INavMenuCentralAxityProps.d.ts.map