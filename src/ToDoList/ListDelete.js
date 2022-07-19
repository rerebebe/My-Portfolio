import Item from "./Item.js";

const ListDelete = (finishedTask, setFinish) => {
  return (
    <div className="text-white">
      {/* <p className="text-3xl font-bold sm:text-3xl lg:mt-6 tracking-tight">
        Finished Tasks :
      </p> */}
      {/* {JSON.stringify(finishedTask)} */}

      {/* {finish.map((item) => {
        const { id, note, date, time } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            item={item}
            finish={finishedTask}
            setFinish={setFinish}
          />
        );
      })} */}
    </div>
  );
};

export default ListDelete;
