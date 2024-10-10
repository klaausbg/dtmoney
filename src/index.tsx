import React from "react";
import ReactDOM from "react-dom/client";
import { createServer } from "miragejs";
import { App } from "./App";

createServer({
  routes() {
    this.namespace = "api";

    // GET request for transactions
    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    // POST request to add a new transaction
    this.post("/transactions", (schema: any, request: any) => {
      const data = JSON.parse(request.requestBody); // Correcting the typo: resquestBody to requestBody
      return schema.transactions.create("transaction", data); // Save the new transaction to the Mirage DB
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
