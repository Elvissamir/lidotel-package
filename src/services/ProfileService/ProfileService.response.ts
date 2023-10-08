import { TenantUser } from "../../core/User.types"

export interface PostUserProfileExtensionResponse {
    userId: string
}

export interface GetUsersListResponse {
    pageIndex: number,
    pageSize: number,
    count: number,
    data: TenantUser[]
}