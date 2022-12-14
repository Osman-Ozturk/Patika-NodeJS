import express from "express";
import ejs from "ejs";
import mongoose from "mongoose";
import  Post  from "./modules/Post.js";
const app = express();

mongoose.connect("mongodb://localhost/cleanblog-test-db");


// middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  const posts =await Post.find();
  res.render("index", { posts });
});
app.get("/posts/:id", async (req, res) => {
  const post = await Post.findById(req.params.id)
  res.render("post",{post});
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/add_post", (req, res) => {
  res.render("add_post");
});
app.post("/posts", async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
});

const port = 4000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
