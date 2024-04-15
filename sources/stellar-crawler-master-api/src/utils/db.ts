import { DB_PREFIX } from "../config"

import db from "../db"

export const addMessage = (client: string, message_type: string, message_data?: any) => {
    let data: string | null
    if (typeof message_data === 'object') {
        data = JSON.stringify(message_data)
    } else {
        data = message_data.toString()
    }
    db.get(`INSERT INTO ${getTableName('messages')} (client, received_at, message_type, message_data) VALUES (?, ?, ?, ?)`, [client, new Date(), message_type, data])
}

export const getTableName = (tableName: string) => `${tableName}`