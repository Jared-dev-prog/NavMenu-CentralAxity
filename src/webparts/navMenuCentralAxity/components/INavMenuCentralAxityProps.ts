export interface INavMenuCentralAxityProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  listMenu: ItemMenu[];
}

export interface ItemMenu extends ItemMenuView {
  ID: number;
  Orden: number;
  CategoriaPadreId: number;
  children: ItemMenu[];
  AbrirPagNueva: boolean;
}
export interface ItemMenuView {
  Title: string;
  Link: string;
  childrenList: ItemMenu[];
  abrirPagNueva: boolean;
}

export interface collectionData {
  route: string;
}
