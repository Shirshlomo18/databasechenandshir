// import React, { useState, useEffect } from 'react';

// export function Todos() {
//   const currentUser = JSON.parse(localStorage.getItem('currUser'));
//   const [todos, setTodos] = useState([]);
//   const [searchInput, setSearchInput] = useState('');
//   const [filteredTodos, setFilteredTodos] = useState([]);
//   const [selectedFilter, setSelectedFilter] = useState('alphabet');
//   const [showForm, setShowForm] = useState(false);
//   const [newTitle, setNewTitle] = useState('');

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = async () => {
//     try {
//       const response = await fetch(`http://localhost:3000/todos?userId=${currentUser.id}`);

//       if (!response.ok) {
//         throw new Error(`Failed to fetch todos: ${response.status}`);
//       }

//       const result = await response.json();
//       setTodos(result);
//       setFilteredTodos(result);
//     } catch (error) {
//       console.error('Error fetching todos:', error);
//     }
//   };

//   function searchByInput() {
//     if (searchInput === '') {
//       setFilteredTodos(todos);
//     } else {
//       const updatedFilteredTodos = todos.filter((todo) =>
//         Array.from(searchInput).every((letter) => todo.title.includes(letter))
//       );
//       setFilteredTodos(updatedFilteredTodos);
//       setSearchInput('');
//     }
//   }

//   function selectChange(e) {
//     let filtered = [...todos];

//     switch (e.target.value) {
//       case 'alphabet':
//         filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
//         break;
//       case 'numbers':
//         filtered = filtered.sort((a, b) => a.id - b.id);
//         break;
//       case 'random':
//         filtered = filtered.sort(() => Math.random() - 0.5);
//         break;
//       default:
//         break;
//     }

//     setFilteredTodos(filtered);
//   }

//   async function deleteTodo(todoId) {
//     const confirmed = window.confirm('Are you sure you want to delete this todo?');
//     if (confirmed) {
//       try {
//         await fetch(`http://localhost:3000/todos/${todoId}`, {
//           method: 'DELETE',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
//         setFilteredTodos((prev) => prev.filter((todo) => todo.id !== todoId));
//       } catch (error) {
//         console.error('Error deleting todo:', error);
//       }
//     }
//   }

//   const addItem = async (e) => {
//     e.preventDefault();
//     const newItemInput = {
//       title: newTitle,
//       userId: currentUser.id,
//       completed: false,
//     };

//     try {
//       const response = await fetch('http://localhost:3000/todos', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newItemInput),
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to add new item: ${response.status}`);
//       }

//       const savedItem = await response.json();
//       setTodos((prev) => [...prev, savedItem]);
//       setShowForm(false);
//     } catch (error) {
//       console.error('Error adding new item:', error);
//     }
//   };

//   const ifYouClick = () => {
//     setShowForm(true);
//   };

//   return (
//     <>
//       <div>
//         <h1 className="todostitle">{`${currentUser.username}'s Todos`}</h1>
//         <label htmlFor="newTitle">Add an Item:</label>
//         <button type="button" onClick={ifYouClick}>
//           Add item
//         </button>
//         {showForm && (
//           <form onSubmit={addItem}>
//             <input
//               type="text"
//               id="newTitle"
//               value={newTitle}
//               onChange={(e) => setNewTitle(e.target.value)}
//               required
//             />
//             <button type="submit">Submit</button>
//           </form>
//         )}
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchInput}
//           onChange={(e) => setSearchInput(e.target.value)}
//         />
//         <button type="button" onClick={searchByInput}>
//           Search
//         </button>
//         <label htmlFor="select">Select a filter:</label>
//         <select
//           id="select"
//           name="filters"
//           value={selectedFilter}
//           onChange={(e) => {
//             setSelectedFilter(e.target.value);
//             selectChange(e);
//           }}
//         >
//           <option value="alphabet">Alphabetical</option>
//           <option value="numbers">Numbers</option>
//           <option value="random">Random</option>
//         </select>
//         {/* <div className="todos">
//           {filteredTodos
//             .filter((todo) => todo.userId === currentUser.id)
//             .map((todo) => (
//               <label className="labeltodos" key={todo.id}>
//                 <input type="checkbox" />
//                 {todo.id}
//                 {todo.title}
//                 <button type="button" onClick={() => deleteTodo(todo.id)}>
//                   Delete todo
//                 </button>
//               </label>
//             ))}
//         </div> */}
//       </div>
//     </>
//   );
// }
// export default Todos;

