import axios from "axios";

const apiUrl = 'https://firestore.googleapis.com/v1/projects/';

const apiKey = import.meta.env.VITE_API_KEY
const projectId = import.meta.env.VITE_PROJECT_ID

export function getTasks() {
    try { 
		return axios.get(`${apiUrl}${projectId}/databases/(default)/documents/task?key=${apiKey}`).then(function (response){return response.data});
    } catch (error) {
        return null;
    }
}