import { Request, Response } from "express";
import { auth, db } from "../firebase";

export const signup = async (req: Request, res: Response) => {
  try {
    console.log("📩 Incoming body:", req.body); 
    const { idToken, location, story } = req.body;

    if (!idToken) {
      return res.status(400).json({ message: "Missing idToken" });
    }

    // ✅ Verify Firebase ID token
    const decoded = await auth.verifyIdToken(idToken);
    console.log("✅ Decoded token:", decoded);

    // ✅ Save artisan profile in Firestore
    await db.collection("artisans").doc(decoded.uid).set(
      {
        name: decoded.name || decoded.email?.split("@")[0] || "Anonymous",
        email: decoded.email,
        location: location || "",
        story: story || "",
        createdAt: new Date().toISOString(),
      },
      { merge: true } // ✅ merge to avoid overwriting if doc exists
    );

    res.status(201).json({
      message: "Signup successful",
      artisan: {
        uid: decoded.uid,
        name: decoded.name || decoded.email?.split("@")[0] || "Anonymous",
        email: decoded.email,
        location: location || "",
        story: story || "",
      },
    });
  } catch (err: any) {
    console.error("❌ Signup error:", err);
    res.status(500).json({ message: err.message || "Signup failed" });
  }
};

export const signin = async (req: Request, res: Response) => {
  try {
    const { idToken } = req.body;

    if (!idToken) {
      return res.status(400).json({ message: "Missing idToken" });
    }

    // ✅ Verify Firebase token
    const decoded = await auth.verifyIdToken(idToken);
    console.log("✅ Decoded signin token:", decoded);

    // ✅ Fetch artisan profile from Firestore
    const artisanDoc = await db.collection("artisans").doc(decoded.uid).get();

    if (!artisanDoc.exists) {
      return res.status(404).json({ message: "Artisan profile not found" });
    }

    res.json({
      message: "Signin successful",
      artisan: artisanDoc.data(),
    });
  } catch (err: any) {
    console.error("❌ Signin error:", err);
    res.status(401).json({ message: err.message || "Invalid or expired token" });
  }
};
