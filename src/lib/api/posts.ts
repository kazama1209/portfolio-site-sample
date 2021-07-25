import { AxiosPromise } from "axios"

import client from "lib/api/client"
import { Post } from "interfaces/index"

// 記事を全件取得
export const getAllPosts =  (): AxiosPromise<{ contents: Post[] }> => {
  return client.get("/blog")
}

// IDから個別の記事を取得
export const getPostById =  (id: string): AxiosPromise<Post> => {
  return client.get(`/blog/${id}`)
}

// ページ番号によって記事を取得
export const getPostsByPageNumber = (pageNumber: number, limit: number): AxiosPromise<{ contents: Post[] }> => {
  return client.get(`blog?offset=${(pageNumber - 1) * limit}&limit=${limit}`)
}

// 最新の記事のみを取得
export const getLatestPosts = (limit: number): AxiosPromise<{ contents: Post[] }> => {
  return client.get(`/blog?limit=${limit}`)
}
