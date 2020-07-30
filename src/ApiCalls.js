const rootUrl = "https://trefle.io/api/v1"
const apiToken = "token=wf2V-4m1I00HHw7D-CP1TjvqmirvMX6veHLLikMq8hY"

export async function getSomeNativePlants() {
  try {
  const  response = await fetch(`${rootUrl}/distributions/colorado/plants?filter%5Bestablishment%5D=native&${apiToken}&page=1`)
  const plantDataPageOne = await response.json()
  console.log(plantDataPageOne)
  return plantDataPageOne
  } catch(error) {
    console.error(error)
  }
}
