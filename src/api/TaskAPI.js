import axios from "axios";

const apiUrl = 'https://firestore.googleapis.com/v1/projects/';

const apiKey = import.meta.env.VITE_API_KEY
const projectId = import.meta.env.VITE_PROJECT_ID

export function getTasks() {
    try { 
		return axios.get(`${apiUrl}${projectId}/databases/(default)/documents/task?key=${apiKey}`).then(function (response){
            let tasksFirebase = response.data.documents
            let tasks = []
            for(let ts of tasksFirebase){
                let task = {
                    id: ts.fields.id.stringValue,
                    content: ts.fields.content.stringValue,
                    idTable: ts.fields.idTable.stringValue
                }
                tasks.push(task)
            }
            return tasks
        });
    } catch (error) {
        return null;
    }
}