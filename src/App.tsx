import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AppRoute } from "./enums/app-route.enum";

import { RouterProvider } from "~/components/components";
import { Auth, Welcome } from "~/pages/pages";

import "~/assets/css/main.css";

function App() {
  // const [data, setData] = useState<any>(null);
  // const apiUrl = import.meta.env.VITE_API_URL;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`${apiUrl}/posts/1`);
  //       setData(response.data);
  //     } catch (error: any) {
  //       console.error(error.message);
  //     }
  //   };

  //   fetchData();
  // }, [apiUrl]);

  // const { control } = useForm({
  //   defaultValues: {
  //     value: "",
  //   },
  //   mode: "onChange",
  // });

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
