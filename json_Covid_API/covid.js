document.getElementById("submit").addEventListener("click", function() 
{
    let city_name = document.getElementById("city_name").value.toUpperCase()

    let city_Map = {
        "AN": "Andaman and Nicobar Island",
        "AP": "Andhra Pradesh",
        "AR": "Arunachal Pradesh",
        "AS": "Assam",
        "BR": "Bihar",
        "CH": "Chandigarh",
        "CT": "Connecticut",
        "DL": "Delhi",
        "DN": "Dadra and Nagar Haveli",
        "GA": "Goa",
        "GJ": "Gujarat",
        "HP": "Himachal Pradesh",
        "HR": "Haryana",
        "JH": "Jharkhand",
        "JK": "Jammu and Kashmir",
        "KA": "Karnataka",
        "KL": "Kerala",
        "LA": "Louisiana",
        "LD": "Lakshadweep",
        "MH": "Maharashtra",
        "ML": "Meghalaya",
        "MN": "Minnesota",
        "MP": "Madhya Pradesh",
        "MZ": "Mizoram",
        "NL": "Nagaland",
        "OR": "Orissa",
        "PB": "Punjab",
        "PY": "Pondicherry",
        "RJ": "Rajasthan",
        "SK": "Sikkim",
        "TG": "Telangana",
        "TN": "Tamil Nadu",
        "TR": "Tripura",
        "TT": "Tirupati Temple",
        "UP": "Uttar Pradesh",
        "UT": "union territory",
        "WB": "West Bengal"
        // Add more mappings as needed
    }
    let full_form = city_Map[city_name]

    let state_Images = {
        "AN": "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/05/06133426/5r4t-1.jpg",
        "AP": "https://s3.india.com/wp-content/uploads/2024/04/Feature-Image_-Vijayawada-2.jpg",
        "AR": "https://nenews.in/wp-content/uploads/2023/09/Tawang-Marathon-2.jpg",
        "AS": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/The_Rang_Ghar_of_Assam.jpg/1280px-The_Rang_Ghar_of_Assam.jpg",
        "BR": "https://png.pngtree.com/thumb_back/fw800/background/20240704/pngtree-view-of-bihar-image-hd-image_15859238.jpg",
        "CH": "https://rajputanacabs.b-cdn.net/wp-content/uploads/2022/08/japanese-garden-in-chd.webp",
        "CT": "https://tobin.yale.edu/sites/default/files/styles/tobin_callout_header_1440/public/2023-03/iStock-1319339505%20%281%29.jpg?h=119335f7&itok=EMMugan6",
        "DL": "https://indianexpress.com/wp-content/uploads/2019/05/taj-mahal.jpg",
        "DN": "https://www.adotrip.com/public/images/state/master_images/5fc77cd39ab84-Master.jpg",
        "GA": "https://img.freepik.com/free-photo/beautiful-luxury-hotel-swimming-pool-resort_74190-1678.jpg?t=st=1722518361~exp=1722521961~hmac=67e37d2a676239c77feb3461467d2bce3f8b869200cef27b5861812903135b89&w=996",
        "GJ": "https://images.playground.com/6a1d8a6f399a492f921c9c29da1cbe25.jpeg",
        "HP": "https://img.freepik.com/free-photo/remote-accomadtion_1308-4874.jpg?t=st=1722522369~exp=1722525969~hmac=5770712d7a1972dd325a0d95d5f39fed79cdde13a676e7476403db50c27ddeea&w=996",
        "HR": "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/karnal.jpg",
        "JH": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mausoleum_of_Sher_Shah_5.jpg/1200px-Mausoleum_of_Sher_Shah_5.jpg",
        "JK": "https://images.pexels.com/photos/16498513/pexels-photo-16498513.jpeg?cs=srgb&dl=pexels-soubhagya23-16498513.jpg&fm=jpg",
        "KA": "https://static.wanderon.in/wp-content/uploads/2023/08/top-min-28.jpg",
        "KL": "https://img.freepik.com/free-photo/view-breathtaking-beach-nature-landscape_23-2151682919.jpg?t=st=1722525111~exp=1722528711~hmac=9f5b329bf95c52d2ed8ef581fc40cc2184a3c585a0712a8708f712f177f9e2bb&w=1060",
        "LA": "https://img.freepik.com/free-photo/view-beautiful-rainbow-appearing-end-road_23-2151563004.jpg?t=st=1722527457~exp=1722531057~hmac=326204d1f34536f1335219fa6c829662bf71dac80c52c79f7f52e88cc4432f9e&w=1380",
        "LD": "https://yourtravelexercise.com/wp-content/uploads/2021/03/Bora-Bora-1024x683.jpg",
        "MH": "https://i.pinimg.com/originals/73/2d/0d/732d0d8f5b72ace19098c48a6536e9bc.jpg",
        "ML": "https://mediaim.expedia.com/destination/2/741cf9a68e2e06e6c6c08a227a0220d5.jpg",
        "MN": "https://landscapephotographymagazine.com/wp-content/uploads/2021/10/Lake-Superior-Outcrop-North-Shore-Minnesota-USA.jpg",
        "MP": "https://housing.com/news/wp-content/uploads/2022/10/shutterstock_1351065545-1-scaled.jpg",
        "MZ": "https://media.assettype.com/outlooktraveller/2024-04/10b968c1-e74c-47fa-9cc4-3d2b5134efd4/shutterstock_1740129176.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
        "NL": "https://static.toiimg.com/photo.cms?photoid=108765880",
        "OR": "https://etimg.etb2bimg.com/photo/86611466.cms",
        "PB": "https://www.paradiseunexplored.com/images/destination/88968punjab-banner.jpg",
        "PY": "https://intheworldsjungle.com/wp-content/uploads/2019/10/20171229_162026-1024x576.jpg",
        "RJ": "https://s1.1zoom.me/b4742/110/Desert_Camels_Men_Hill_Sand_547452_1920x1080.jpg",
        "SK": "https://www.tourmyindia.com/blog/wp-content/uploads/2021/05/Best-Places-to-Visit-in-Sikkim.jpg",
        "TG": "https://tourmyodisha.com/wp-content/uploads/2022/10/Secunderabad.jpg",
        "TN": "https://static.tnn.in/thumb/msid-106738205,thumbsize-397190,width-1280,height-720,resizemode-75/106738205.jpg?quality=100",
        "TR": "https://media2.thrillophilia.com/images/photos/000/380/989/original/1647499892_shutterstock_1151226422.jpg?gravity=center&width=1280&height=642&crop=fill&quality=auto&fetch_format=auto&flags=strip_profile&format=jpg&sign_url=true",
        "TT": "https://img.freepik.com/premium-photo/vibrant-scene-showing-devotees-gathered-temple_950002-650242.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721952000&semt=sph",
        "UP": "https://wallpapercave.com/wp/wp13933241.jpg",
        "UT": "https://wallpapers.com/images/featured/travel-hd-axhrsecphqby11wk.jpg",
        "WB": "https://assets.zeezest.com/blogs/PROD_Banner_1659452370799.jpg"
        // Add more mappings as needed
    }

    fetch(`https://data.covid19india.org/v4/min/data.min.json`)
    .then(res => res.json())
    .then(json => 
    {
        console.clear()
        console.log(json)
        displayData(json, city_name, full_form, state_Images)
    })
    .catch(error => 
    {
        console.log('Error Fetching The Covid Data:', error)
    })
})

