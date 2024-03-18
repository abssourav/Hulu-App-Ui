import axios from 'axios'
import { MessageContants } from '../config/constant/message.constant'
import { EnvConfig } from '../config/env.config'

export const ApiServices = axios.create({
    baseURL : EnvConfig.BASE_URL,
    timeout: 10000,
    timeoutErrorMessage:MessageContants.SLOW_INTERNET
})