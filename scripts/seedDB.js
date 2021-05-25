const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

const coloradoClimbingGyms = [
  {
    
    "GymName" : "Apex Center",
    "City" : "Arvada, CO",
    "PhoneNumber" : "303-424-2739",
    "Address" : "13150 W. 72nd Ave.Arvada, CO 80005"
},

{
    
    "GymName" : "Red Brick Climbing Gym",
    "City" : "Aspen, CO",
    "PhoneNumber" : "970-544-5834",
    "Address" : "13150 W. 72nd Ave.Arvada, CO 80005"
},

{
    
    "GymName" : "Aspen Recreation Center Climbing Tower",
    "City" : "Aspen, CO",
    "PhoneNumber" : "970-544-4100",
    "Address" : "110 East Hallam Suite 135 Aspen, CO 81611"
},

{
    
    "GymName" : "Boulder Rock Club",
    "City" : "Boulder, CO",
    "PhoneNumber" : "800-836-4008 ext. 4",
    "Address" : "2829 Mapleton Ave. Boulder, CO 80301"
},

{
    
    "GymName" : "Colorado Athletic Training School",
    "City" : "Boulder, CO",
    "PhoneNumber" : "303-939-9699",
    "Address" : "2400 30th Street Boulder, CO 80302"
},

{
    
    "GymName" : "Movement Climbing + Fitness",
    "City" : "Boulder, CO",
    "PhoneNumber" : "303-443-1505",
    "Address" : "2845 Valmont Rd. Boulder, CO 80301"
},

{
    
    "GymName" : "The Spot Bouldering Gym",
    "City" : "Boulder, CO",
    "PhoneNumber" : "303-379-8806",
    "Address" : "3240 Prairie Ave. Boulder, CO 80301"
},
{
    
    "GymName" : "University of Colorado Boulder Student Recreation Center",
    "City" : "Boulder, CO",
    "PhoneNumber" : "303-492-6880",
    "Address" : "1855 Pleasant St. Boulder, CO 80302"
},
{
    
    "GymName" : "East Boulder Community Center",
    "City" : "Boulder, CO",
    "PhoneNumber" : "303-441-4400",
    "Address" : "5660 Sioux Dr. Boulder, CO 80303"
},
{
    
    "GymName" : "ABC Kids Climbing",
    "City" : "Boulder, CO",
    "PhoneNumber" : "303-443-5437",
    "Address" : "0861 Maroon Creek Rd Aspen, CO 81611"
},
{
    
    "GymName" : "Breckenridge Recreation Center",
    "City" : "Breckenridge, CO",
    "PhoneNumber" : "970-453-1734",
    "Address" : "880 Airport Road Breckenridge, CO 80424"
},
{
    
    "GymName" : "Breckenridge Outdoor Education Center",
    "City" : "Breckenridge, CO",
    "PhoneNumber" : "970-453-6422",
    "Address" : "524 Wellington Road Breckenridge, CO 80424"
},
{
    
    "GymName" : "Alpine Villa Tuscan Retreat",
    "City" : "Breckenridge, CO",
    "PhoneNumber" : "970-453-4924",
    "Address" : "2345 Tiger Road Breckenridge, CO 80424"
},

{
    
    "GymName" : "Paul Derda Recreation Center Climbing Gym",
    "City" : "Broomfield, CO",
    "PhoneNumber" : "303-460-6900",
    "Address" : "13201 Lowell Blvd. Broomfield, CO 80020"
},
{
    
    "GymName" : "Lakeshore Athletic Club Climbing Wall",
    "City" : "Broomfield, CO",
    "PhoneNumber" : "303-729-2580",
    "Address" : "300 Summit Boulevard Broomfield, CO 80021"
},
{
    
    "GymName" : "Adventure Unlimited Ranches Rock Gym",
    "City" : "Buena Vista",
    "PhoneNumber" : "888-543-4849",
    "Address" : "18325 County Road #366 Buena Vista, CO 81211"
},
{
    
    "GymName" : "Trails Recreation Center",
    "City" : "Centennial",
    "PhoneNumber" : "303-269-8400",
    "Address" : "16799 E. Lake Ave. Centennial, CO 80016"
},
{
    
    "GymName" : "ROCK'n & JAM'n 2",
    "City" : "Centennial",
    "PhoneNumber" : "303-766-5462",
    "Address" : "7390 S. Fraser Street (Unit E) Centennial, CO 80112"
},
{
    
    "GymName" : "Life Time Fitness",
    "City" : "Centennial",
    "PhoneNumber" : "720-489-1400",
    "Address" : "5000 E Dry Creek Road Centennial, CO 80122"
},
{
    
    "GymName" : "CityROCK Colorado Springs",
    "City" : "Colorado Springs",
    "PhoneNumber" : "719-634-9099",
    "Address" : "21 North Nevada Avenue Colorado Springs, CO 80903"
},
{
    
    "GymName" : "Pure Bouldering Gym",
    "City" : "Colorado Springs",
    "PhoneNumber" : "719-633-5511",
    "Address" : "1401 South 8th Street Colorado Springs, CO 80905"
},
{
    "GymName" : "Sport Climbing Center",
    "City" : "Colorado Springs",
    "PhoneNumber" : "719-260-1050",
    "Address" : "4650 Northpark Drive Colorado Springs, CO 80918"
},
{
    "GymName" : "Colorado College – Ritt Kellogg Climbing Gym",
    "City" : "Colorado Springs",
    "PhoneNumber" : "719-389-6803",
    "Address" : "44 West Cache La Poudre Street Colorado Springs, CO 80903"
},
{
    "GymName" : "Life Time Fitness",
    "City" : "Colorado Springs",
    "PhoneNumber" : "719-266-9900",
    "Address" : "4410 Royal Pine Drive Colorado Springs, CO 80920"
},
{
    "GymName" : "Denver Bouldering Club – Central",
    "City" : "Denver",
    "PhoneNumber" : "303-351-5588",
    "Address" : "2485 W. 2nd Avenue #18 Denver, CO 80223"
},
{
    "GymName" : "Movement Climbing and Fitness Denver",
    "City" : "Denver",
    "PhoneNumber" : "720-476-7800",
    "Address" : "1155 W 5th Ave. Denver, CO 80204"
},
{
    "GymName" : "Thrillseekers",
    "City" : "Denver",
    "PhoneNumber" : "303-733-8810",
    "Address" : "1912 South Broadway Denver Denver, CO 80210"
},
{
    "GymName" : "REI–Denver Flagship Climbing Pinnacle",
    "City" : "Denver",
    "PhoneNumber" : "303-756-3100",
    "Address" : "1416 Platte St Denver, CO 80202"
},
{
    "GymName" : "Mountain Strong",
    "City" : "Denver",
    "PhoneNumber" : "720-460-1778",
    "Address" : "5280 Broadway St Denver, CO 80216"
},
{
    
    "GymName" : "University of Denver – Coors Fitness Center",
    "City" : "Denver",
    "PhoneNumber" : "303-871-3908",
    "Address" : "2201 E. Asbury Ave Denver, CO 80208"
},
{
    "GymName" : "The Rock Lounge",
    "City" : "Durango",
    "PhoneNumber" : "970-764-4505",
    "Address" : "111 E. 30th St Durango, CO 81301 970-764-4505"
},
{
    "GymName" : "Fort Lewis College Climbing Wall",
    "City" : "Durango",
    "PhoneNumber" : "970-247-7293",
    "Address" : "1000 Rim Drive Durango, CO 81301 970-247-7293"
},

{
    "GymName" : "Purgatory Resort",
    "City" : "Durango",
    "PhoneNumber" : "970-385-2168",
    "Address" : "1 Skier Place Durango, CO 81301"
},
{
    "GymName" : "WECMRD Field House",
    "City" : "Edwards",
    "PhoneNumber" : "970-766-5555",
    "Address" : "450 Miller Ranch Rd Edwards, CO 81632"
},
{
    "GymName" : "Earth Treks Englewood",
    "City" : "Englewood",
    "PhoneNumber" : "303-242-3555",
    "Address" : "1050 W. Hampden Avenue Englewood, CO 80110"
},
{
    
    "GymName" : "REI Englewood",
    "City" : "Englewood",
    "PhoneNumber" : "303-858-1726",
    "Address" : "9637 E County Line Rd Englewood, CO 80112"
},
{
    "GymName" : "Erie Community Center",
    "City" : "Erie",
    "PhoneNumber" : "303-926-2550",
    "Address" : "450 Powers St. Erie, CO 80516"
},
{
    "GymName" : "The Epic Climbing Gym at Estes Park Mountain",
    "City" : "Estes Park",
    "PhoneNumber" : "970-586-6548",
    "Address" : "2050 Big Thompson Ave. Estes Park, CO 80517"
},
{
    "GymName" : "Estes Park Center",
    "City" : "Estes Park",
    "PhoneNumber" : "970-586-3341",
    "Address" : "2515 Tunnel Road Estes Park, CO 80511"
},
{
    "GymName" : "Buchanan Park Recreation Center",
    "City" : "Evergreen",
    "PhoneNumber" : "720-880-1100",
    "Address" : "32003 Ellingwood Trail Evergreen, CO 80439"
},
{
    "GymName" : "Fort Collins Club",
    "City" : "Fort Collins",
    "PhoneNumber" : "970-224-2582",
    "Address" : "1307 East Prospect Road Fort Collins, CO 80525"
},
{
    "GymName" : "Inner Strength Rock Gym",
    "City" : "Fort Collins",
    "PhoneNumber" : "970-282-8118",
    "Address" : "3713 South Mason Fort Collins, CO 80525"
},
{
    "GymName" : "Miramont Lifestyle Fitness Climbing Wall",
    "City" : "Fort Collins",
    "PhoneNumber" : "970-672-4221",
    "Address" : "1800 Heath Pkwy Fort Collins, CO 80524"
},
{
    "GymName" : "Ascent Studio",
    "City" : "Fort Collins",
    "PhoneNumber" : "970-999-5596",
    "Address" : "2150 Joseph Allen Drive Fort Collins, CO 80525"
},
{
    "GymName" : "Colorado State University Student Recreation Center",
    "City" : "Fort Collins",
    "PhoneNumber" : "970-491-1669",
    "Address" : "951 Meridian Ave Fort Collins, CO 80523"
},
{
    "GymName" : "Fraser Valley Recreation Center",
    "City" : "Fraser",
    "PhoneNumber" : "970-726-8968",
    "Address" : "1, Main St Fraser, CO 80442"
},
{
   
    "GymName" : "Glenwood Springs Community Center",
    "City" : "Glenwood",
    "PhoneNumber" : "970-384-6301",
    "Address" : "100 Wulfsohn Road Glenwood Springs, CO 81601"
},
{
    "GymName" : "Glenwood Canyon Resort",
    "City" : "Glenwood",
    "PhoneNumber" : "970-945-6737",
    "Address" : "1308 County Road 129 Glenwood Springs, CO 81601"
},
{
    "GymName" : "Glenwood Caverns Adventure Park",
    "City" : "Glenwood",
    "PhoneNumber" : "970-945-4228",
    "Address" : "151000 Two Rivers Plaza Rd Glenwood Springs, CO 81601"
},
{
    "GymName" : "Earth Treks Golden",
    "City" : "Golden",
    "PhoneNumber" : "303-222-9564",
    "Address" : "700 Golden Ridge Rd. Golden, CO 80401"
},
  {
    "GymName" : "Golden Community Center",
    "City" : "Golden",
    "PhoneNumber" : "303-384-8100",
    "Address" : "1470 10th Street Golden, CO 80401"
},
{
    "GymName" : "Colorado Mesa University Student Recreation Center",
    "City" : "Grand Junction",
    "PhoneNumber" : "970-248-1501",
    "Address" : "1000 Texas Avenue Grand Junction, CO 81501"
},
{
    "GymName" : "Grand Valley Climbing",
    "City" : "Grand Junction",
    "PhoneNumber" : "970-644-5821",
    "Address" : "611 25 Road Grand Junction, CO 81505"
},
{
    "GymName" : "Greeley Downtown Recreation Center",
    "City" : "Greeley",
    "PhoneNumber" : "970-350-9400",
    "Address" : "651 10th Avenue Greeley, CO 80631"
},
{
    "GymName" : "UNC Climbing Wall",
    "City" : "Greeley",
    "PhoneNumber" : "970-351-4327",
    "Address" : "1300 23rd Street Greeley, CO 80639"
},
{
    "GymName" : "Adventure Gymnastics",
    "City" : "Greeley",
    "PhoneNumber" : "970-330-0632",
    "Address" : "5800 W. 18th Street Greeley, CO 80634"
},
{
    "GymName" : "Gunnison Community Center",
    "City" : "Gunnison",
    "PhoneNumber" : "970-641-8060",
    "Address" : "5800 W. 18th Street Greeley, CO 80634"
},
{
    "GymName" : "Western State Colorado University Mountaineer Field House",
    "City" : "Gunnison",
    "PhoneNumber" : "970-641-8060",
    "Address" : "500 E. Ruby Ave. Gunnison, CO 81231"
},
{
    "GymName" : "Gypsum Recreation Center Climbing Pinnacle",
    "City" : "Gypsum",
    "PhoneNumber" : "970-777-8888",
    "Address" : "52 Lundgren Blvd Gypsum, CO 81637"
},
{
    "GymName" : "Eastridge Recreation Center",
    "City" : "Highlands Ranch",
    "PhoneNumber" : "303-791-2500",
    "Address" : "9568 University Blvd. Highlands Ranch, CO 80126"
},
{
    "GymName" : "Lakewood Link Recreation Center",
    "City" : "Lakewood",
    "PhoneNumber" : "720-963-5384",
    "Address" : "1295 S. Reed St. Lakewood, CO 80232"
},
{
    "GymName" : "The Point at Lakewood",
    "City" : "Lakewood",
    "PhoneNumber" : "303-988-1300",
    "Address" : "533 Van Gordon Street Lakewood, CO 80228"
},
{
    "GymName" : "REI Lakewood",
    "City" : "Lakewood",
    "PhoneNumber" : "303-932-0600",
    "Address" : "5375 S Wadsworth Blvd Lakewood, CO 80123"
},
{
    "GymName" : "Ridge Recreation Center",
    "City" : "Littleton",
    "PhoneNumber" : "303-409-2337",
    "Address" : "6613 S. Ward St. Littleton, CO 80127"
},
{
    "GymName" : "JungleQuest",
    "City" : "Littleton",
    "PhoneNumber" : "303-738-9844",
    "Address" : "8000 S. Lincoln St. Suite 10 Littleton, CO 80122"
},
{
    "GymName" : "Airborne Gymnastics",
    "City" : "Longmont",
    "PhoneNumber" : "303-684-3716",
    "Address" : "1816 Boston Ave Longmont, CO 80501"
},
{
    "GymName" : "Longmont Climbing Collective",
    "City" : "Longmont",
    "PhoneNumber" : "720-340-3640",
    "Address" : "33 S Pratt Pkwy, Suite 300 Longmont, CO 80501"
},
{
    "GymName" : "Longmont Recreation Center",
    "City" : "Longmont",
    "PhoneNumber" : "303-774-4800",
    "Address" : "310 Quail Road Longmont, CO 80501"
},
{
    "GymName" : "Evo Rock + Fitness Louisville",
    "City" : "Louisville",
    "PhoneNumber" : "303-317-3770",
    "Address" : "1754 Dogwood St Louisville, CO 80027"
},
{
    "GymName" : "Wooden Mountain Bouldering Gym",
    "City" : "Loveland",
    "PhoneNumber" : "970-541-1620",
    "Address" : "1503 Taurus Ct Loveland, CO 80537"
},
{
    "GymName" : "Loveland Laser Tag",
    "City" : "Loveland",
    "PhoneNumber" : "970-663-9999",
    "Address" : "Denver Ave Commercial Park, 401 Denver Ave. Loveland, CO 80537"
},
{
    "GymName" : "Parker Fieldhouse (The Pinnacle)",
    "City" : "Parker",
    "PhoneNumber" : "303-805-6300",
    "Address" : "18700 E. Plaza Drive Parker, CO 80134"
},
{
    "GymName" : "Life Time Fitness",
    "City" : "Parker",
    "PhoneNumber" : "720-842-0800",
    "Address" : "9250 Crown Crest Blvd. Parker, CO 80138"
},
{
    "GymName" : "CSU Pueblo Massari Gym",
    "City" : "Pueblo",
    "PhoneNumber" : "719-549-2085",
    "Address" : "2200 Bonforte Blvd. Pueblo, CO 81001"
},
{
    "GymName" : "Pueblo YMCA",
    "City" : "Pueblo",
    "PhoneNumber" : "719-543-5151",
    "Address" : "3200 E. Spaulding Avenue Pueblo, CO 81008"
},
{
    "GymName" : "Denver Bouldering Club – South",
    "City" : "Sheridan",
    "PhoneNumber" : "720-638-2767",
    "Address" : "4131 S. Natches Court, Unit E Sheridan, CO 80110"
},
{
    "GymName" : "Summit Climbing Gym",
    "City" : "Silverthorne",
    "PhoneNumber" : "970-368-6007",
    "Address" : "1291 Blue River Parkway Silverthorne, CO 80498"
},
{
    "GymName" : "ROCK'n & JAM'n 1",
    "City" : "Thornton",
    "PhoneNumber" : "303-254-4344",
    "Address" : "9499 Washington Street, Unit C Thornton, CO 80229"
},
{
    "GymName" : "Vail Mountain Lodge Climbing Wall",
    "City" : "Vail",
    "PhoneNumber" : "970-476-7960",
    "Address" : "352 E. Meadow Drive Vail, CO 81657"
},
{
    "GymName" : "City Park Recreation Center – Westminster Climbing Wall",
    "City" : "Westminster",
    "PhoneNumber" : "303-658-2215",
    "Address" : "10455 Sheridan Blvd Westminster, CO 80020"
},
{
    "GymName" : "Life Time Fitness",
    "City" : "Westminster",
    "PhoneNumber" : "303-429-8000",
    "Address" : "397 West 148th Ave Westminster, CO 80020"
},
{
    "GymName" : "Wheat Ridge Recreation Center",
    "City" : "Wheat Ridge",
    "PhoneNumber" : "303-231-1300",
    "Address" : "4005 Kipling St. Wheat Ridge, CO 80033"
},
]



db.ClimbingGym
  .remove({})
  .then(() => db.ClimbingGym.collection.insertMany(coloradoClimbingGyms))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  // .catch(err => {
  //   console.error(err);
  //   process.exit(1);
  // },);
