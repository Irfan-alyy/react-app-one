import MenuItem from "./menu-item";

const MenuList = ({ list }) => {
  console.log(list);

  return (
    <>
      {list.length && (
        <ul>
          {list.map((elem, index) => (
            <MenuItem item={elem} key={index} />
          ))}
        </ul>
      )}
    </>
  );
};
export default MenuList;