import React, { useState, useEffect } from 'react';

export function Todos() {
  const currUser = JSON.parse(localStorage.getItem('currUser'));
  const [todos, setTodos] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('alphabet');
  const [showForm, setShowForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch(`http://localhost:3000/todos?userId=${currUser.id}`);

      if (!response.ok) {
        throw new Error(`Failed to fetch todos: ${response.status}`);
      }

      const result = await response.json();
      setTodos(result);
      setFilteredTodos(result);
    } catch (error) {
      console.log('Error fetching todos:', error);
    }
  };

  function searchByInput() {
    if (searchInput === '') {
      setFilteredTodos(todos);
    } else {
      const updatedFilteredTodos = todos.filter((todo) =>
        Array.from(searchInput).every((letter) => todo.title.includes(letter))
      );
      setFilteredTodos(updatedFilteredTodos);
      setSearchInput('');
    }
  }

  function selectChange(e) {
    let filtered = [...todos];

    switch (e.target.value) {
      case 'alphabet':
        filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'numbers':
        filtered = filtered.sort((a, b) => a.id - b.id);
        break;
      case 'random':
        filtered = filtered.sort(() => Math.random() - 0.5);
        break;
      default:
        break;
    }

    setFilteredTodos(filtered);
  }

  async function deleteTodo(todoId) {
    const confirmed = window.confirm('Are you sure you want to delete this todo?');
    if (confirmed) {
      try {
        await fetch(`http://localhost:3000/todos/${todoId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
      setFilteredTodos((prev) => prev.filter((todo) => todo.id !== todoId));
      } catch (error) {
        console.error('Error deleting todo:', error);
      }
    }
  }

  const addItem = async (e) => {
    e.preventDefault();
    const newItemInput = {
      title: newTitle,
      userId: currUser.id,
      completed: false,
    };
    try {
      const response = await fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItemInput),
      });

      if (!response.ok) {
        throw new Error(`Failed to add new item: ${response.status}`);
      }

      const savedItem = await response.json();
      setTodos((prev) => [...prev, savedItem]);
      setShowForm(false);
    } catch (error) {
      console.error('Error adding new item:', error);
    }
  };

  const ifYouClick = () => {
    setShowForm(true);
  };

  return (
    <>
      <div>
        <h1 className="todostitle">{`${currUser[0].name}'s Todos`}</h1>
        <label htmlFor="newTitle">Add an Item:</label>
        <button type="button" onClick={ifYouClick}>
          Add item
        </button>
        {showForm && (
          <form onSubmit={addItem}>
            <input
              type="text"
              id="newTitle"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </form>
        )}
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="button" onClick={searchByInput}>
          Search
        </button>
        <label htmlFor="select">Select a filter:</label>
        <select
          id="select"
          name="filters"
          value={selectedFilter}
          onChange={(e) => {
            setSelectedFilter(e.target.value);
            selectChange(e);
          }}
        >
          <option value="alphabet">Alphabetical</option>
          <option value="numbers">Numbers</option>
          <option value="random">Random</option>
        </select>
      </div>
    </>
  );
}
export default Todos;
{/* <div className="todos">
  {filteredTodos
    .filter((todo) => todo.userId === currUser.id)
    .map((todo) => (
      <label className="labeltodos" key={todo.id}>
        <input type="checkbox" />
        {todo.id}
        {todo.title}
        <button type="button" onClick={() => deleteTodo(todo.id)}>
          Delete todo
        </button>
      </label>
    ))}
</div> */}