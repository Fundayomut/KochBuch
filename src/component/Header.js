import React from "react";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <div>
      <div>
        <h1 className="header">Cookbook</h1>
        <Navigation />
      </div>
      <div className="headerdiv">
        <img src="https://images.unsplash.com/photo-1536392706976-e486e2ba97af?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGlubmVyfGVufDB8fDB8fHww" />
      </div>
    </div>
  );
}
