import React from "react";
import { saveAs } from "file-saver";

const AcademicCalendar = () => {
  const calendarData = [
    { date: "2024-01-15", event: "School Reopens 🎒", isHoliday: false },
    { date: "2024-02-10", event: "Science Fair 🔬", isHoliday: false },
    { date: "2024-03-20", event: "Annual Sports Day 🏅", isHoliday: false },
    { date: "2024-04-10", event: "Midterm Exams 📝", isHoliday: false },
    { date: "2024-05-15", event: "Summer Holidays Begin ☀️", isHoliday: true },
    { date: "2024-08-01", event: "School Reopens (Post Summer Break) 🌟", isHoliday: false },
    { date: "2024-09-05", event: "Teacher's Day Celebration 🍎", isHoliday: false },
    { date: "2024-10-20", event: "Diwali Holidays 🪔", isHoliday: true },
    { date: "2024-12-15", event: "Final Exams 🎓", isHoliday: false },
  ];

  const downloadCalendar = () => {
    const calendarContent = calendarData
      .map((item) => `${item.date} - ${item.event}${item.isHoliday ? ' (Holiday)' : ''}`)
      .join("\n");
    const blob = new Blob([calendarContent], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "Academic_Calendar.txt");
  };

  return (
    <section className="bg-white text-blue-600 py-16">
      <div className="container mx-auto text-center mt-20">
        {/* Icon and Title */}
        <div className="mb-8">
          <span className="text-6xl" role="img" aria-label="calendar">📅</span>
        </div>
        <h1 className="text-3xl font-bold text-yellow-300 mb-4">
          Academic Calendar 2024
        </h1>
        <p className="text-lg text-blue-600 mb-8">
          Stay updated with important holidays, exams, and school events.
        </p>

        {/* Calendar Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-lg border border-gray-300">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-indigo-700 text-white">
              <tr>
                <th className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider">
                  Event
                </th>
                <th className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider">
                  Holiday
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-50 divide-y divide-gray-200">
              {calendarData.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 text-center font-medium text-gray-800">
                    {item.date}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-600">
                    {item.event}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-600">
                    {item.isHoliday ? 'Yes' : 'No'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Download Button */}
        <div className="mt-8">
          <button
            onClick={downloadCalendar}
            className="bg-yellow-400 text-white py-2 px-6 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
          >
            Download Calendar <span role="img" aria-label="download">⬇️</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AcademicCalendar;
