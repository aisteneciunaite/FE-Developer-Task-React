import { createApi } from 'unsplash-js'
import { unsplashKey } from './config'

const accessKey = unsplashKey as string

const unsplash = createApi({ accessKey })

export default unsplash
