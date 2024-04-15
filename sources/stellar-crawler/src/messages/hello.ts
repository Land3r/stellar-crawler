import { StellarNode } from "../types/StellarNode";

export const HELLO = 'stellar.hello'

export interface HelloMessage extends StellarNode {
    client: string,
}