function displayData(json, city_name, full_form, state_Images) {
    let main = document.getElementById("main");
    main.innerHTML = "";

    // Create and append text information
    let div = document.createElement("div");

    let name = document.createElement("p");
    name.innerHTML = `<b class="color">City Name: </b> ${full_form}`;

    let tested = document.createElement("p");
    tested.innerHTML = `<b class="color">Tested : </b> ${json[city_name].total.tested}`;

    let confirmed = document.createElement("p");
    confirmed.innerHTML = `<b class="color">Confirmed : </b> ${json[city_name].total.confirmed}`;

    let vaccinated1 = document.createElement("p");
    vaccinated1.innerHTML = `<b class="color">Vaccinated1 : </b> ${json[city_name].total.vaccinated1}`;

    let vaccinated2 = document.createElement("p");
    vaccinated2.innerHTML = `<b class="color">Vaccinated2 : </b> ${json[city_name].total.vaccinated2}`;

    let recovered = document.createElement("p");
    recovered.innerHTML = `<b class="color">Recovered : </b> ${json[city_name].total.recovered}`;

    div.append(name, tested, confirmed, vaccinated1, vaccinated2, recovered);
    main.appendChild(div);

    // Set background image based on state_Images
    if (state_Images[city_name]) {
        document.body.style.backgroundImage = `url(${state_Images[city_name]})`;
    } else {
        document.body.style.backgroundImage = 'url(https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=)';
        // document.body.style.backgroundImage = `url(https://picsum.photos/seed/${city_name}/1600/900)`
    }

    main.style.background = "linear-gradient(rgb(0,0,0,0.6), rgb(0,0,0,0.6), rgb(0,0,0,0.6))";
    main.style.backgroundSize = "100% 100%";
    document.getElementById("bg_color").style.background = "none";
    document.getElementById("bg_color").style.color = "black";
    document.getElementById("bg_color").style.padding = "0px";
    document.getElementById("bg_color").style.borderRadius = "0px";
    document.getElementById("bg_color").style.marginTop = "0px";

    // Create and display the chart
    let data = {
        labels: ['', '', '', '', ''],
        datasets: [{
            data: [
                json[city_name].total.tested, 
                json[city_name].total.confirmed, 
                json[city_name].total.vaccinated1, 
                json[city_name].total.vaccinated2, 
                json[city_name].total.recovered
            ],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)', 
                'rgba(255, 99, 132, 0.2)', 
                'rgba(54, 162, 235, 0.2)', 
                'rgba(255, 206, 86, 0.2)', 
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)', 
                'rgba(255, 99, 132, 1)', 
                'rgba(54, 162, 235, 1)', 
                'rgba(255, 206, 86, 1)', 
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    };

    let config = {
        type: 'bar',
        data: data,
        options: {
            responsive: false,
            maintainAspectRatio: false,
            scales: {
                x: { display: false },
                y: { display: false }
            },
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
            }
        }
    };

    let canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 100;
    main.appendChild(canvas);

    new Chart(canvas.getContext('2d'), config);
}





