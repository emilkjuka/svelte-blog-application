import { writable } from "svelte/store";

import data from "../static/postsData.json";


export const postsData = writable(data);