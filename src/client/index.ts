import axios, { Axios, AxiosError } from "axios";
import Pfsense, { PfsenseAPI } from "pfsense";

interface ClientOptions {
    base_url: string;
    api_key?: string;
    user?: string;
    password?: string;
}
type AuthorizationTypes = "jwt" | "basic" | "api_key";
export class Client {
    base_url: string;
    api_key: string | undefined;
    user: string | undefined;
    password: string | undefined;
    jwt: string | undefined;
    constructor({ base_url, api_key, user, password }: ClientOptions) {
        this.api_key = api_key;
        this.user = user;
        this.password = password;
        this.base_url = base_url;
        this.jwt;
        if (this.user && !this.password) {
            throw new Error("Password is required when user is provided");
        }
        if (!this.user && !this.api_key) {
            throw new Error("Either user or api_key is required");
        }
        if (this.api_key && this.user) {
            throw new Error("Either user or api_key is required, not both");
        }

        if (this.user) {
            this.getJwt();
        }
    }
    private async getJwt() {
        const response = await axios.get<PfsenseAPI.APIResponse>(this.base_url + PfsenseAPI.auth.get.jwt, {
            headers: this.getAuth(),
        });
        this.jwt = response.data.data.token;
    }
    private getAuth(overridesAuth?: AuthorizationTypes) {
        // if endpoint requires a different auth method than the default
        if (overridesAuth) {
            switch (overridesAuth) {
                case "jwt":
                    return {
                        Authorization: "Bearer " + this.jwt,
                    };
                case "basic":
                    return {
                        Authorization: "Basic " + Buffer.from(this.user + ":" + this.password).toString("base64"),
                    };
                case "api_key":
                    return {
                        "X-API-Key": this.api_key,
                    };
                default:
                    throw new Error(`Unknown auth type provided ${overridesAuth}`);
            }
        }

        // else default to api_key first then the rest
        if (this.api_key) {
            return {
                "X-API-Key": this.api_key,
            };
        }
        if (this.jwt) {
            return {
                Authorization: "Bearer " + this.jwt,
            };
        }
        return {
            Authorization: "Basic " + Buffer.from(this.user + ":" + this.password).toString("base64"),
        };
    }

    private createQuery(obj: any) {
        const queryString = Object.keys(obj)
            .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
            .join("&");
        return `?${queryString}`;
    }
    private createFullUrl(endpoint: string, query: any) {
        let query_string = query ? this.createQuery(query) : "";

        return endpoint + query_string;
    }

    async get(endpoint: string, query?: any, auth?: AuthorizationTypes) {
        try {
            const response = await axios.get<PfsenseAPI.APIResponse>(this.base_url + this.createFullUrl(endpoint, query), {
                headers: this.getAuth(auth),
            });
            return response.data;
        } catch (error) {
            return (error as AxiosError).response?.data as PfsenseAPI.APIResponseError;
        }
    }
    async post(endpoint: string, body: any, auth?: AuthorizationTypes) {
        try {
            const response = await axios.post<PfsenseAPI.APIResponse>(this.base_url + endpoint, body, {
                headers: this.getAuth(auth),
            });
            return response.data;
        } catch (error) {
            return (error as AxiosError).response?.data as PfsenseAPI.APIResponseError;
        }
    }
    async put(endpoint: string, body: any, auth?: AuthorizationTypes) {
        try {
            const response = await axios.put<PfsenseAPI.APIResponse>(this.base_url + endpoint, body, {
                headers: this.getAuth(auth),
            });
            return response.data;
        } catch (error) {
            return (error as AxiosError).response?.data as PfsenseAPI.APIResponseError;
        }
    }
    async delete(endpoint: string, query?: any, auth?: AuthorizationTypes) {
        try {
            const response = await axios.delete<PfsenseAPI.APIResponse>(this.base_url + this.createFullUrl(endpoint, query), {
                headers: this.getAuth(auth),
            });
            return response.data;
        } catch (error) {
            return (error as AxiosError).response?.data as PfsenseAPI.APIResponseError;
        }
    }
    async patch(endpoint: string, body: any, auth?: AuthorizationTypes) {
        try {
            const response = await axios.patch<PfsenseAPI.APIResponse>(this.base_url + endpoint, body, {
                headers: this.getAuth(auth),
            });
            return response.data;
        } catch (error) {
            return (error as AxiosError).response?.data as PfsenseAPI.APIResponseError;
        }
    }
}
