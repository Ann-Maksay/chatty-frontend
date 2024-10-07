import { AppRoute } from "./enums/app-route.enum";

import { RouterProvider } from "~/components/components";
import { Auth, Welcome } from "~/pages/pages";

import "~/assets/css/main.css";

function App() {
  return (
    <>
      <RouterProvider
        routes={[
          {
            children: [
              {
                element: <Auth />,
                path: AppRoute.SIGN_IN,
              },
              {
                element: <Auth />,
                path: AppRoute.SIGN_UP,
              },
              {
                element: <Auth />,
                path: AppRoute.PASSWORD_RECOVERY,
              },
              {
                element: <Welcome />,
                path: AppRoute.WELCOME,
              },
              {
                element: <Welcome />,
                path: AppRoute.ANY,
              },
            ],
          },
        ]}
      />
    </>
  );
}

export default App;
