const express = require("express");
const app = express();

const students = [
  { id: 1, name: "Иван Иванов", subject: "Базы данных", grade: 5 },
  { id: 2, name: "Анна Смирнова", subject: "Алгоритмы", grade: 4 },
];

app.get("/api/grades", (req, res) => {
  res.status(200).json(students);
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

module.exports = app;
