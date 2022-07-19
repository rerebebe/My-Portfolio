import Item from "./Item.js";
import Item2 from "./Item2.js";

const List = ({
  add,
  listData,
  deleteData,
  submittingstatus,
  finishedTask,
  setFinish,
}) => {
  return (
    <div className="pt-10 text-white">
      <div>
        {JSON.stringify(listData)}

        {listData.map((item) => {
          const { id, note, date, time } = item;
          return (
            <Item
              key={id}
              id={id}
              note={note}
              date={date}
              time={time}
              deleteData={deleteData}
              submittingstatus={submittingstatus}
              add={add}
              listData={listData}
              item={item}
              finish={finishedTask}
              setFinish={setFinish}
            />
          );
        })}
      </div>
      <div>
        <p className="text-3xl font-bold sm:text-3xl lg:mt-6 tracking-tight">
          Finished Tasks :
        </p>
        {JSON.stringify(finishedTask)}
        {finishedTask.map((item) => {
          const { id, note, date, time } = item;
          return (
            <Item2
              key={id}
              id={id}
              note={note}
              date={date}
              time={time}
              deleteData={deleteData}
              submittingstatus={submittingstatus}
              add={add}
              listData={listData}
              item={item}
              finish={finishedTask}
              setFinish={setFinish}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
