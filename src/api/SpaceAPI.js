import axios from "axios";

const apiUrl = 'https://firestore.googleapis.com/v1/projects/';

const apiKey = import.meta.env.VITE_API_KEY
const projectId = import.meta.env.VITE_PROJECT_ID

export function getSpaces() {
    try { 
		return axios.get(`${apiUrl}${projectId}/databases/(default)/documents/space?key=${apiKey}`).then(function (response){
            let spacesFirebase = response.data.documents
            let spaces = []
            for(let sp of spacesFirebase){
                let space = {
                    id: sp.fields.id.stringValue,
                    title: sp.fields.title.stringValue,
                    color: sp.fields.color.stringValue 
                }
                spaces.push(space)
            }
            return spaces
        });
    } catch (error) {
        return null;
    }
}