export function getTaskById(id_task, tasks){
    let newTasks = [...tasks]
    let index = newTasks.findIndex(t => t.id === id_task)
    return newTasks[index]
}