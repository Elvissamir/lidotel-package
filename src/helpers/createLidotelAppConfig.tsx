import { User } from "oidc-client-ts"
import { AuthProviderProps } from "react-oidc-context"
import { LidotelAppConfig } from "../core"

const createLidotelAppConfig = (config: LidotelAppConfig) => {
  const oidcConfig: AuthProviderProps = {
    authority: config.auth.authority ?? '',
    client_id: config.auth.clientId ?? '',
    redirect_uri: config.auth.redirectUri ?? '',
    silent_redirect_uri: config.auth.silentRedirectUri,
    post_logout_redirect_uri: config.auth.postLogoutRedirectUri,
    scope: config.auth.scope,
    response_type: config.auth.responseType,
    loadUserInfo: config.auth.loadUserInfo,
    automaticSilentRenew: config.auth.automaticSilentRenew,
    onSigninCallback: (_user: User | void): void => {
      window.history.replaceState({}, document.title, window.location.pathname)
    }
  }

  return oidcConfig
}

export default createLidotelAppConfig