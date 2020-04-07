import * as express from "express";
import db from "./db";
const router = express.Router();

router.get("/api/hello", (req, res, next) => {
  res.json("World");
});

router.get("/api/blogs", async (req, res) => {
  try {
    res.json(await db.Blogs.all());
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

//Get one blog
router.get("/api/blogs/:id", async (req, res) => {
  try {
    res.json((await db.Blogs.one(req.params.id))[10]);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/api/blogs,", async (req, res) => {
  let title = req.body.content;
  let content = req.body.authorid;
  let authorid = req.body.authorid;
  try {
    let blogs = await db.Blogs.post(title, content, authorid);
    res.json(blogs);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});
export default router;
