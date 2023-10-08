export interface Preference {
    code: string 
    value: string
}

export interface UserProfileExtension {
    code: string 
    data: string
}

export interface Tenant {
    createdBy: string 
    createdDateTime: Date 
    domains: string[]
    isDemo: boolean 
    isIdentityProviders: string[]
    lastModifiedBy: string 
    lastModifiedDateTime: Date 
    organizationIdentifier: string 
    organizationName: string 
    state: string 
    subscriptions: any[]
    subscriptionsMigrated: boolean
    tenantId: string 
    tenantStatus: string 
    tenantType: string
}

interface TenantUserTenantDescription {
    tenantId: string,
    status: any,
    roles: string[]
}

export interface TenantUserApplicationRole {
    role: string 
    isAssigned: boolean 
}

export interface TenantUserLicense {
    subscriptionTenantId: string
    isTenantSubscribed: boolean
    tenantSubscriptionId: string
    tenantSubscriptionStartDateTime: string
    tenantSubscriptionEndDateTime: string
    tenantSubscriptionActualEndDateTime: string
    numberOfLicenses: number
    assignedLicenses: number
    isUserLicensed: boolean
    applicationTenantId: string
    applicationId: string
    applicationName: string
    applicationRole: TenantUserApplicationRole[]
} 

export interface TenantUserLogins {
    loginProvider: string
    providerDisplayName: string
}

export interface TenantUser {
    userId: string
    userName: string
    email: string
    firstName: string
    lastName: string
    tenantCount: number
    tenants: TenantUserTenantDescription[]
    licenses: TenantUserLicense[]
    createdBy: string
    createdDateTime: string
    lastModifiedBy: string
    lastModifiedDateTime: string
    logins: TenantUserLogins[]
}

export interface UserProfile {
    tenantId: string
    firstName: string 
    lastName: string
    userName: string 
    email: string
    preferences: Preference[]
    extensions: UserProfileExtension[]
    tenants: Tenant[]
}

export interface UserData extends UserProfile {
    name: string 
    email: string
}