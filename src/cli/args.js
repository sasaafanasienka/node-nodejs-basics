const parseArgs = () => {
    const env = process.argv.slice(2)
    const res = env.map((el, index) => {
        if (el.startsWith('--')) {
            return `${el.slice(2)} is ${env[index + 1] ?? ''}`
        }
        return undefined
    }).filter(el => el).join(', ')
    console.log(res)
};

parseArgs();