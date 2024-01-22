import {writeFile, access} from 'node:fs/promises';
import path from 'node:path';

class Creator {
    constructor() {
        this.path = 'src/fs/files/fresh.txt';
        this.content = 'I am fresh and young'
    }

    fileExists = async () => {
        return access(this.path).then(res => {
            console.log('res', res)
            return res
        }).catch((err) => {
            console.log('err', err)
            return err
        })
    }

    create = async () => {
        this.fileExists().then(res => {
            console.log(res)
        })
    
    
    
        // const aaa = await fs.access(PATH)
        // fs.realpath(PATH).then((res) => {
        //     console.log(res)
        // }).catch(err => {
        //     console.log(err)
        // })
        // const file = await open(PATH).then(res => {
        //     console.log(res)  
        // }).catch((err) => {
        //     console.log('Err', err)
        // })
        // Write your code here 
    };

}

const creator = new Creator()
creator.create();