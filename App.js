

// import React, { useState } from 'react';
// import { Input, Button, List, Avatar, Space } from 'antd';

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);

//   const handleAddTodo = (value) => {
//     setTodos([...todos, { text: value }]);
//   };

//   return (
//     <Space direction="vertical">
//       <Input.Search
//         placeholder="Add Todo"
//         enterButton="Add"
//         onSearch={handleAddTodo}
//       />
//       <List
//         dataSource={todos}
//         renderItem={(item) => (
//           <List.Item>
//             <List.Item.Meta
//               avatar={<Avatar>{item.text[0]}</Avatar>}
//               title={item.text}
//             />
//           </List.Item>
//         )}
//       />
//     </Space>
//   );
// };

// export default TodoList;

import React, {useState} from "react";
import { Input, Button, List, Avatar, Space } from "antd";
import Item from "antd/es/list/Item";
const TodoList = () => {
  const[todos, setTodos]=useState([]);
  const handleAddTodo = (value) => {setTodos([...todos,{text:Avatar}]); }
  ;
  return(
    <Space direction="vertical">
      <Input.Search
      placeholder="Add Todo"
      enterButton="Add"
      onSearch={handleAddTodo}
      />
 
 <List
    itemLayout="horizontal"
    dataSource={todos}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
          title={<a href="https://ant.design">text</a>}
         
        />
      </List.Item>
    )}
  />

      </Space>
  );
};
export default TodoList;
