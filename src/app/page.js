"use client";
import BookmarkForm from "./components/BookmarkForm";

export default function Home() {
  return (
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Bookmark Manager</h1>
        <BookmarkForm/>
      </div>
  );
}
