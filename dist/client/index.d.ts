import { PfsenseAPI } from "pfsense";
interface ClientOptions {
    base_url: string;
    api_key?: string;
    user?: string;
    password?: string;
}
type AuthorizationTypes = "jwt" | "basic" | "api_key";
export declare class Client {
    private base_url;
    private api_key;
    private user;
    private password;
    private jwt;
    constructor({ base_url, api_key, user, password }: ClientOptions);
    private getJwt;
    private getAuth;
    private createQuery;
    private createFullUrl;
    get<T>(endpoint: string, query?: any, auth?: AuthorizationTypes): Promise<PfsenseAPI.APIResponse<T> | PfsenseAPI.APIResponseError>;
    post<T>(endpoint: string, body: any, auth?: AuthorizationTypes): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<T>>;
    put<T>(endpoint: string, body: any, auth?: AuthorizationTypes): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<T>>;
    delete<T>(endpoint: string, query?: any, auth?: AuthorizationTypes): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<T>>;
    patch<T>(endpoint: string, body: any, auth?: AuthorizationTypes): Promise<PfsenseAPI.APIResponseError | PfsenseAPI.APIResponse<T>>;
}
export {};
//# sourceMappingURL=index.d.ts.map