import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props) => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <div style={{ paddingLeft: "210px" }}>
      <Navbar
        bg="primary"
        variant="dark"
        style={{
          paddingLeft: "40px",
          paddingTop: "25px",
          paddingBottom: "25px",
        }}
      >
        {isAuthenticated ? <SignOutButton /> : <SignInButton />}
      </Navbar>

      {props.children}
    </div>
  );
};
