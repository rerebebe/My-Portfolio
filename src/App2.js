import { useState, useEffect, useRef } from "react";
import { API_GET_DATA, API_GET_DATA_2 } from "./constants";
import "./index.css";
import Edit from "./ToDoList/Edit.js";
import List from "./ToDoList/List.js";
import "./index.css";
import ListDelete from "./ToDoList/ListDelete";

// 從資料庫抓資料
async function fetchData(setData) {
  const response = await fetch(API_GET_DATA);
  const { data } = await response.json();
  setData(data);
}

// 將資料put到資料庫
async function putData(data) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
}
//------------以下為finished Task-------------
// 從資料庫抓資料
async function getData(setFinish) {
  const response = await fetch(API_GET_DATA_2);
  const { finish } = await response.json();
  setFinish(finish);
}

// 將資料put到資料庫
async function pushData(finish) {
  await fetch(API_GET_DATA_2, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ finish }),
  });
}

const App2 = () => {
  const [data, setData] = useState([]);
  const submittingstatus = useRef(false); //送資料的狀態
  const [finish, setFinish] = useState([]);

  // 從資料庫抓出資料, 只能出現一次
  useEffect(() => {
    fetchData(setData);
  }, []);

  useEffect(() => {
    getData(setFinish);
  }, []);

  // Until True;
  useEffect(() => {
    if (!submittingstatus.current) {
      //因為後面設定add/delete都是true, 所以原始值是false沒錯
      return;
    }
    putData(data).then((data) => (submittingstatus.current = false));
  }, [data]);

  useEffect(() => {
    if (!submittingstatus.current) {
      //因為後面設定add/delete都是true, 所以原始值是false沒錯
      return;
    }
    pushData(finish).then((finish) => (submittingstatus.current = false));
  }, [finish]);

  return (
    <div className="text-white w-full p-5 mr-4 justify-center">
      <Edit add={setData} submittingstatus={submittingstatus} />
      <List
        add={setData}
        listData={data}
        deleteData={setData}
        submittingstatus={submittingstatus}
        finishedTask={finish}
        setFinish={setFinish}
      />
    </div>
  );
};

export default App2;
