'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
        { createdAt: new Date(), updatedAt: new Date(), mfgId_FK: 2, name: 'Trek Emonda ALR Road Bike - 2019, 56 cm', price: 3427.99, description: 'The Trek Emonda ALR 5 has the performance of a Grand Tour climbing bike in an alloy frame. Snappy power on the climbs is paired with calm handling that lets you rail through curves on the descent. A Shimano Ultegra Groupset and a Bontrager Aeolus Pro 5 carbon wheelset up the ante on this sub-16-pound performance package. The Emonda is ready to take on a Grand Tour climb, your local Strava KOM/QOM, or anything else you can throw at it.', photoURL: 'https://i.imgur.com/l1BwnZa.png'},
        { createdAt: new Date(), updatedAt: new Date(), mfgId_FK: 1, name: 'Fuji Sportif 1.5 Disc Endurance', price: 2499.20, description: 'You don\'t have to sacrifice crucial comfort in favor of a few extra miles per hour. The designers and engineers at Fuji are all over it. The Fuji Sportif 1.3 Disc road bike was created to handle rides both big and small, with comfort-road frame geometry, easy to use and durable components, and great styling to show off on the local scene during your weekend rides. Plus, it features Avid BB7 premium disc brakes to slow you down in virtually any weather condition.', photoURL: 'https://i.imgur.com/Qn6YSyk.png'},
        { createdAt: new Date(), updatedAt: new Date(), mfgId_FK: 3, name: 'Triban Abyss RC 100, Aluminum Road Bike', price: 4799.99, description: 'Discover the ideal bike for starting out: with its single chainring, you\'ll never mistake your speed! Enjoy a comfortable ride thanks to the 32 mm tires, and take on the roads and trails with gusto!', photoURL: 'https://i.imgur.com/XsEzy7f.png'},
        { createdAt: new Date(), updatedAt: new Date(), mfgId_FK: 4, name: 'Cannondale Men\'s CAAD Optimo 3 Performance Road Bike', price: 1589.99, description: 'The Cannondale Men\'s CAAD Optimo 3 Performance Road Bike is where performance takes off with true race-winning DNA. It\'s aluminum frame has features such as refined tube profile, precision butting, and...', photoURL: 'https://i.imgur.com/nZKdRwZ.png'},
        { createdAt: new Date(), updatedAt: new Date(), mfgId_FK: 1, name: 'Fuji Track Single Speed Track Fixie Road Bike', price: 650.17, description: 'The tried-and-true Track is built to be competition-ready with the comfort and styling of an efficient city bike. It\'s perfect for fun and fast commuting or hitting the banked boards at the local track.', photoURL: 'https://i.imgur.com/4WPiT6x.png'},
        { createdAt: new Date(), updatedAt: new Date(), mfgId_FK: 5, name: 'Giant Content 3 ', price: 749.99, description: 'Smooth, fast, and fun. This versatile aluminum road bike has been revamped to give it a well-rounded performance ride quality. It\'s the perfect choice to help you push the pace ...', photoURL: 'https://i.imgur.com/ksyPVKa.png'},
        { createdAt: new Date(), updatedAt: new Date(), mfgId_FK: 2, name: 'Trek Road Bike - Domane AL 2 Disc44 Gloss Mulsanne', price: 2527.99, description: 'A smooth, comfortable, and super fun ride at a price that won\'t break the bank;The stable Endurance Geometry delivers comfort and confidence; The unique IsoSpeed Carbon fork, ...', photoURL: 'https://i.imgur.com/TXb3Qlq.png'},
        { createdAt: new Date(), updatedAt: new Date(), mfgId_FK: 6, name: 'Moser 51.151 Road Bike - 1986, 53cm', price: 3427.99, description: 'Among the small number great champions who set up a bicycle production whilst still riding races is Francesco Moser, the \'Sherriff\'. In the late 1970s the Family Moser started manufacturing professional Road bikes in Trento, northern Italy. When Francesco broke the world hour record, the cycling line was named 51.151 after the number of meters that were covered in this attempt. It should become one of the finest productions in Italy.', photoURL: 'https://i.imgur.com/O9xa567.png'},
        { createdAt: new Date(), updatedAt: new Date(), mfgId_FK: 7, name: 'Gatorskin Tire Clincher', price: 125.99, description: 'Continental\'s tried and true all-season tire Duraskin sidewalls and durable casing prevent punctures', photoURL: 'https://i.imgur.com/IyWsw0C.png'},
        { createdAt: new Date(), updatedAt: new Date(), mfgId_FK: 8, name: 'S-Works Power Saddle', price: 400.99, description: 'The S-Works series showcases premier cycling gear from Specialized, and the S-Works Power Saddle is the lightest and one of the stiffest saddles out there. Specialized made the shell and rails our of carbon for stiff support at a low weight, and a lab-tested Body Geometry design assures blood flow to sensitive arteries with pressure-mapped, lightweight padding. The saddle\'s channel is extra wide and elongated to provide bone support and all-day comfort.', photoURL: 'https://i.imgur.com/HuVJQWg.png'},
        { createdAt: new Date(), updatedAt: new Date(), mfgId_FK: 9, name: 'Wahoo Elemnt Bolt GPS Bike Computer', price: 800.99, description: 'The ELMNT BOLT is a high-end GPS cycling computer with a unique aerodynamic shape that\'s been tested and proven to minimize drag at the front of your bicycle. Despite the BOLT\'s compact aero shape, it tracks and displays more metrics than most riders will ever need—all while remaining simple and intuitive to use. Bluetooth and ANT+ technology allow the BOLT to pair seamlessly with all of your cycling sensors, and the free ELMNT companion app makes it easy to customize your displayed data fields, upload maps and routes, track performance, and share ride data effortlessly. This updated version comes in a new stealth black colorway and features the latest firmware update from Wahoo.', photoURL: 'https://i.imgur.com/vWPl40K.png'},
        { createdAt: new Date(), updatedAt: new Date(), mfgId_FK: 10, name: 'Deva Bottle Cage', price: 5.99, description: 'We\'ll admit it; we love shaving weight off of our bikes. While we haven\'t been fully diagnosed with the weight weenie syndrome, we absolutely refuse to sacrifice performance or durability in the quest of shedding additional grams.', photoURL: 'https://i.imgur.com/zvX6uIB.png'},
        { createdAt: new Date(), updatedAt: new Date(), mfgId_FK: 11, name: 'Lezyne Road Drive Pump', price: 52.99, description: 'The Lezyne Road Drive Pump is to the Carbon what the Carbon Pressure Drive is to the Pressure Drive. This is the same smart pump design, with the same features, but with one change: CNC-machined aluminum standing in for carbon fiber at the handle, barrel, and frame mount. CNC-machined aluminum remains for the piston and end caps. It\'s a noticeable savings at the cost of a few grams.', photoURL: 'https://i.imgur.com/AKaltfM.png'},
        { createdAt: new Date(), updatedAt: new Date(), mfgId_FK: 12, name: 'Niterider Lumina Micro 900 and Sabre 110 Combo', price: 75.90, description: 'Combination lithium headlight with Cree LED bulbs.  Burntime approximately 2h (high), or 60h (flash).  Mounts on the handlebar and seatpost.  Includes rechareable battery, handlebar mount, seatpost strap mount, and 2 USB charging cables.', photoURL: 'https://i.imgur.com/3U6Q8lC.png'},
        //15
        { createdAt: new Date(), updatedAt: new Date(), mfgId_FK: 13, name: 'Castelli Diagonal Full-Zip Jersey - Women\'s', price: 125.99, description: 'Castelli\'s pro-level Diagonal Jersey fills a specific need in the dedicated cyclist\'s wardrobe, providing thermal comfort on dry rides ranging from 54-64 degrees F. With warming fabric throughout and a little extra stretch thrown in on the side panels, the jersey is relatively basic in construction compared to the deeper winter layers from Castelli\'s vast line up. However, that was the intent as the Diagonal complements Castelli\'s range and matches well with its Perfetto or Aria vests on colder rides that need wind-blocking.', photoURL: 'https://i.imgur.com/ay6cYgL.png'},
        { createdAt: new Date(), updatedAt: new Date(), mfgId_FK: 13, name: 'Castelli Fiorita Jersey - Women\'s', price: 125.99, description: 'Front and Back ProSecco Micromesh with Velocity Rev2 sleeves.  Form fit and full length.  Great for Spring, Summer and Fall.  3 rear pockets with Reflective accents.', photoURL: 'https://i.imgur.com/ml93Pdq.png'},
        { createdAt: new Date(), updatedAt: new Date(), mfgId_FK: 15, name: 'Specialized S-Works 7 Cycling Shoe', price: 125.99, description: 'The S-Works 7 series includes the most advanced cycling gear from Specialized, and the Men\'s S-Works 7 Cycling Shoe strives for perfect road performance without compromising comfort. Made of ply-by-ply carbon originally developed for racing, Powerline is the stiffest, lightest sole from Specialized, and it\'s fine-tuned for transferring all the power you push down on those pedals with. The upper is made out of Dyneema Mesh trapped between layers of four-way stretch and TPU for malleability in key areas and a formed fit. To provide better connectivity and overall comfort, there\'s extra room in the toebox, while the PadLock heel counter locks your foot in place for a slip-proof feel.', photoURL: 'https://i.imgur.com/dEND6wo.png'},
        { createdAt: new Date(), updatedAt: new Date(), mfgId_FK: 16, name: 'Gore Wear Windstopper Glove - Men\'s', price: 125.99, description: 'When weather is unpredictable, reach for gloves that perform no matter the conditions, like the Gore Windstopper Gloves. These gloves offer protection for a slew of activities, with water-resistant and breathable outer shell that cuts through the elements, and pre-shaped fingers to reduce bulk.', photoURL: 'https://i.imgur.com/9MbsTq4.png'},
        { createdAt: new Date(), updatedAt: new Date(), mfgId_FK: 17, name: 'ASSOS UMA GT Evo Half Short - Women\'s', price: 125.99, description: 'Updated and from their predecessor, the UMA GT Evo Half Short proves you can leave the bibs behind and still get the comfort and support you want and need, helping you perform your best on solo efforts or during challenging road races. Features like the revolutionary goldenGate chamois construction method allow the Swiss manufacturer the ability to attach the chamois at the front and rear while leaving the sides free to float with your body instead of against it. This all but eliminates friction from the chamois and shorts eradicating skin irritation in sensitive areas. Imitation is the sincerest form of flattery, and we\'re seeing similar construction from other manufacturers but Assos is often the one who does it first and continues to do it the best. After all, Assos was the first company to bring a Lycra cycling short to market. The lack of bibs allows these shorts to remain comfortable during warm rides and make stopping for nature breaks a...', photoURL: 'https://i.imgur.com/Klyjuet.png'},
        { createdAt: new Date(), updatedAt: new Date(), mfgId_FK: 13, name: 'Castelli Talento Sock - Women\'s', price: 125.99, description: 'Made from Meryl Skinlife, this lightweight road cycling sock sports a 12cm height and a 1 year manufacturer warranty!', photoURL: 'https://i.imgur.com/FOAtBf2.png'},
        { createdAt: new Date(), updatedAt: new Date(), mfgId_FK: 14, name: 'Pearl Izumi Quest Thermal Jersey - Men\'s', price: 125.99, description: 'Keep your cool, or rather, warmth, when mother nature hits you with the old 1-2 punch of winter winds and snow by layering up with the right pieces for the cold season. The Quest Thermal Jersey provides ample insulation for diving temperatures, so you can hammer out the miles unhindered by chills.', photoURL: 'https://i.imgur.com/y7W7Pj4.png'},
   ], {});
},

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Products', null, {truncate:true, restartIdentity: true});
  }
};
