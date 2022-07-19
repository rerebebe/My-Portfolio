import { useState } from "react";

const Whatever = ({ id, note, date, time, add, listData }) => {
  const [anote, setAnote] = useState(note);
  const [adate, setAdate] = useState(date);
  const [atime, setAtime] = useState(time);

  function updateNote(e) {
    setAnote(e.target.value);
  }
  function updateDate(e) {
    setAdate(e.target.value);
  }
  function updateTime(e) {
    setAtime(e.target.value);
  }
  // function updateEdit() {
  //   function(prev) {
  //     const index = prev.find((item)=>item.id===id)
  //     add

  //   }

  const updatedMemo = { id, note: anote, date: adate, time: atime };
  function updateEdit() {
    add(listData.map((item) => (item.id === id ? updatedMemo : item)));
  }

  return (
    <div
      className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      // id="exampleModal"
      id={`example-${id}`}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog relative w-auto pointer-events-none">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5
              className="text-xl font-medium leading-normal text-gray-800"
              id="exampleModalLabel"
            >
              Modal title
            </h5>
            <button
              type="button"
              className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              關閉的按鈕
            </button>
          </div>
          <div className="text-black modal-body relative p-8">
            <label htmlFor="memo">Memo</label>
            <input
              placeholder="enter the memo..."
              value={anote}
              onChange={updateNote}
              name="memo"
              className="block w-full px-2 py-2 rounded-md border-2 text-base text-gray-900 placeholder-black-500 focus:outline-none focus:ring-2 focus:ring-offset focus:ring-red-100 focus:ring-offset-red-500"
            />
            <label htmlFor="date">Date</label>
            <input
              placeholder="enter the date..."
              value={adate}
              onChange={updateDate}
              name="date"
              type="date"
              className="block w-full px-2 py-2 rounded-md border-2 text-base text-gray-900 placeholder-black-500 focus:outline-none focus:ring-2 focus:ring-offset focus:ring-red-100 focus:ring-offset-red-500"
            />
            <label htmlFor="time">Time</label>
            <input
              placeholder="enter the time..."
              value={atime}
              onChange={updateTime}
              name="time"
              type="time"
              className="block w-full px-2 py-2 rounded-md border-2 text-base text-gray-900 placeholder-black-500 focus:outline-none focus:ring-2 focus:ring-offset focus:ring-red-100 focus:ring-offset-red-500"
            />
          </div>
          <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
            <button
              type="button"
              className="px-6
          py-2.5
          bg-purple-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              onClick={updateEdit}
              type="button"
              className="px-6
              py-2.5
              bg-blue-600
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-blue-700 hover:shadow-lg
              focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-blue-800 active:shadow-lg
              transition
              duration-150
              ease-in-out
              ml-1"
              data-bs-dismiss="modal"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatever;
