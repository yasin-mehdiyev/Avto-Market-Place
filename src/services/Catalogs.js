import axios from "axios";
import { baseUrl } from "../utilities/baseUrl";


export async function GetCatalogs(manuId) {
    return (await (axios.get(`${baseUrl}/avto/${manuId}`, { headers: {
        'Authorization': 'Bearer vtbaz'
    }}))).data;
};

export async function GetDetailsOfCatalogs(catalogType) {
    return (await (axios.get(`${baseUrl}/avto/${catalogType}`, { headers: {
        'Authorization': 'Bearer vtbaz'
    }}))).data;
}

export async function GetEylecSystemByCatalogType(catalogType) {
    return (await (axios.get(`${baseUrl}/avto/${catalogType}/eylec-sistemi`, { headers: {
        'Authorization': 'Bearer vtbaz'
    }}))).data;
}