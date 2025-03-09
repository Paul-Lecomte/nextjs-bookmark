"use client";

import { useState, useEffect } from "react";
import BookmarkForm from "./components/BookmarkForm";

export default function Home() {
    const [bookmarks, setBookmarks] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
        setBookmarks(savedBookmarks);
    }, []);

    useEffect(() => {
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }, [bookmarks]);

    const addBookmark = (bookmark) => {
        setBookmarks([...bookmarks, bookmark]);
    };

    const deleteBookmark = (index) => {
        const updatedBookmarks = bookmarks.filter((_, i) => i !== index);
        setBookmarks(updatedBookmarks);
    };

    const filteredBookmarks = filter ? bookmarks.filter(b => b.category === filter) : bookmarks;

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
            <div className="max-w-lg w-full p-6 bg-gray-900 shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-100">📌 Bookmark Manager</h1>

                <BookmarkForm onAdd={addBookmark} />

                <select
                    onChange={(e) => setFilter(e.target.value)}
                    className="w-full border p-2 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-400"
                >
                    <option value="">All Categories</option>
                    {[...new Set(bookmarks.map(b => b.category))].map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                    ))}
                </select>

                <div className="space-y-3 mt-4">
                    {filteredBookmarks.map((b, index) => (
                        <div key={index} className="p-3 bg-gray-800 rounded-lg flex justify-between items-center shadow-md">
                            <div>
                                <p className="font-semibold text-gray-200">{b.title}</p>
                                <a href={b.url} className="text-blue-400 hover:text-blue-500" target="_blank">🔗 Visit</a>
                                <p className="text-sm text-gray-400">{b.category || "Uncategorized"}</p>
                            </div>
                            <button
                                onClick={() => deleteBookmark(index)}
                                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                            >
                                🗑 Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}