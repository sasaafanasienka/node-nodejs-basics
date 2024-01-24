import {access, readdir, mkdir, stat, copyFile} from 'node:fs/promises';
import path from 'node:path';

const copy = async () => {
    const originPath = path.join('src/fs/files');
    const copyPath = path.join('src/fs/files_copy');

    const isFilesExists = async () => {
        try {
            await access(originPath)
            return true
        } catch (err) {
            return false
        }
    }
    
    const isCopyMissed = async () => {
        try {
            await access(copyPath)
            return false
        } catch (err) {
            return true
        }    
    }

    const recursiveCopyFolder = async (copyPath, originPath) => {
        await mkdir(copyPath, { recursive: true })
        const list = await readdir(originPath)
        list.forEach(async element => {
            const fileOriginPath = `${originPath}/${element}`
            const fileCopyPath = `${copyPath}/${element}`
            const stats = await stat(fileOriginPath)
            const isFile = stats.isFile()
            const isDirectory = stats.isDirectory()
            if (isFile) {
                copyFile(fileOriginPath, fileCopyPath)
            }
            if (isDirectory) {
                recursiveCopyFolder(fileCopyPath, fileOriginPath)
            }
        })
    }

    Promise.all([isCopyMissed(), isFilesExists()]).then(async (values) => {
        if (values.includes(false)) {
            throw Error('FS operation failed')
        }
        recursiveCopyFolder(copyPath, originPath)
    }).catch((error) => {
        console.error(error)
    })
    // Write your code here 
};

await copy();
