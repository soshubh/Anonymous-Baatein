"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch(`/api/topics`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center flex-col gap-3 pb-1.5"
    >
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border w-[100%] border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border w-[100%] border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <button
        type="submit"
        className="px-6 py-2 text-sm transition-colors duration-300 rounded rounded-full shadow-lg text-emerald-100 bg-emerald-500 hover:bg-emerald-600 shadow-emerald-400"
      >
        Add Topic
      </button>
    </form>
  );
}
