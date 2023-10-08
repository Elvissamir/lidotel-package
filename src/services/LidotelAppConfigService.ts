const configUri = '/config.json'

interface FetchConfigParams {
    env: string | undefined
    serverMode: string | undefined
}

const fetchConfig = async ({ env, serverMode }: FetchConfigParams) => {
    const serveMode = serverMode && serverMode[serverMode.length - 1] === ""? serverMode.substring(0, serverMode.length - 1) : serverMode

    let uri = ''

    if (env) {
        if (serveMode === 'node') 
            uri = configUri
        else 
            uri = '/local.config.json'
    }
    else {
        uri = configUri
    }

    const configData = await fetch(uri)
    const config = await configData.json()

    return config
}

export default fetchConfig