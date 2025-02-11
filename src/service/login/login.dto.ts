export interface ICurrentUser {
    aud: string
    azp: string
    email: string
    email_verified: boolean
    exp: number
    given_name: string
    iat: number
    iss: string
    jti: string
    name: string
    nbf: number
    picture: string
    sub: string
}

export interface ITokens {
    accessToken: string
    refreshToken: string
}