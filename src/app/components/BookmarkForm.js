"use client";

import { useState } from "react";

export default function BookmarkForm({ onAdd }) {
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = () => {
        if (!title || !url) return;
        onAdd({ title, url, category });
        setTitle("");
        setUrl("");
        setCategory("");
    };

    return (
        <div className="mb-6 p-4 bg-gray-800 rounded-lg shadow-md">
            <div className="flex flex-col gap-3">
                <input
                    type="text"
                    placeholder="Bookmark Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border p-2 rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="url"
                    placeholder="Bookmark URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="border p-2 rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="text"
                    placeholder="Category (Optional)"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border p-2 rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-blue-400"
                />
                <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                    ➕ Add Bookmark
                </button>
            </div>
        </div>
    );
}