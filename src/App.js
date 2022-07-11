import "./App.scss";
import "boxicons/css/boxicons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import ProfileContent from "./pages/ProfileContent";
import AllServices from "./pages/AllServices";
import ManageService from "./pages/ManageService";
import ChangeService from "./pages/ChangeService";

import NewService from "./pages/NewService";

import React, { useState } from "react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import Button from "react-bootstrap/Button";

import { PageLayout } from "./components/PageLayout";

function App() {
  return (
    <PageLayout>
      <AuthenticatedTemplate>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<ProfileContent />} />
              <Route
                path="/allservices"
                element={
                  <AllServices
                    groups={{
                      Youtube: {
                        videoSearch: {
                          name: "Video Search",
                          description:
                            "This is a short description of the product",
                          type: "Database",
                          link: "google.com",
                          cycle: "V1",
                          state: "Production",
                        },
                        commentRank: {
                          name: "Comment Search",
                          description:
                            "This is a short description of the Comment Search product. This is a short description of the Comment Search product. This is a short description of the Comment Search product. This is a short description of the Comment Search product",
                          type: "Database",
                          link: "google.com",
                          cycle: "V3",
                          state: "Build",
                        },
                      },
                      GoogleSearch: {
                        articleSearch: {
                          name: "Google Search",
                          description:
                            "This is a short description of the Google Search product. This is a short description of the Google Search product.",
                          type: "Internal API",
                          link: "google.com",
                          cycle: "V2",
                          state: "Test",
                        },
                      },
                    }}
                  />
                }
              />
              <Route path="/ManageService" element={<ManageService />} />
              <Route path="/user" element={<ProfileContent />} />
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
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate></UnauthenticatedTemplate>
    </PageLayout>
  );
}

export default App;
