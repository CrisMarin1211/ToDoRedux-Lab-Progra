//Un slice es un mini contexto, es una parte pequeña que forma el estado global. El estado global es el total de los slices.
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Task = {
  id: number;
  title: string;
  description: string;
};

type InitialState = {
  tasks: Task[];
};

//Estado inicial
const initialState: InitialState = {
  tasks: [],
};

// 1. Darle un nombre al slice
// 2. Pasar el estado inicial
// 3. Crear el reducer con las actions
export const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  //Reducer contiene las actiones para determinar que es lo que cambia del estado inicial
  reducers: {
    //Actions
    saveTasks: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex((t) => t.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
  },
});

//Destructurar las actions para exportarlas de manera individual
export const { saveTasks, editTask, deleteTask } = toDoSlice.actions;

//Exportar el reducer del slice
export default toDoSlice.reducer;