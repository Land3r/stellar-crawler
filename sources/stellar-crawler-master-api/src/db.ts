import sqlite3, { Database } from 'sqlite3'
import { join } from 'path'
import { DB_NAME, DB_PATH } from './config'

const DB_FULLPATH = join(DB_PATH, DB_NAME)
console.log(DB_FULLPATH)
const _init = () => new sqlite3.Database(DB_FULLPATH)

const db: Database = _init()

const _create = (db: Database) => {
    db.run('CREATE TABLE IF NOT EXISTS messages (client TEXT NOT NULL, received_at INTEGER NOT NULL, message_type TEXT NOT NULL, message_data TEXT)')
}

export const createDbIfNeeded = () => {
    _create(db)
}

export default db