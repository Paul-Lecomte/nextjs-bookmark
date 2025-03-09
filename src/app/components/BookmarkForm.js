import { useState } from "react";

export default function BookmarkForm({ onAdd }) {
    return (
        <div className="mb-4">
            <input type="text" placeholder="Title" className="border p-2 mr-2 rounded" />
            <input type="url" placeholder="URL" className="border p-2 mr-2 rounded" />
            <input type="text" placeholder="Category" className="border p-2 mr-2 rounded" />
            <button className="bg-blue-500 text-white p-2 rounded">Add</button>
        </div>
    );
}