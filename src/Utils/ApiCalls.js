const createRequestPaths = () => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  const rootUrl = 'https://trefle.io/api/v1'
  const apiToken = 'token=tz_mp8S975h1F3mwzjAKmXlkig-rSuOVhJlg858ToOM'
  const path2ColoradoNativePlants = 'distributions/colorado/plants?filter%5Bestablishment%5D=native'

  return {
    proxyUrl,
    coloradoNativePlantsUrl: `${rootUrl}/${path2ColoradoNativePlants}&${apiToken}`
  }
}

/* eslint-disable */
export default async function getColoradoNativePlants() {
  const { proxyUrl, coloradoNativePlantsUrl } = createRequestPaths()

  try {
    const response = await fetch(`${proxyUrl}${coloradoNativePlantsUrl}&page=2`)
    if (response.ok) {
      const { data } = await response.json()
      return data
    }
  } catch (error) {
    return error
  }
}
/* eslint-enable */
