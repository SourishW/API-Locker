import "./App.scss";
import "boxicons/css/boxicons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import ProfileContent from "./pages/ProfileContent";
import AllServices from "./pages/AllServices";
import ManageService from "./pages/ManageService";
import ChangeService from "./pages/ChangeService";

import NewService from "./pages/NewService";
import { Provider } from "react-redux";

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
                          link: "manageservice?name=Video-Search",
                          cycle: "V1",
                          state: "Production",
                        },
                        commentRank: {
                          name: "Comment Search",
                          description:
                            "This is a short description of the Comment Search product. This is a short description of the Comment Search product. This is a short description of the Comment Search product. This is a short description of the Comment Search product",
                          type: "Database",
                          link: "manageservice?name=Comment-Search",
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
                          link: "manageservice?name=Google-Search",
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
      <UnauthenticatedTemplate>
        <h1
          style={{
            color: "white",
            backgroundColor: "orange",
            borderRadius: "10px",
            textAlign: "center",
            padding: "20px",
          }}
        >
          Hello and Welcome to Service Locker! Sign in to get started
        </h1>
      </UnauthenticatedTemplate>
    </PageLayout>
  );
}

export default App;
