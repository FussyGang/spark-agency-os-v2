import axios from "axios";
import { HUBSPOT_CONFIG } from "./config";

export const hubspot = axios.create({

    baseURL: HUBSPOT_CONFIG.BASE_URL,

    headers: {

        Authorization: `Bearer ${HUBSPOT_CONFIG.TOKEN}`,

        "Content-Type": "application/json"

    }

});