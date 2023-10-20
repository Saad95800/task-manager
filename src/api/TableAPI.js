import axios from "axios";

const apiUrl = 'https://firestore.googleapis.com/v1/projects/';

const apiKey = import.meta.env.VITE_API_KEY
const projectId = import.meta.env.VITE_PROJECT_ID

export function getTables() {
    try { 
		return axios.get(`${apiUrl}${projectId}/databases/(default)/documents/table?key=${apiKey}`).then(function (response){return response.data});
    } catch (error) {
        return null;
    }
}

export function createTable(newTable) {
    try { 
		return axios.patch(
            `${apiUrl}${projectId}/databases/(default)/documents/table?key=${apiKey}`,
            newTable
            ).then(function (response){return response.data});
    } catch (error) {
        return null;
    }
}