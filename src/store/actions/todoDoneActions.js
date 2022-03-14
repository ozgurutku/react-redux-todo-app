export const COMPLETE_TODO = "COMPLETE_TODO"

export function completeTodo(todo){
    return {
        type : COMPLETE_TODO,
        payload : todo
    }
}