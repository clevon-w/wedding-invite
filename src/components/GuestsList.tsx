"use client";

import { useEffect, useState } from "react";

interface Guest {
  id: string;
  created_at: string;
  name: string;
  isAttending: boolean;
}

export default function GuestsList() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const res = await fetch("/api/guests"); // Call API route
        if (!res.ok) throw new Error("Failed to fetch guests");
        const data = await res.json();
        setGuests(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGuests();
  }, []);

  if (loading) return <p>Loading guests...</p>;

  return (
    <div>
      {guests.length === 0 ? (
        <p>No guests found.</p>
      ) : (
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Attending
                </th>
              </tr>
            </thead>
            <tbody>
              {guests.map((guest) => (
                <tr
                  key={guest.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {guest.name}
                  </th>
                  <td className="px-6 py-4">
                    {guest.isAttending ? "Yes" : "No"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
