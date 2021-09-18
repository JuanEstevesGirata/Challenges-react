import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


const initialTasks = [
    {
      id: "1",
      text: "React.js",
    },
    {
      id: "2",
      text: "HTML/CSS",
    },
    {
      id: "3",
      text: "Redux",
    },
    {
      id: "4",
      text: "JavaScript",
    },
    {
        id: "5",
        text: "Node",
    },
    {
        id: "6",
        text: "Express",
      },
      {
        id: "7",
        text: "NextJS",
      },
      {
          id: "8",
          text: "GrapQl",
      },
  ];
  
  const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };



const DragDrop = () => {

    const [tasks, setTasks] = useState(initialTasks);
    return (
    <>
      <DragDropContext
        onDragEnd={(result) => {
          const { source, destination } = result;
          if (!destination) {
            return;
          }
          if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
          ) {
            return;
          }
  
          setTasks((prevTasks) =>
            reorder(prevTasks, source.index, destination.index)
          );
        }}
      >
        <div className="app">
          <h1>SKILLS</h1>
          <Droppable droppableId="tasks">
            {(droppableProvided) => (
              <ul
                {...droppableProvided.droppableProps}
                ref={droppableProvided.innerRef}
                className="task-container"
              >
                {tasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(draggableProvided) => (
                      <li
                        {...draggableProvided.draggableProps}
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.dragHandleProps}
                        className="task-item"
                      >
                        {task.text}
                      </li>
                    )}
                  </Draggable>
                ))}
                {droppableProvided.placeholder}
              </ul>
            )}
          </Droppable>
        </div>
      </DragDropContext>

      <style jsx>
          {`
                    
            .app {
            text-align: center;
            }

            h1 {
            font-size: 3rem;
            color: #bdc1c2;
            }

            .task-container {
            /* border: 1px dotted pink; */
            margin: 0;
            list-style: none;
            padding: 5px;
            border-radius: 5px;
            font-size: 3rem;

            display: inline-flex;
            flex-direction: column;
            }

            .task-item {
            color: rgb(5, 5, 46);
            box-shadow: 0px 2px 4px #4a4c4e;
            border-radius: 5px;
            padding: 0.3em 0.5em;
            background-color: whitesmoke;
            text-align: center;
            margin: 5px;
            border: 2px solid transparent;
            }

            .task-item:focus {
            outline: none;
            border: 2px solid #4a9af5;
            }
          `}
      </style>
    </>
    );
  }
export default DragDrop




  