// function displayData(json, cityName) {
//     let main = document.getElementById("main");
//     main.innerHTML = "";

//     let full_form = cityName; // Assuming full_form is derived from cityName in some manner

//     let div = document.createElement("div");

//     let name = document.createElement("p");
//     name.innerHTML = `<b class="color">City Name: </b> ${full_form}`;

//     let tested = document.createElement("p");
//     tested.innerHTML = `<b class="color">Tested : </b> ${json[cityName].total.tested}`;

//     let confirmed = document.createElement("p");
//     confirmed.innerHTML = `<b class="color">Confirmed : </b> ${json[cityName].total.confirmed}`;

//     let vaccinated1 = document.createElement("p");
//     vaccinated1.innerHTML = `<b class="color">Vaccinated1 : </b> ${json[cityName].total.vaccinated1}`;

//     let vaccinated2 = document.createElement("p");
//     vaccinated2.innerHTML = `<b class="color">Vaccinated2 : </b> ${json[cityName].total.vaccinated2}`;

//     let recovered = document.createElement("p");
//     recovered.innerHTML = `<b class="color">Recovered : </b> ${json[cityName].total.recovered}`;

//     div.append(name, tested, confirmed, vaccinated1, vaccinated2, recovered);
//     main.appendChild(div);

//     let data = {
//         labels: ['', '', '', '', ''],
//         datasets: [{
//             data: [json[cityName].total.tested, json[cityName].total.confirmed, json[cityName].total.vaccinated1, json[cityName].total.vaccinated2, json[cityName].total.recovered],
//             backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(153, 102, 255, 0.2)'],
//             borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(153, 102, 255, 1)'],
//             borderWidth: 1
//         }]
//     };

