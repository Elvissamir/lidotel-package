export interface ExternalAppData {
    applicationId: string 
    applicationName: string 
    applicationTenantId: string 
    applicationUri: string 
    darkBackgroundTileUrl?: string 
    darkIconUrl?: string 
    darkOverlayTileUrl?: string 
    groups: string
    isTenantSubscribed: boolean 
    isUserLicensed: boolean 
    lightBackgroundTileUrl?: string 
    lightIconUrl?: string 
    lightOverlayTileUrl?: string 
    openInNewWindow: boolean
    showInAppLauncher: boolean
    showInQuickLauncher: boolean 
    subscriptioTenantId: string 
    tags: string 
    tooltipText: string 
    version: string 
}

export interface ExternalAppsContextData {
    externalApps: ExternalAppData[]
    loadingExternalApps: boolean
    fetchedExternalApps: boolean
    setExternalApps: React.Dispatch<React.SetStateAction<ExternalAppData[]>>
}
