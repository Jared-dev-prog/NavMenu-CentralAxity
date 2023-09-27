import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneButton,
  PropertyPaneButtonType,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IReadonlyTheme } from "@microsoft/sp-component-base";
import NavMenuCentralAxity from "./components/NavMenuCentralAxity";
import {
  INavMenuCentralAxityProps,
  ItemMenu,
} from "./components/INavMenuCentralAxityProps";
import { NAME_LIST } from "./components/constants/routes";
import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
export interface INavMenuCentralAxityWebPartProps {
  description: string;
  textInput: string;
}
export default class NavMenuCentralAxityWebPart extends BaseClientSideWebPart<INavMenuCentralAxityWebPartProps> {
  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = "";
  private _listMenu: ItemMenu[] = [];

  public render(): void {
    const element: React.ReactElement<INavMenuCentralAxityProps> =
      React.createElement(NavMenuCentralAxity, {
        description: this.properties.textInput,
        isDarkTheme: this._isDarkTheme,
        environmentMessage: this._environmentMessage,
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName,
        listMenu: this._listMenu,
      });

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    return Promise.resolve();
  }

  private async _getListMenu(): Promise<ItemMenu[]> {
    const listTitle = NAME_LIST.navMenu;
    const endpointList = `${this.properties.textInput}/_api/web/lists/getbytitle('${listTitle}')/items`;
    const response: SPHttpClientResponse = await this.context.spHttpClient.get(
      endpointList,
      SPHttpClient.configurations.v1
    );
    const dataResponse = await response.json();
    const itemsMenuFather = this._getItemFatherMenu([...dataResponse.value]);
    const listMenu = this._generateListMenu(
      [...itemsMenuFather],
      [...dataResponse.value]
    );
    return Promise.resolve(this._getListMenuOrder([...listMenu]));
  }
  private _getListMenuOrder(dataResponse: ItemMenu[]): ItemMenu[] {
    return dataResponse.length > 0
      ? dataResponse.sort((a, b) => a.Orden - b.Orden)
      : [];
  }
  private _generateListMenu(
    dataFather: ItemMenu[],
    dataResponse: ItemMenu[]
  ): ItemMenu[] {
    return dataFather.map((item: ItemMenu) => ({
      ...item,
      children: this._getChildrenMenuById({ ...item }, [...dataResponse]),
    }));
  }
  private _getItemFatherMenu(dataResponse: ItemMenu[]): ItemMenu[] {
    const itemData = dataResponse.filter((item: ItemMenu) => {
      return item.CategoriaPadreId === null;
    });
    return itemData;
  }
  private _getChildrenMenuById(
    itemFather: ItemMenu,
    dataResponse: ItemMenu[]
  ): ItemMenu[] {
    const itemData = dataResponse.filter((item: ItemMenu) => {
      return item.CategoriaPadreId === itemFather.ID;
    });
    return this._getListMenuOrder([...itemData]);
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._isDarkTheme = !!currentTheme.isInverted;
    const { semanticColors } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty(
        "--bodyText",
        semanticColors.bodyText || null
      );
      this.domElement.style.setProperty("--link", semanticColors.link || null);
      this.domElement.style.setProperty(
        "--linkHovered",
        semanticColors.linkHovered || null
      );
    }
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }
  private onButtonClick(): Promise<void> {
    return this._getListMenu().then((list) => {
      this._listMenu = list;
      this.render();
    });
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "Configuración del Web Part",
          },

          groups: [
            {
              groupName: "Opciones",

              groupFields: [
                PropertyPaneTextField("description", {
                  label: "Descripción",
                }),

                PropertyPaneTextField("textInput", {
                  label: "Ruta (al sitio donde está la lista)",
                }),
                PropertyPaneButton("myButton", {
                  text: "Aplicar",
                  buttonType: PropertyPaneButtonType.Primary,
                  onClick: this.onButtonClick.bind(this),
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
