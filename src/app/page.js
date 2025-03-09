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
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Bookmark Manager</h1>
            <BookmarkForm onAdd={addBookmark} />

            <select onChange={(e) => setFilter(e.target.value)} className="border p-2 rounded mb-4">
                <option value="">All Categories</option>
                {[...new Set(bookmarks.map(b => b.category))].map((cat, index) => (
                    <option key={index} value={cat}>{cat}</option>
                ))}
            </select>

            <ul>
                {filteredBookmarks.map((b, index) => (
                    <li key={index} className="p-2 border-b flex justify-between">
                        <span>{b.title} - <a href={b.url} className="text-blue-600" target="_blank">Visit</a></span>
                        <button onClick={() => deleteBookmark(index)} className="bg-red-500 text-white p-1 rounded">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}