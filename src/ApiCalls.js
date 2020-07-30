export default function ApiCalls() {
  const rootUrl = 'trefle.io/api/v1'
  const apiToken = 'token=wf2V-4m1I00HHw7D-CP1TjvqmirvMX6veHLLikMq8hY'

  return {
    getSomeNativePlants: async () => {
      try {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/${rootUrl}/distributions/colorado/plants?filter%5Bestablishment%5D=native&${apiToken}&page=1`)
        const plantDataPageOne = await response.json()
        console.log(plantDataPageOne)
        return plantDataPageOne
      } catch (error) {
        return { ...error }
      }
    }
  }
}
