import { useEffect, useState } from "react"
import { LidotelAppConfig } from "../core"
import fetchConfig from "../services/LidotelAppConfigService"

interface UseFetchLidotelAppConfig {
    env: string | undefined
    serverMode: string | undefined
}

const useFetchLidotelAppConfig = ({ env, serverMode }: UseFetchLidotelAppConfig) => {
    const [appConfig, setAppConfig] = useState<LidotelAppConfig | null>(null)

    const fetchAppConfig = async () => {
        const config = await fetchConfig({ env, serverMode })

        setAppConfig(config)
    }

    useEffect(() => {
        fetchAppConfig()
    }, [])

    return {
        appConfig
    }
}

export default useFetchLidotelAppConfig