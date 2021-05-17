const auth_link = "https://www.strava.com/oauth/token"

function getActivities(res) {

  const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
  fetch(activities_link)
    .then((res) => console.log(res.json()))
}

function reAuthorize() {
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;
  const refresh_token = process.env.REFRESH_TOKEN;

  fetch(auth_link, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'

    },

    body: JSON.stringify({

      client_id: client_id,
      client_secret: client_secret,
      refresh_token: refresh_token,
      grant_type: 'refresh_token'
    })
  }).then(res => res.json())
    .then(res => getActivities(res))
}

reAuthorize()