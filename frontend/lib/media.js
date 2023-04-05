import { getStrapiURL } from "./api"

export function getStrapiMedia(media) {
  const { url } = media.data ? media.data.attributes : ""
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url
  return imageUrl
}
