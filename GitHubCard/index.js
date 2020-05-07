/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>


*/
// console.log(axios.get('https://api.github.com/users/jasonelliots'))


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const cards = document.querySelector('.cards')

function cardMaker(userObj){
  const cardDiv = document.createElement('div')
  const cardImg = document.createElement('img')
  const cardInfo = document.createElement('div')
  const cardName = document.createElement('h3')
  const cardUsername = document.createElement('p')
  const cardLocation = document.createElement('p')
  const cardProfile = document.createElement('p')
  const cardAddress = document.createElement('a')
  const cardFollowers = document.createElement('p')
  const cardFollowing = document.createElement('p')
  const cardBio = document.createElement('p')

  cardDiv.appendChild(cardImg)
  cardDiv.appendChild(cardInfo)
  cardInfo.appendChild(cardName)
  cardInfo.appendChild(cardUsername)
  cardInfo.appendChild(cardLocation)
  cardInfo.appendChild(cardProfile)
  cardProfile.appendChild(cardAddress)
  cardInfo.appendChild(cardFollowers)
  cardInfo.appendChild(cardFollowing)
  cardInfo.appendChild(cardBio)

  cardDiv.classList.add('card')
  cardInfo.classList.add('card-info')
  cardName.classList.add('name')
  cardUsername.classList.add('username')

  cardImg.src = userObj.avatar_url
  cardName.textContent = userObj.name
  cardUsername.textContent = userObj.login
  cardLocation.textContent = `Location: ${userObj.location}`
  cardProfile.textContent = "Profile:"
  cardAddress.href = userObj.url
  cardAddress.textContent = userObj.url
  cardFollowers.textContent = userObj.followers
  cardFollowing.textContent = userObj.following
  cardBio.textContent = userObj.bio

  return cardDiv

}


/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/


function cardAppender(user){
  axios.get(`https://api.github.com/users/${user}`)
  .then(response => {
    const newCard = cardMaker(response.data)
    // console.log(newCard)
    cards.appendChild(newCard)
  })
  .catch(error => {
    console.log('I couldnt find that user')
  })
}

cardAppender()

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell', 'jasonelliots'];

followersArray.forEach(user => {
  cardAppender(user)
})


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
