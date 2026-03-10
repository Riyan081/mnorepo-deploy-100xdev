import express from "express";
import { prismaClient } from "@repo/db/client";



const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8080;


app.get("/", async (req, res) => {
  res.send("Hello World!");
});



app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const user = await prismaClient.user.create({
    data: {
     username,
     password
    }
  });
  res.json(user);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});