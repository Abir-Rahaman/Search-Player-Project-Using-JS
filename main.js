// const

const allPlayers = () => {

    document.getElementById('show-player').innerHTML='';
    const playerField =document.getElementById('player-field').value;
   
    // console.log(playerField)
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${playerField}`
    fetch(url)
    .then(res => res.json())
    .then(data =>displayPlayers(data.player))
    // playerField = '';
   
}
const displayPlayers = (players) => {
    console.log(players)
    const showPlayer = document.getElementById('show-player');
    for(const player of players){
                    const div = document.createElement('div');
                    div.style.display=('flex')
                    div.classList.add('card');
                    div.innerHTML =`<div  style="width: 18rem;">
                    <img src="${player.strThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h4 class="card-title">Name :${player.strPlayer}</h4>
                    <h5 class="card-title">Home :${player.strNationality}</h5>
                    <p class="card-title"> <h5 Information :</h5>${player.strDescriptionEN.slice(0,200)}</p>
                    <button onclick="deletePlayers()" class="btn btn-danger " type="button" id="Delete-button">Delete</button>
                    <button onclick="detailsPlayers('${player.idPlayer}')" class="btn  btn-success " type="button" id="Details-button">Details</button>
                    
                    </div>
                    </div>`;
                    showPlayer.appendChild(div);                


    }
    
   
}

const detailsPlayers =  info =>{
    document.getElementById('details').innerHTML='';
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${info}`
    fetch (url)
    .then (res=> res.json())
    .then(data => displayDetails(data.players[0]))
}

const displayDetails = Details =>{
   const details = document.getElementById('details').innerHTML =`
                <div>
                <div class="card" style="width: 18rem;">
                <img src="${Details.strThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">  Player ID:${Details.idPlayer}</h5>
                    <h5 class="card-text">Player gender:${Details.strGender}</h5>
                    <h5 class="card-text">Player designation:${Details.strPosition}</h5>
                    <p class="card-text">Player Details :${Details.strDescriptionEN.slice(0,200)}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                </div>`;

   




}




