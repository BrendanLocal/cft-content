import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Custom404({ req }) {
  const router = useRouter()
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    router.replace(baseUrl + "/home")

  return null
}