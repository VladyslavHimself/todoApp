import {DELETE_TASK_FROM_LIST, MARK_TASK_AS_COMPLETE, MARK_TASK_AS_IMPORTANT} from "./actionTypes";

export function markAsComplete(taskId) {
    return {
        type: MARK_TASK_AS_COMPLETE,
        payload: taskId,
    }
}

export function markAsImportant(taskId) {
    return {
        type: MARK_TASK_AS_IMPORTANT,
        payload: taskId,
    }
}

export function deleteItemFromList(taskId) {
    return {
        type: DELETE_TASK_FROM_LIST,
        payload: taskId,
    }
}