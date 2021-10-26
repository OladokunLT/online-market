let carArr = [
    {carImage: "02RA_medium", title:"02RA Medium", price:"$200"},
    {carImage: "2004-toyota-4runner-limited", title: "2004 Toyota 4runner limited", price: "$200"},
    {carImage: "2010-toyota-corolla", title: "2010 Toyota corolla", price: "$200"},
    {carImage: "2012_lexus", title: "2012 Lexus", price: "$200"},
    {carImage: "2015_Cadillac", title: "2015 Cadillac", price: "$200"},
    {carImage: "2017_dodge_charger", title: "2017 Dodge charger", price: "$200"},
    {carImage: "2017_honda", title: "2017 Honda", price: "$200"},
    {carImage: "2018_honda", title: "2018 Honda", price: "$200"},
    {carImage: "2019_chevrolet_sonic", title: "2019 Chevrolet sonic", price: "$200"},
    {carImage: "2019-lexus", title: "2019 Lexus", price: "$200"},
    {carImage: "2019-mercedes-benz", title: "2019 Mercedes benz", price: "$200"},
    {carImage: "2019-toyota-highlander", title: "2019 Toyota highlander", price: "$200"},
    {carImage: "2020-toyota-camry", title: "2020 Toyota camry", price: "$200"},
    {carImage: "2021_honda_civic", title: "2021_honda_civic.jpeg", price: "$200"},
    {carImage: "2021_toyota_sienna", title: "2021 Toyota sienna", price: "$200"},
    {carImage: "a_medium", title: "A Medium", price: "$200"}
]

let carSection = document.getElementById("car-wrapper");
let html = "";

carArr.forEach(e=>{
    html += `  
                <div class="card col-12 col-md-6 col-lg-3" >
                    <img src="./images/${e.carImage}.jpeg" class="card-img-top img-fluid" alt="...">
                    <div class="card-body-bottom text-center pb-3">
                        <h5 class="card-title"> ${e.title}</h5>
                        <p class="card-text fs-4">${e.price}</p>
                        <a href="#" class="btn btn-dark">Order</a>
                    </div>
                </div>
             `
console.log(e);
carSection.innerHTML = html;
});