"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const axios_1 = __importDefault(require("axios"));
const pfsense_1 = require("pfsense");
class Client {
    constructor({ base_url, api_key, user, password }) {
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
    getJwt() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(this.base_url + pfsense_1.PfsenseAPI.auth.get.jwt, {
                headers: this.getAuth(),
            });
            this.jwt = response.data.data.token;
        });
    }
    getAuth(overridesAuth) {
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
    createQuery(obj) {
        const queryString = Object.keys(obj)
            .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
            .join("&");
        return `?${queryString}`;
    }
    createFullUrl(endpoint, query) {
        let query_string = query ? this.createQuery(query) : "";
        return endpoint + query_string;
    }
    get(endpoint, query, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const response = yield axios_1.default.get(this.base_url + this.createFullUrl(endpoint, query), {
                    headers: this.getAuth(auth),
                });
                return response.data;
            }
            catch (error) {
                return (_a = error.response) === null || _a === void 0 ? void 0 : _a.data;
            }
        });
    }
    post(endpoint, body, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const response = yield axios_1.default.post(this.base_url + endpoint, body, {
                    headers: this.getAuth(auth),
                });
                return response.data;
            }
            catch (error) {
                return (_a = error.response) === null || _a === void 0 ? void 0 : _a.data;
            }
        });
    }
    put(endpoint, body, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const response = yield axios_1.default.put(this.base_url + endpoint, body, {
                    headers: this.getAuth(auth),
                });
                return response.data;
            }
            catch (error) {
                return (_a = error.response) === null || _a === void 0 ? void 0 : _a.data;
            }
        });
    }
    delete(endpoint, query, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const response = yield axios_1.default.delete(this.base_url + this.createFullUrl(endpoint, query), {
                    headers: this.getAuth(auth),
                });
                return response.data;
            }
            catch (error) {
                return (_a = error.response) === null || _a === void 0 ? void 0 : _a.data;
            }
        });
    }
    patch(endpoint, body, auth) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const response = yield axios_1.default.patch(this.base_url + endpoint, body, {
                    headers: this.getAuth(auth),
                });
                return response.data;
            }
            catch (error) {
                return (_a = error.response) === null || _a === void 0 ? void 0 : _a.data;
            }
        });
    }
}
exports.Client = Client;
