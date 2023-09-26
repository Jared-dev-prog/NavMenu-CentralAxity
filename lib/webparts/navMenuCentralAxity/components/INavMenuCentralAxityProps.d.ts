export interface INavMenuCentralAxityProps {
    description: string;
    isDarkTheme: boolean;
    environmentMessage: string;
    hasTeamsContext: boolean;
    userDisplayName: string;
    listMenu: ItemMenu[];
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
//# sourceMappingURL=INavMenuCentralAxityProps.d.ts.map