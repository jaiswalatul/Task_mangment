import { API_URL } from "./utils"
import axios from 'axios'

export const CreateTask = async (taskObj) => {
    const url = `${API_URL}/tasks`;
    console.log('url ', url)
    console.log(taskObj)

    try {
        await axios.post(url, taskObj)
        .then(resp=>console.log(resp))
        .catch(err=>console.log(err))
    } catch (err) {
        return err;
    }
}
export const GetAllTasks = async () => {
    const url = `${API_URL}/tasks`;
    // console.log('url ', url)
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const result = await fetch(url, options);
        const data = await result.json();
        return data;
    } catch (err) {
        return err;
    }
}

    export const DeleteTaskById = async (id) => {
        const url = `${API_URL}/tasks/${id}`;
        console.log('url ', url)
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const result = await fetch(url, options);
            const data = await result.json();
            return data;
        } catch (err) {
            return err;
        }
    }


export const UpdateTaskById = async (id, reqBody) => {
    const url = `${API_URL}/tasks/${id}`;
    console.log('url ', url)
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqBody)
    };
    try {
        const result = await fetch(url, options);
        const data = await result.json();
        return data;
    } catch (err) {
        return err;
    }
}