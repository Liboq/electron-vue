import { createStorage } from "unstorage";
import fsDriver from "unstorage/drivers/fs";

export const storage = createStorage({
  driver: fsDriver({ base: "./tmp" }),
});

export const getItem = async(key)=>{
    return await storage.getItem(key)
}
export const setItem = async(key,value)=>{
    return await storage.setItem(key, value);
}