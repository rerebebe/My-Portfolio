import { useState } from "react";
import "tw-elements";
import Whatever from "./Whatever";

const Item = ({
  id,
  note,
  date,
  time,
  deleteData,
  submittingstatus,
  key,
  listData,
  add,
  item,
  finish,
  setFinish,
}) => {
  /** 
  const deleteItem = () => {
    var newList = listData;
    newList.splice(index, 1);
    deleteData([...newList]);
  };
*/
  /** 
  function deleteItem() {
    var newList = listData;
    newList.splice(index, 1);
    deleteData([...newList]);
  }
*/

  const [overStatus, setOverstatus] = useState(false);
  const [memo, setMemo] = useState({ id, note, date, time });

  function deleteItem() {
    submittingstatus.current = true;
    deleteData(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
  }

  //  試試看將原ｉｔｅｍ移到另一邊
  function finishTask() {
    submittingstatus.current = true;
    const finishedMemo = listData.filter((item) => item.id === id);
    deleteData(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
    setOverstatus(true);
    setFinish(function (prev) {
      return [...finishedMemo, ...prev];
    });
  }

  return (
    <div className="w-full border-2 text-white mb-10 py-4 flex justify-between items-center">
      <div className="ml-4">
        <p className="text-lg">{note}</p>
        <p></p>
        <p className="text-md">{`${date} ${time}`}</p>
      </div>
      <div className="flex">
        <button
          onClick={deleteItem}
          className="border-2 p-2 mr-2 rounded-md bg-gradient-to-r from-indigo-400 to-pink-300 text-white font-bold bg-gradient-to-r hover:from-indigo-300 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
        >
          Delete
        </button>
        <button
          // onClick={editItem}
          type="button"
          className="border-2 p-2 mr-2 rounded-md bg-gradient-to-r from-indigo-400 to-pink-300 text-white font-bold bg-gradient-to-r hover:from-indigo-300 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
          data-bs-toggle="modal"
          // data-bs-target="#exampleModal"
          data-bs-target={`#example-${id}`}
        >
          Edit
        </button>
        <button
          onClick={finishTask}
          type="button"
          className="border-2 p-2 mr-2 rounded-md bg-gradient-to-r from-indigo-400 to-pink-300 text-white font-bold bg-gradient-to-r hover:from-indigo-300 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
        >
          Finish!
        </button>
        <Whatever
          id={id}
          note={note}
          date={date}
          time={time}
          item={item}
          add={add}
          listData={listData}
        />
      </div>
    </div>
  );
};

export default Item;
