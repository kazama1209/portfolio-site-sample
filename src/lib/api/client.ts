import axios from "axios"

const serviceId: string = process.env.NEXT_PUBLIC_MICRO_CMS_SERVICE_ID
const baseUrl: string = `https://${serviceId}.microcms.io/api/v1`
const apiKey: string = process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY

const client = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": apiKey
  }
})

export default client
