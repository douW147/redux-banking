import axios from "axios";
import { host } from "../constants/actionTypes";

const api = axios.create({
    baseURL: host 
});

export const fetchTasks = () => {
    return api({method: "GET", url: "/tasks"})
}
