import { UserProfile } from "../../core"
import httpService from "../HttpService/HttpService"
import { PostUserProfileExtensionRequest } from "./ProfileService.requests"
import { GetUsersListResponse, PostUserProfileExtensionResponse } from "./ProfileService.response"
import { GetUserProfileResult, GetUsersListResult, PostTenantIdPreference, PostUserProfileExtensionResult } from "./ProfileService.result"

const fetchUserProfile = async (token: string, apiUrl: string) : GetUserProfileResult => {
    const url = `${apiUrl}/me`

    const result = await httpService.get<UserProfile>({
        url,
        actionName: "Get User Profile",
        access_token: token
    })
    
    return result
}

const getUser = async (token: string, apiUrl: string, tenantId: string, email: string) : GetUsersListResult => {
    const baseUrl = `${apiUrl}/tenants/${tenantId}/users`

    let filter = ""
    if (email.includes("+")) {
        const valuesArray = email.split("+")
        filter = `pageIndex=0&pageSize=10&filter=email.toLower().contains("${valuesArray[0]}")&&email.toLower().contains("${valuesArray[1]}")&orderBy=firstName asc`
    }
    else 
        filter = `pageIndex=0&pageSize=10&filter=email.toLower().contains("${email}".toLower())&orderBy=firstName asc`

    const url = `${baseUrl}?${filter}`

    const result = await httpService.get<GetUsersListResponse>({
        url,
        actionName: 'Get User by Email',
        access_token: token
    })

    return result
}

const addUserExtension = async (token: string, apiUrl: string, request: PostUserProfileExtensionRequest) : PostUserProfileExtensionResult => {
    const url = `${apiUrl}/me/extensions`

    const result = await httpService.post<PostUserProfileExtensionResponse, PostUserProfileExtensionRequest>({
        url,
        data: request,
        actionName: "Create/Update user extensions",
        access_token: token
    })

    return result
}

const updateUserExtension = async (token: string, apiUrl: string, request: PostUserProfileExtensionRequest) : PostUserProfileExtensionResult => {
    return await addUserExtension(token, apiUrl, request)
}

const updateTenantIdPreference = async (token: string, tenantId: string, apiUrl: string): PostTenantIdPreference => {
    const url = `${apiUrl}/me/preferences`
    const data = { code: 'selectedtenantid', value: tenantId }

    const result = await httpService.post<any, any>({
        url,
        data,
        actionName: 'Post User Preferences',
        access_token: token
    })

    return result
}

export {
    fetchUserProfile,
    getUser,
    addUserExtension,
    updateUserExtension,
    updateTenantIdPreference
}