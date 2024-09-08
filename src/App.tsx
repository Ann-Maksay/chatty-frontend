import axios from "axios";
import { useEffect, useState } from "react";

import { Button } from "~/components/components";

import "~/assets/css/main.css";

function App() {
  const [data, setData] = useState<any>(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/posts/1`);
        setData(response.data);
      } catch (error: any) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [apiUrl]);

  return (
    <>
      <h1>Chatty</h1>

      {/* all this data is only for testing purposes and may be deleted or commented on as needed */}

      <div>
        <h1>API Data:</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>

      <div className="testContainer testContainer--white">
        <Button label="Send" style="primary" />
      </div>
      <div className="testContainer">
        <Button label="Sign in" style="welcome" />
      </div>
    </>
  );
}

export default App;
