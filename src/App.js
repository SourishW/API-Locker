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
                    firstInfo={{}}
                    licensingInfo={{}}
                    methodInfo={{
                      connect: {},
                      delete: {},
                      get: {},
                      head: {},
                      options: {},
                      patch: {},
                      post: {},
                      put: {},
                      trace: {},
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
