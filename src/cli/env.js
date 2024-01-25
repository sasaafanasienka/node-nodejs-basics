const parseEnv = () => {
    const res = Object.keys(process.env).filter(key => key.startsWith('RSS_')).map(key => `${key}=${process.env[key]}`).join('; ')
    console.log(res)
};

parseEnv();