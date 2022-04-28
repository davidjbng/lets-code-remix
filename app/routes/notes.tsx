import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";

import { getNoteListItems } from "~/models/note.server";
import { PendingLink, PendingNavLink } from "~/components/pending-link";

type LoaderData = {
  noteListItems: Awaited<ReturnType<typeof getNoteListItems>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  const noteListItems = await getNoteListItems();
  return json<LoaderData>({ noteListItems });
};

export default function NotesPage() {
  const data = useLoaderData() as LoaderData;

  return (
    <main className="flex h-full bg-white">
      <div className="h-full w-80 border-r bg-gray-50">
        <PendingLink to="new" className="block p-4 text-xl text-blue-500">
          + New Note
        </PendingLink>

        <hr />

        {data.noteListItems.length === 0 ? (
          <p className="p-4">No notes yet</p>
        ) : (
          <ol>
            {data.noteListItems.map((note) => (
              <li key={note.id}>
                <PendingNavLink
                  className={({ isActive }) =>
                    `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`
                  }
                  to={note.id}
                >
                  📝 {note.title}
                </PendingNavLink>
              </li>
            ))}
          </ol>
        )}
      </div>

      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </main>
  );
}
