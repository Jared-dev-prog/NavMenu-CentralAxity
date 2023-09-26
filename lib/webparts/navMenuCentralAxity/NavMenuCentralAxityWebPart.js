var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { PropertyPaneTextField, } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import * as strings from "NavMenuCentralAxityWebPartStrings";
import NavMenuCentralAxity from "./components/NavMenuCentralAxity";
import { NAME_LIST, ROUTES } from "./components/constants/routes";
import { SPHttpClient } from "@microsoft/sp-http";
var NavMenuCentralAxityWebPart = /** @class */ (function (_super) {
    __extends(NavMenuCentralAxityWebPart, _super);
    function NavMenuCentralAxityWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isDarkTheme = false;
        _this._environmentMessage = "";
        _this._listMenu = [];
        return _this;
    }
    NavMenuCentralAxityWebPart.prototype.render = function () {
        var element = React.createElement(NavMenuCentralAxity, {
            description: this.properties.description,
            isDarkTheme: this._isDarkTheme,
            environmentMessage: this._environmentMessage,
            hasTeamsContext: !!this.context.sdks.microsoftTeams,
            userDisplayName: this.context.pageContext.user.displayName,
            listMenu: this._listMenu,
        });
        ReactDom.render(element, this.domElement);
    };
    NavMenuCentralAxityWebPart.prototype.onInit = function () {
        var _this = this;
        return this._getListMenu().then(function (list) {
            _this._listMenu = list;
        });
    };
    NavMenuCentralAxityWebPart.prototype._getListMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            var listTitle, endpointList, response, dataResponse, itemsMenuFather, listMenu;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listTitle = NAME_LIST.navMenu;
                        endpointList = "".concat(ROUTES.generic).concat(ROUTES.routeListConsultatory, "/_api/web/lists/getbytitle('").concat(listTitle, "')/items");
                        return [4 /*yield*/, this.context.spHttpClient.get(endpointList, SPHttpClient.configurations.v1)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        dataResponse = _a.sent();
                        itemsMenuFather = this._getItemFatherMenu(__spreadArray([], dataResponse.value, true));
                        listMenu = this._generateListMenu(__spreadArray([], itemsMenuFather, true), __spreadArray([], dataResponse.value, true));
                        return [2 /*return*/, Promise.resolve(this._getListMenuOrder(__spreadArray([], listMenu, true)))];
                }
            });
        });
    };
    NavMenuCentralAxityWebPart.prototype._getListMenuOrder = function (dataResponse) {
        return dataResponse.length > 0
            ? dataResponse.sort(function (a, b) { return a.Orden - b.Orden; })
            : [];
    };
    NavMenuCentralAxityWebPart.prototype._generateListMenu = function (dataFather, dataResponse) {
        var _this = this;
        return dataFather.map(function (item) { return (__assign(__assign({}, item), { children: _this._getChildrenMenuById(__assign({}, item), __spreadArray([], dataResponse, true)) })); });
    };
    NavMenuCentralAxityWebPart.prototype._getItemFatherMenu = function (dataResponse) {
        var itemData = dataResponse.filter(function (item) {
            return item.CategoriaPadreId === null;
        });
        return itemData;
    };
    NavMenuCentralAxityWebPart.prototype._getChildrenMenuById = function (itemFather, dataResponse) {
        var itemData = dataResponse.filter(function (item) {
            return item.CategoriaPadreId === itemFather.ID;
        });
        return this._getListMenuOrder(__spreadArray([], itemData, true));
    };
    NavMenuCentralAxityWebPart.prototype.onThemeChanged = function (currentTheme) {
        if (!currentTheme) {
            return;
        }
        this._isDarkTheme = !!currentTheme.isInverted;
        var semanticColors = currentTheme.semanticColors;
        if (semanticColors) {
            this.domElement.style.setProperty("--bodyText", semanticColors.bodyText || null);
            this.domElement.style.setProperty("--link", semanticColors.link || null);
            this.domElement.style.setProperty("--linkHovered", semanticColors.linkHovered || null);
        }
    };
    NavMenuCentralAxityWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(NavMenuCentralAxityWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse("1.0");
        },
        enumerable: false,
        configurable: true
    });
    NavMenuCentralAxityWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription,
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField("description", {
                                    label: strings.DescriptionFieldLabel,
                                }),
                            ],
                        },
                    ],
                },
            ],
        };
    };
    return NavMenuCentralAxityWebPart;
}(BaseClientSideWebPart));
export default NavMenuCentralAxityWebPart;
//# sourceMappingURL=NavMenuCentralAxityWebPart.js.map