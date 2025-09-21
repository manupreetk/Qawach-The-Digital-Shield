import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { auth } from "../firebase"; // 👈 your firebase.ts
import {
  createUserWithEmailAndPassword,
  updateProfile,
  getIdToken,
} from "firebase/auth";

interface ArtisanSignup {
  name: string;
  email: string;
  password: string;
  location: string;
  story: string;
}

export default function JoinArtisan() {
  const [formData, setFormData] = useState<ArtisanSignup>({
    name: "",
    email: "",
    password: "",
    location: "",
    story: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      // 1️⃣ Create user in Firebase Auth
      const userCred = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // 2️⃣ Set displayName in Firebase Auth
      await updateProfile(userCred.user, { displayName: formData.name });

      // 3️⃣ Get Firebase ID token
      const idToken = await getIdToken(userCred.user);

      // 4️⃣ Send token + artisan details to backend
      await axios.post("http://localhost:5000/api/auth/signup", {
        idToken,
        location: formData.location,
        story: formData.story,
      });

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        password: "",
        location: "",
        story: "",
      });
    } catch (err) {
      console.error(err);
      alert("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-amber-900 mb-6">
          Join as an Artisan
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Your Location (e.g. Varanasi, India)"
            value={formData.location}
            onChange={handleChange}
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <textarea
            name="story"
            placeholder="Tell us about your craft..."
            value={formData.story}
            onChange={handleChange}
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
            rows={4}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-vintage-green text-white font-semibold py-3 px-4 rounded hover:bg-amber-700 transition"
          >
            {loading ? "Signing up..." : "Join as Artisan"}
          </button>
        </form>

        {success && (
          <p className="mt-4 text-green-600 text-center font-medium">
            Signup successful! Welcome to Qawach.
          </p>
        )}
      </div>
    </div>
  );
}
