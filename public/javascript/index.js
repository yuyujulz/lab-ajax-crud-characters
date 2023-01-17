// const axios = require("axios");

const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    // const allChar = document.getElementsByClassName('name').setAttribute('Character Name', charactersAPI.name);
   
  // axios
  // .get(charactersAPI.getFullList)
  // .then(responseFromAPI => console.log(charactersAPI.getFullList, responseFromAPI))
  // .catch(err => console.log('Error while getting the data: ', err))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const idOfOne = document.getElementById('oneCharacterId').value
    axios
    .get(`http://localhost:8000/characters/${idOfOne}`)
    .then((character)=> {
      document.getElementById('name').innerHTML=character.data.name
      document.getElementById('occupation').innerHTML=character.data.occupation
      document.getElementById('cartoon').innerHTML=character.data.cartoon
      document.getElementById('weapon').innerHTML=character.data.weapon
    })
    .catch(error => console.log(error));
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const idDeleteOne = document.getElementById('deleteChatacter').value
    axios
    .delete(`http://localhost:8000/characters/${idDeleteOne}`)
    .catch(error => console.log(error));
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const createOne = document.getElementById('send-data').value
    axios
    .create(`http://localhost:8000/characters/${createOne}`)
    .then((newChar)=>{
      
      event.preventDefault();
    })
    .catch(error => console.log(error));
  });
});
