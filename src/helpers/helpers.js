import { access } from "node:fs/promises"

export const isPathExists = async (path) => {
    try {
        await access(path)
        return true
    } catch (err) {
        return false
    }
}

export const isPathMissed = async (path) => {
    try {
        await access(path)
        return false
    } catch (err) {
        return true
    }    
}