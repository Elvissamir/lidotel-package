import { ExternalAppData } from "../../core";
import { HttpServiceRequestError, HttpServiceResponse } from "../HttpService/HttpService.response.types";

export type GetApplicationsListResult = Promise<HttpServiceResponse<ExternalAppData[]> | HttpServiceRequestError>