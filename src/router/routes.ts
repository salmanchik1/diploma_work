import MainPage from "../pages/MainPage/MainPage";
import { ASK_US_PAGE_ROUTE, CART_PAGE_ROUTE, CATALOG_PAGE_ROUTE, DETAIL_PAGE_ROUTE, MAIN_PAGE_ROUTE } from "./consts";
import DetailPage from "../pages/DetailPage/DetailPage";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import AskUsPage from "../pages/AskUsPage/AskUsPage";
import { RouteType } from "../types/RouteType";
import CartPage from "../pages/CartPage/CartPage";

export const routes: RouteType[] = [
    {
        path: MAIN_PAGE_ROUTE,
        Component: MainPage,
    },
    {
        path: DETAIL_PAGE_ROUTE + "/:id",
        Component: DetailPage,
    },
    {
        path: ASK_US_PAGE_ROUTE,
        Component: AskUsPage,
    },
    {
        path: CATALOG_PAGE_ROUTE,
        Component: CatalogPage,
    },
    {
        path: CART_PAGE_ROUTE,
        Component: CartPage,
    }
];
