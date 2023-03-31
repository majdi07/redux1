import { ADDTASK, DELETETASK, DONETASK, EDITTASK } from "../content/contentType";

const initialState = {
    listTasks: [
        {
            id: Math.random(),
            text: "redux project",
            isDone: false
        },
        {
            id: Math.random(),
            text: "majdi",
            isDone: true
        }
    ]
}



const taskReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADDTASK:

            return { ...state, listTasks: [...state.listTasks, payload] }
        case EDITTASK:
            return {
                ...state, listTasks: state.listTasks.map((el) =>
                    el.id === payload.id ? { ...el, text: payload.newTask } : el
                )
            }
        case DELETETASK:
            return { ...state, listTasks: state.listTasks.filter(el => el.id !== payload) }
        case DONETASK:
            return {
                ...state, listTasks: state.listTasks.map((el) =>
                    el.id === payload ? { ...el, isDone: !el.isDone } : el
                )
            }
        default:
            return state
    }
}
export default taskReducer