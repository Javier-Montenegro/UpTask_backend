import bcryptjs from 'bcryptjs'


export const hashPassword = async (password: string) => {
    const salt = await bcryptjs.genSalt(10)
    return await bcryptjs.hash(password, salt)
}

export const checkPassword = async (enteredPassword: string, storedHash: string) => {
    return await bcryptjs.compare(enteredPassword, storedHash)
}