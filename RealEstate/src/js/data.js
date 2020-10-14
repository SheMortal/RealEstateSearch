
let places = [
  {
    image: "",
    type: "Apartment",
    location: "Paarl",
    price: 1000,
    bedrooms: 1,
    status: "For rent",
  },
  {
    image: "",
    type: "Estate House",
    location: "Constantia",
    price: 2500,
    bedrooms: 2,
    status: "For sale",
  },
  {
    image: "",
    type: "Condo",
    location: "Rondebosch",
    price: 1500,
    bedrooms: 3,
    status: "For rent",
  },
  {
    image: "",
    type: "Villa",
    location: "Camps Bay",
    price: 5000,
    bedrooms: 4,
    status: "For sale",
  },
  {
    image: "",
    type: "Apartment",
    location: "Paarl",
    price: 3500,
    bedrooms: 4,
    status: "For sale",
  },
  {
    image: "",
    type: "Estate House",
    location: "Constantia",
    price: 4000,
    bedrooms: 3,
    status: "For rent",
  },
  {
    image: "",
    type: "Condo",
    location: "Rondebosch",
    price: 1000,
    bedrooms: 2,
    status: "For sale",
  },
  {
    image: "",
    type: "Villa",
    location: "Camps Bay",
    price: 4500,
    bedrooms: 1,
    status: "For rent",
  },
];

function search() {

  // get input from dropdown
  let searchType = document.getElementById("type").value;
  let searchLocation = document.getElementById("location").value;
  let searchBed = document.getElementById("bedrooms").value;
  let searchStatus = document.getElementById("status").value;

  // filter
  var myPlaces = places.filter((e) => {
    if (
      e.type == searchType &&
      e.location == searchLocation &&
      e.status == searchStatus &&
      e.bedrooms == searchBed
    ) {
      return e;
    }
  });

  console.log(myPlaces);
  // the card
  let card = "";
  for (let i = 0; i < myPlaces.length; i++) {
    card += `<div class="card">
        <div class="card-header">
        <img class="card-img" src=${myPlaces[i].image} alt="property-img">
        </div>
        <div class="card-content">
            <h3>${myPlaces[i].type}</h3>
            <p>
            <i class="fa fa-map-marker "></i>
            ${myPlaces[i].location}</p>
            <p>Price : R${myPlaces[i].price}
            <p>Status : ${myPlaces[i].status}
        </div>
        <hr>
        <div class="card-footer">
            <ul>
                <li>
                <svg style="width:26px;height:26px" viewBox="0 0 24 13">
                    <path fill="#c7cace" d="M19,7H5V14H3V5H1V20H3V17H21V20H23V11A4,4 0 0,0 19,7" />
                    </svg> 
                    ${myPlaces[i].bedrooms} Bedrooms
                </li>
                
            </ul>
            <hr/>
            <button>View Details</button>
        </div>
    </div>`;
  }
  document.getElementById("properties-slider").innerHTML = card;
};

search();