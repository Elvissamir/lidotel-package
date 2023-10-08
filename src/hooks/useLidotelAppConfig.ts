import { LidotelAppConfig } from "../core"

interface UseAppConfigProps {
    LidotelAppConfig: LidotelAppConfig | null
}

const useLidotelAppConfig = ({ LidotelAppConfig }: UseAppConfigProps) => {
    const getApiUrl = () => {
        if (LidotelAppConfig) return LidotelAppConfig.api.baseUri

        return ''
    }

    const getAppName = () => {
        if (LidotelAppConfig) return LidotelAppConfig.app.subtitle

        return ''
    }

    return {
        getApiUrl,
        getAppName
    }
}

export default useLidotelAppConfig