"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
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
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border w-[100%] border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border w-[100%] border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <button className="px-6 py-2 text-sm transition-colors duration-300 rounded rounded-full shadow-lg text-emerald-100 bg-emerald-500 hover:bg-emerald-600 shadow-emerald-400">
        Update Topic
      </button>
    </form>
  );
}
