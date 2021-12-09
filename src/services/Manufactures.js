import axios from "axios";
import { baseUrl } from "../utilities/baseUrl";


export async function GetManufactures() {
    return (await (axios.get(`${baseUrl}/avto/`, { headers: {
        'Authorization': 'Bearer vtbaz'
    }}))).data;
};