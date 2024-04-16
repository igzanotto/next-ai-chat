"use client";

import { useChat } from "ai/react";

function HomePage() {
  const { handleInputChange, handleSubmit, messages, isLoading, input } = useChat();

  return (
    <section className="flex justify-center items-center h-screen">
      <form className="max-w-xl w-full" onSubmit={handleSubmit}>
      {messages.map((m) => (
            <div
              key={m.id}
              className={`flex flex-col mb-2 p-2 rounded-md ${
                m.role === "assistant"
                  ? "self-end bg-blue-200"
                  : "self-start bg-blue-400"
              }`}
            >
              <span
                className={`text-xs font-bold ${
                  m.role === "assistant" ? "text-right" : "text-left"
                }`}
              >
                {m.role === "assistant" ? "asistente" : "tú"}
              </span>{" "}
              {m.content}
            </div>
          ))}

        <div className="flex justify-between my-4">
          <label className="block font-bold my-2">Say something...</label>
          <button className="bg-blue-600 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:opacity-50" disabled={ isLoading || !input}>
            Send
          </button>
        </div>
        <textarea
          rows={4}
          className="text-black bg-slate-300 px-3 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Type something..."
          value={input}
          autoFocus
          onChange={handleInputChange}
        />
      </form>
    </section>
  );
}

export default HomePage;
