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

export default async function getColoradoNativePlants() {
  const { proxyUrl, coloradoNativePlantsUrl } = createRequestPaths()
  const pageNumbers = ['2', '5', '13', '34', '89']

  const responsePart = await fetch(`${proxyUrl}${coloradoNativePlantsUrl}&page=${pageNumbers[0]}`)
  const { data } = await responsePart.json()
  return data
}
