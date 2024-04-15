export type StellarNode = {
    id: string,
    name: string,
    address: string,
    type: 'master' | 'slave',
    status: 'on' | 'off'
    crawler?: 'Playwright' | 'Pupeteer'
}