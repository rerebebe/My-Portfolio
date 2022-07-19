import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add, submittingstatus }) => {
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function emptyValue() {
    setNote("");
    setDate("");
    setTime("");
  }

  function noteChange(e) {
    setNote(e.target.value);
  }
  function dateChange(e) {
    setDate(e.target.value);
  }
  function timeChange(e) {
    setTime(e.target.value);
  }

  function addItem() {
    add(function (prevData) {
      submittingstatus.current = true;
      return [{ id: v4(), note, date, time }, ...prevData];
      // const item = { id: v4(), note: note, date: date, time: time };
      // return [item, ...prevData];
    });
    emptyValue();
  }

  return (
    <div className="text-white">
      <h1 className="text-white text-4xl mt-4 mb-4 font-extrabold sm:text-6xl lg:mt-6 tracking-tight">
        To-do List
      </h1>
      <label htmlFor="memo">Memo</label>
      <input
        type="text"
        value={note}
        onChange={noteChange}
        name="memo"
        placeholder="put your stuff to do here..."
        className="block w-full px-4 py-3 rounded-md border-1 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-cyan-100 focus:ring-offset-gray-100"
        required="required"
      />
      <label htmlFor="date">Date</label>
      <input
        value={date}
        onChange={dateChange}
        type="date"
        name="date"
        className="block w-full px-4 py-3 rounded-md border-1 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-cyan-100 focus:ring-offset-gray-100"
      />
      <label htmlFor="time">Time</label>
      <input
        value={time}
        onChange={timeChange}
        type="time"
        name="time"
        className="block w-full px-4 py-3 rounded-md border-1 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-cyan-100 focus:ring-offset-gray-100"
      />
      <div className="justify-end">
        <button
          disabled={note ? false : true}
          type="submit"
          onClick={addItem}
          className="block w-24 py-3 px-2 mt-8 h-12 rounded-md shadow bg-gradient-to-r from-indigo-400 to-pink-300 text-white font-bold bg-gradient-to-r hover:from-indigo-300 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Edit;
