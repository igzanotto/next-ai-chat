"use client"

import { useChat } from "ai/react";

function HomePage() {

  const { handleInputChange, handleSubmit } = useChat();

  return (
    <section className="flex justify-center items-center h-screen">
      <form className="max-w-xl w-full" onSubmit={handleSubmit}>
        <div className="flex justify-between my-4">
          <label className="block font-bold my-2">Say something...</label>
          <button className="bg-blue-600 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:opacity-50">
            Send
          </button>
        </div>
        <textarea
          rows={4}
          className="text-black bg-slate-300 px-3 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Type something..."
          autoFocus
          onChange={handleInputChange}
        />
      </form>
    </section>
  );
}

export default HomePage;
