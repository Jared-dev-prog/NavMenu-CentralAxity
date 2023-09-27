import { Version } from "@microsoft/sp-core-library";
import { IPropertyPaneConfiguration } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IReadonlyTheme } from "@microsoft/sp-component-base";
export interface INavMenuCentralAxityWebPartProps {
    description: string;
    textInput: string;
}
export default class NavMenuCentralAxityWebPart extends BaseClientSideWebPart<INavMenuCentralAxityWebPartProps> {
    private _isDarkTheme;
    private _environmentMessage;
    private _listMenu;
    render(): void;
    protected onInit(): Promise<void>;
    private _getListMenu;
    private _getListMenuOrder;
    private _generateListMenu;
    private _getItemFatherMenu;
    private _getChildrenMenuById;
    protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    private onButtonClick;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=NavMenuCentralAxityWebPart.d.ts.map