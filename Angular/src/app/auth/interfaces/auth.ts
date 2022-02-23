export interface AuthResponse {
    ok: boolean,
    uid?: string,
    name?: string,
    msg?: string,
    token?: string
}

export interface User {
    uid: string;
    name: string;
}