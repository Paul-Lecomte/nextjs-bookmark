import { useState } from "react";
import BookmarkForm from "../components/BookmarkForm";

export default function Home() {
    const [bookmarks, setBookmarks] = useState([]);

    const addBookmark = (bookmark) => {
        setBookmarks([...bookmarks, bookmark]);
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Bookmark Manager</h1>
            <BookmarkForm onAdd={addBookmark} />
            <ul>
                {bookmarks.map((b, index) => (
                    <li key={index} className="p-2 border-b">{b.title} - <a href={b.url} className="text-blue-600" target="_blank">Visit</a></li>
                ))}
            </ul>
        </div>
    );
}