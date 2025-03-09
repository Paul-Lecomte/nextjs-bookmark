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
        <div className="mb-4">
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 mr-2 rounded"/>
            <input type="url" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} className="border p-2 mr-2 rounded"/>
            <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2 mr-2 rounded"/>
            <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded">Add</button>
        </div>
    );
}