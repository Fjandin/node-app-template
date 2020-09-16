import * as crypto from 'crypto'

/**
 * @param length (default = 64) Lenght of token to generate
 * @description Securly generate a random token
 */
export default (length = 64): string => {
    if (length < 1 || length > 512 || !Number.isSafeInteger(length)) {
        throw new Error('Length must be an integer between 1 and 512')
    }

    return crypto.randomBytes(length).toString('hex').substr(0, length)
}
