import "./App.scss";
import "boxicons/css/boxicons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Blank from "./pages/Blank";
import NewService from "./pages/NewService";
import ChangeService from "./pages/ChangeService";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Blank />} />
          <Route path="/started" element={<Blank />} />
          <Route path="/calendar" element={<Blank />} />
          <Route path="/user" element={<Blank />} />
          <Route
            path="/service"
            element={
              <ChangeService
                firstInfo={{
                  serviceName: "1",
                  serviceDescription: "2",
                  relatedCodeBase: "3",
                  serviceGrouping: "Volvo",
                  serviceType: "Client API",
                  deploymentPlatform: "6",
                }}
                licensingInfo={{
                  0: {
                    licenseName: "10",
                    licenseDescription: "11",
                    subscriptionType: "12",
                    renewalConditions: "13",
                    renewalPortal: "14",
                    expiryDate: "2015-12-15",
                  },
                  1: {
                    licenseDescription: "17",
                    licenseName: "16",
                    subscriptionType: "One time",
                    renewalConditions: "19",
                    renewalPortal: "21",
                    expiryDate: "2022-02-22",
                  },
                }}
                methodInfo={{
                  connect: {},
                  delete: {},
                  get: {},
                  head: {},
                  options: {},
                  patch: {},
                  post: {},
                  put: {
                    rootEndPointAndPath: "23",
                    queryParameters: "24",
                    headers: "25",
                    body: "26",
                    authentication: "27",
                    sampleRequest: "28",
                    relatedCodeBase: "29",
                  },
                  trace: {
                    rootEndPointAndPath: "30",
                    queryParameters: "31",
                    headers: "32",
                    body: "33",
                    authentication: "34",
                    sampleRequest: "35",
                    relatedCodeBase: "36",
                  },
                }}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
