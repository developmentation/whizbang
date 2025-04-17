const express = require("express");
const path = require("path");
const { app } = require("./config/app.js");

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from specific directories
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
app.use("/composables", express.static(path.join(__dirname, "public/composables")));
app.use("/components", express.static(path.join(__dirname, "public/components")));
app.use(express.static(path.join(__dirname, "public"))); // Serve other static assets

// Middleware to ensure proper MIME types for .js files
app.use((req, res, next) => {
  if (req.path.endsWith(".js")) {
    res.setHeader("Content-Type", "application/javascript");
  }
  if (req.path.endsWith(".svg")) {
    res.setHeader("Content-Type", "image/svg+xml");
  }
  if (req.path.endsWith(".json")) {
    res.setHeader("Content-Type", "application/json");
  }
  next();
});

// API routes (ensure these are defined first) - For consistency all endpoints start with /api/ or api/1.x/, api/2.x/ to enable API versioning and backward compatibility 
app.use("/api/configs", require("./routes/configs")); // Configuration values
app.use("/api/healthcheck", require("./routes/healthcheck")); // Healthcheck route
app.use("/api/models", require("./routes/models")); // Server side defined models

// SPA Fallback: Serve `index.html` for any non-API routes
app.get("*", (req, res) => {
  if (req.path.startsWith("/api")) {
    res.status(404).send({ error: "API route not found" });
  } else {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  }
});

// 404 error handler for unrecognized routes
app.use((req, res, next) => {
  const error = new Error("This site was not found. Perhaps you want to call login?");
  error.status = 404;
  next(error);
});