//     let config = {
//         type: 'bar',
//         data: data,
//         options: {
//             responsive: false,
//             maintainAspectRatio: false,
//             scales: {
//                 x: { display: false },
//                 y: { display: false }
//             },
//             plugins: {
//                 legend: { display: false },
//                 tooltip: { enabled: false }
//             }
//         }
//     };

//     let canvas = document.createElement('canvas');
//     canvas.width = 100;
//     canvas.height = 100;
//     main.appendChild(canvas);

//     new Chart(canvas.getContext('2d'), config);

//     if(state_Images[city_name]) 
//     {
//         document.body.style.backgroundImage = `url(${state_Images[city_name]})`
//     } 
//     else 
//     {
//         document.body.style.backgroundImage = 'url(https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=)'
//         // document.body.style.backgroundImage = `url(https://picsum.photos/seed/${city_name}/1600/900`
//     }

//     div.append(name, tested, vaccinated1, vaccinated2, recovered)
//     document.getElementById("main").append(div)
//     document.getElementById("main").style.background = "linear-gradient(rgb(0,0,0,0.6), rgb(0,0,0,0.6), rgb(0,0,0,0.6))"
//     document.getElementById("main").style.backgroundSize = "100% 100%"
//     document.getElementById("bg_color").style.background = "none"
//     document.getElementById("bg_color").style.color = "black"
//     document.getElementById("bg_color").style.padding = "0px"
//     document.getElementById("bg_color").style.borderRadius = "0px"
//     document.getElementById("bg_color").style.marginTop = "0px"
// }





document.addEventListener("DOMContentLoaded", function() {
    const bgColorDiv = document.getElementById('bg_color');
    const gifUrl = 'https://upload.wikimedia.org/wikipedia/commons/0/03/Covid-19-Breaking-bubbles-02.gif';
    const gifImage = new Image();
    
    gifImage.src = gifUrl;

    gifImage.onload = function() {
        // Assuming you know the duration of the GIF animation
        // Use a timeout to simulate the end of the GIF animation
        setTimeout(function() {
            // Display the #bg_color div
            bgColorDiv.style.display = 'block';

            // Change the background image of the body
            document.body.style.backgroundSize = "100% 100%"
            document.getElementById("bg_color").style.background = "linear-gradient(rgb(0,0,0,0.5), rgb(0,0,0,0.5), rgb(0,0,0,0.5))"
            document.getElementById("bg_color").style.color = "white"
            document.getElementById("bg_color").style.padding = "20px"
            document.getElementById("bg_color").style.borderRadius = "20px"
            document.getElementById("bg_color").style.marginTop = "100px"
            document.body.style.backgroundImage = "url('https://media.npr.org/assets/img/2020/04/10/covid_asymptomic_NPR_10Apr.gif')"; // Change to your desired image URL
        }, 5000); // Adjust this time based on your GIF duration
    };

    gifImage.onerror = function() {
        console.error('Failed to load the GIF.');
        bgColorDiv.style.display = 'block'; // Show the div even if the GIF fails to load
        // Optionally change the background image in case of error
        document.body.style.backgroundImage = "url('https://media.npr.org/assets/img/2020/04/10/covid_asymptomic_NPR_10Apr.gif')"; // Change to your desired image URL
        document.body.style.backgroundSize = "100% 100%"
        document.getElementById("bg_color").style.background = "linear-gradient(rgb(0,0,0,0.5), rgb(0,0,0,0.5), rgb(0,0,0,0.5))"
        document.getElementById("bg_color").style.color = "white"
        document.getElementById("bg_color").style.padding = "20px"
        document.getElementById("bg_color").style.borderRadius = "20px"
        document.getElementById("bg_color").style.marginTop = "100px"
    };
});