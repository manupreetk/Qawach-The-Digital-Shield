import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";
import { db } from "./firebase";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

app.get("/test-firestore", async (req, res) => {
  try {
    await db.collection("test").doc("ping").set({ message: "Hello Firestore!", time: Date.now() });
    res.send("✅ Firestore write successful");
  } catch (err) {
    console.error("❌ Firestore test failed:", err);
    res.status(500).send("Firestore write failed");
  }
});
