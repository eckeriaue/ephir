
export const encode = (value) => Buffer.from(value).toString('base64')
export const decode = (value) => Buffer.from(value, 'base64').toString('ascii')