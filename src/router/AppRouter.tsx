import { Route, Routes } from "react-router";
import { routes } from "./routes";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({ path, Component }) =>
                <Route
                    key={path}
                    path={path}
                    element={<Component />}
                />
            )}
        </Routes>
    )
};

export default AppRouter;
