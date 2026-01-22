// RCTBV Fleet Data
const ships = [
    {name:"Lindengracht", operator:"Rederij Cement Tankvaart BV", country:"Netherlands", image:"https://www.rctbv.nl/app/uploads/2018/07/Lindengracht-website-1024x576.jpg", europanummer:"2325743", dimensions:"69,98 x 8,20 x 5,30", draft:"2,86", tonnage:901},
    {name:"Vijzelgracht", operator:"Rederij Cement Tankvaart BV", country:"Netherlands", image:"https://www.rctbv.nl/app/uploads/2018/07/Vijzelgracht-website-1024x576.jpg", europanummer:"2005963", dimensions:"59,96 x 6,60 x 5,85", draft:"2,23", tonnage:429},
    {name:"Spiegelgracht", operator:"Rederij Cement Tankvaart BV", country:"Netherlands", image:"https://www.rctbv.nl/app/uploads/2018/07/Spiegelgracht-website-1024x576.jpg", europanummer:"2315151", dimensions:"55,00 x 6,64 x 4,75", draft:"2,38", tonnage:500},
    {name:"Reguliersgracht", operator:"Rederij Cement Tankvaart BV", country:"Netherlands", image:"https://www.rctbv.nl/app/uploads/2018/07/Reguliersgracht-website-1024x576.jpg", europanummer:"2312401", dimensions:"65,92 x 6,60 x 5,61", draft:"2,77", tonnage:702},
    {name:"Raamgracht", operator:"Rederij Cement Tankvaart BV", country:"Netherlands", image:"https://www.rctbv.nl/app/uploads/2018/07/Raamgracht-1200x600-1024x576.jpg", europanummer:"2312384", dimensions:"59,98 x 6,60 x 5,56", draft:"2,63", tonnage:582},
    {name:"Prinsengracht", operator:"Rederij Cement Tankvaart BV", country:"Netherlands", image:"https://www.rctbv.nl/app/uploads/2018/07/Prinsengracht-website2-1024x576.jpg", europanummer:"2311999", dimensions:"53,21 x 6,60 x 5,28", draft:"2,60", tonnage:482},
    {name:"Egelantiersgracht", operator:"Rederij Cement Tankvaart BV", country:"Netherlands", image:"https://www.rctbv.nl/app/uploads/2018/01/Egelantiersgracht-website-1024x576.jpg", europanummer:"3280194", dimensions:"59,90 x 6,60 x 5,20", draft:"2,70", tonnage:603},
    {name:"Anjeliersgracht", operator:"Rederij Cement Tankvaart BV", country:"Netherlands", image:"https://www.rctbv.nl/app/uploads/2018/07/Foto-Anjeliersgracht.jpg", europanummer:"2332160", dimensions:"85,80 x 10,49 x 4,50", draft:"3,00", tonnage:1637},
    {name:"Admiralengracht", operator:"Rederij Cement Tankvaart BV", country:"Netherlands", image:"https://www.rctbv.nl/app/uploads/2018/07/Admiralengracht-website-1024x576.jpg", europanummer:"2006003", dimensions:"63,07 x 7,30 x 4,78", draft:"2,45", tonnage:581},
    {name:"Lijnbaansgracht", operator:"Rederij Cement Tankvaart BV", country:"Netherlands", image:"https://www.rctbv.nl/app/uploads/2017/01/Lijnbaansgracht-5530-1024x683.jpg", europanummer:"2312269", dimensions:"59,91 x 6,59 x 6,00", draft:"2,70", tonnage:604},
    {name:"Leliegracht", operator:"Rederij Cement Tankvaart BV", country:"Netherlands", image:"https://www.rctbv.nl/app/uploads/2017/01/RCT-Leliegracht-1024x576.jpg", europanummer:"2312290", dimensions:"59,95 x 6,59 x 5,32", draft:"2,70", tonnage:594},
    {name:"Leidsegracht", operator:"Rederij Cement Tankvaart BV", country:"Netherlands", image:"https://www.rctbv.nl/app/uploads/2017/01/RCT-Leidsegracht-768x432-1.jpg", europanummer:"2312117", dimensions:"53,21 x 6,60 x 5,21", draft:"2,60", tonnage:509},
    {name:"Keizersgracht", operator:"Rederij Cement Tankvaart BV", country:"Netherlands", image:"https://www.rctbv.nl/app/uploads/2017/01/RCT-Keizersgracht-1-1024x576.jpg", europanummer:"2205324", dimensions:"55,14 x 7,23 x 5,40", draft:"2,72", tonnage:619},
    {name:"Erasmusgracht", operator:"Rederij Cement Tankvaart BV", country:"Netherlands", image:"https://www.rctbv.nl/app/uploads/2017/01/RCT-Erasmusgracht-1-1024x576.jpg", europanummer:"3280195", dimensions:"59,84 x 6,60 x 5,40", draft:"2,70", tonnage:596},
    {name:"Westlandgracht", operator:"Rederij Cement Tankvaart BV", country:"Netherlands", image:"https://www.rctbv.nl/app/uploads/2017/01/Westlandgracht-website-1024x576.jpg", europanummer:"2104853", dimensions:"67,00 x 6,60 x 5,90", draft:"2,80", tonnage:707},
    {name:"Schippersgracht", operator:"Rederij Cement Tankvaart BV", country:"Netherlands", image:"https://www.rctbv.nl/app/uploads/2017/01/RCT-Schippersgracht-768x432-1.jpg", europanummer:"2315154", dimensions:"55,08 x 6,64 x 4,75", draft:"2,39", tonnage:500},
    {name:"Rozengracht", operator:"Rederij Cement Tankvaart BV", country:"Netherlands", image:"https://www.rctbv.nl/app/uploads/2017/01/Rozengracht-website-1024x576.jpg", europanummer:"2312415", dimensions:"65,97 x 6,60 x 5,60", draft:"2,75", tonnage:700},
    {name:"Realengracht", operator:"Rederij Cement Tankvaart BV", country:"Netherlands", image:"https://www.rctbv.nl/app/uploads/2017/01/RCT-Realengracht-1-1024x576.jpg", europanummer:"2312491", dimensions:"59,98 x 6,51 x 5,56", draft:"2,72", tonnage:611},

    // Binnenlloyd / Cement Tankvaart group
    {name:"PHOENIX", operator:"Binnenlloyd", country:"Netherlands", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2019/12/document-5609.jpg", europanummer:"2315792", dimensions:"59 x 8", draft:"2,4", tonnage:625},
    {name:"ICHTHUS", operator:"Binnenlloyd", country:"Netherlands", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2019/12/ichthus-02104876-mts-nigtevecht12052025-leos-2-db.jpg", europanummer:"2104876", dimensions:"70 x 6,35", draft:"2,89", tonnage:760},
    {name:"CONAN", operator:"Binnenlloyd", country:"Netherlands", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2021/11/conan-02317499-mts-volkeraksluis24072025leos-63-db.jpg", europanummer:"2317499", dimensions:"67 x 7,24", draft:"2,85", tonnage:890},
    {name:"DURANCE", operator:"Binnenlloyd", country:"Netherlands", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2019/12/img-2713.jpg", europanummer:"2322731", dimensions:"80 x 8,25", draft:"2,61", tonnage:1000},
    {name:"SELA", operator:"Binnenlloyd", country:"Netherlands", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2022/08/sela-02316197-mts-nigtevecht11072025leos-123-db.jpg", europanummer:"2316197", dimensions:"80 x 8,20", draft:"2,79", tonnage:1000},
    {name:"SIBILLA", operator:"Binnenlloyd", country:"Netherlands", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2024/03/img-8735-scaled.jpg", europanummer:"2329747", dimensions:"80 x 9,5", draft:"2,63", tonnage:1100},
    {name:"CHALLENGER", operator:"Binnenlloyd", country:"Netherlands", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2019/12/challenger-02322469-mts-nigtevecht-06-09-2024--aris-van-dijk-001.jpg", europanummer:"2322469", dimensions:"82 x 9", draft:"2,82", tonnage:1300},
    {name:"NOWEN", operator:"Binnenlloyd", country:"Netherlands", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2020/03/nowen-02322172-mts-beneden-leeuwen-19-05-2025--aris-van-dijk.jpg", europanummer:"2322172", dimensions:"80 x 9", draft:"3,05", tonnage:1300},
    {name:"MANU FORTI", operator:"Binnenlloyd", country:"Netherlands", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2019/12/manu-forti-02327263-04.09.2023-heck.jpg", europanummer:"2327263", dimensions:"84,8 x 9,6", draft:"3,18", tonnage:1400},
    {name:"COMPANION", operator:"Binnenlloyd", country:"Netherlands", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2019/12/companion-02332503-21.09.2024.jpg", europanummer:"2332503", dimensions:"86 x 10,5", draft:"3", tonnage:1600},
    {name:"(duwbak) CHELLES", operator:"Binnenlloyd", country:"Netherlands", image:"https://www.overdekt-stralen.nl/includes/_Files/afbeeldingen/Duwbak-Chellis-Fa-Asto-1.jpg.webp", europanummer:"1830690", dimensions:"79 x 11,40 x 3.50", draft:"2,5", tonnage:2200},

    // Kleine de Jong BV cement tankers
    {name:"Isabel", operator:"Kleine de Jong BV", country:"Netherlands", image:"https://www.kleinedejong.nl/wp-content/uploads/2018/11/mts-isabel-isabel-1.jpg", europanummer:"2311082 ", dimensions:"90 x 9,50", draft:"2,77", tonnage:1400},
    {name:"Sofie", operator:"Kleine de Jong BV", country:"Netherlands", image:"https://www.kleinedejong.nl/wp-content/uploads/2018/11/1.jpg", europanummer:"4008250", dimensions:"84,80 x 9,42", draft:"3,20", tonnage:1400},
    {name:"Renske", operator:"Kleine de Jong BV", country:"Netherlands", image:"https://www.kleinedejong.nl/wp-content/uploads/2021/06/mts-vera-3.jpg", europanummer:"6001412", dimensions:"54,98 x 7,30", draft:"2,79", tonnage:649},
    {name:"Vera", operator:"Kleine de Jong BV", country:"Netherlands", image:"https://www.kleinedejong.nl/wp-content/uploads/2021/06/mts-renske-8.jpg", europanummer:"2309970", dimensions:"48,76 x 6,40", draft:"2,45", tonnage:421},

    // Powder Logistics BV
    {name:"Seba", operator:"Powder Logistics BV", country:"Netherlands", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2021/06/img-9665-scaled.jpg", europanummer:"2321471", dimensions:"86 x 9", draft:"2,6", tonnage:1313},
    {name:"Sardana", operator:"Powder Logistics BV", country:"Netherlands", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2019/12/img-1830-scaled.jpg", europanummer:"2327316", dimensions:"84,7 x 10", draft:"3,21", tonnage:1602},
    {name:"Extensio", operator:"Powder Logistics BV", country:"Netherlands", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2023/05/geen-naamex-gehan-b-mts02203662terneuzen18052023abdejongh-db-2-scaled.jpg", europanummer:"02203662", dimensions:"49,94 x 6,60", draft:"2,5", tonnage:459},
    {name:"Fichita", operator:"Powder Logistics BV", country:"Netherlands", image:"https://static.vesselfinder.net/ship-photo/0-244780234-b04f7d2193996f7ef06f223781abcba1/1?v1", europanummer:"2205378", dimensions:"43,75 x 5,14", draft:"2,52", tonnage:362},
    {name:"Eslabon", operator:"Powder Logistics BV", country:"Netherlands", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2019/12/document-17796-scaled.jpg", europanummer:"7000535", dimensions:"62,53 x 7,59", draft:"2,6", tonnage:744},
    {name:"Rescate", operator:"Powder Logistics BV", country:"Netherlands", image:"https://www.debinnenvaart.nl/wp-content/uploads/image.php?url=https%3A%2F%2Fde-binnenvaart.b-cdn.net%2F2022%2F11%2Frescate-02104854-mts02-11-2022pinpijn-db-scaled.jpg", europanummer:"2104854", dimensions:"50 x 6,56", draft:"2,62", tonnage:502},

    // Rivage Binnenvaartonderneming BV
   {name: "Rivage", operator: "Rivage Binnenvaartonderneming BV", country: "Netherlands", image: "https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2022/04/img-7478.jpg", europanummer: "2104768", dimensions: "67 x 8,2", draft: "2,52", tonnage: 916, mmsi: "244670915"},

    // Bomar Rederij BV
    {name:"Dejo-B", operator:"Bomar Rederij BV", country:"Netherlands", image:"https://static.vesselfinder.net/ship-photo/0-244730348-06c3df1471c39da7b19424dfa64395ed/1?v1", europanummer:"2005212", dimensions:"49,5 x 6,57", draft:"2,29", tonnage:400},
    {name:"Sjors-B", operator:"Bomar Rederij BV", country:"Netherlands", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2019/12/img-3940.jpg", europanummer:"2312834", dimensions:"62,94 x 7,20", draft:"2,6", tonnage:750},
    {name:"Gero-B", operator:"Bomar Rederij BV", country:"Netherlands", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2019/12/gero-b-02605351-mts-loenersloot19052025-leos-2-db.jpg", europanummer:"2605351", dimensions:"76,4 x 8,24", draft:"", tonnage:1000},

    // PCO BV
    {name:"Dorus", operator:"PCO BV", country:"Netherlands", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2019/12/img-1896.jpg", europanummer:"2200005", dimensions:"40 x 6,35", draft:"1,36", tonnage:266},
    {name:"PONTONNIER", operator:"PCO BV", country:"Netherlands", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/D3BhtwYuMiA0Uo0a.jpg", europanummer:"2326681", dimensions:"35 x 9,5", draft:"1,35", tonnage:54},
    {name:"Bart", operator:"PCO BV", country:"Netherlands", image:"https://static.vesselfinder.net/ship-photo/0-244700737-67536d7158287f0f3d02b149c20358a8/1?v1", europanummer:"2305219", dimensions:"32 x 6,1", draft:"2", tonnage:143},

    // Gitra Shipping
    {name:"Gamma", operator:"Gitra Shipping", country:"Belgium", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2019/12/gamma-cts-06002835-zbs-29-06-2025--tinny-1.jpg", europanummer:"6002835", dimensions:"38,74 x 5,06", draft:"2,3", tonnage:288},
    {name:"Rho", operator:"Gitra Shipping", country:"Belgium", image:"https://static.vesselfinder.net/ship-photo/0-205206690-f2e1b3bf4cb7a45e1ab6619adee663d3/1?v1", europanummer:"2312897", dimensions:"63,88 x 5,7", draft:"2,51", tonnage:596},
    {name:"(duwbak) Leo", operator:"Gitra Shipping", country:"Belgium", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/akAxCDNZZjgBkhdG.jpg", europanummer:"06003628", dimensions:"35,42 x 9,03", draft:"2,63", tonnage:534},
    {name:"Aviso", operator:"Gitra Shipping", country:"Belgium", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2019/12/aviso-06002090-mts-volkeraksluis25062024leos-8-db.jpg", europanummer:"06002090", dimensions:"69,8 x 8,24", draft:"2,53", tonnage:758},
    {name:"Alpha", operator:"Gitra Shipping", country:"Belgium", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2024/02/alpha-06504083-mts-srk12062014leos-221-2-db-scaled.jpg", europanummer:"6504083", dimensions:"49,61 x 6,62", draft:"2,12", tonnage:397},
    {name:"Beta", operator:"Gitra Shipping", country:"Belgium", image:"https://www.debinnenvaart.nl/wp-content/uploads/image.php?url=http://www.debinnenvaart.nl/images/boats/Je-Ja%206503506.jpg", europanummer:"6503506", dimensions:"38,62 x 5,05", draft:"2,4", tonnage:313},
    {name:"Cavirena", operator:"Gitra Shipping", country:"Belgium", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2025/09/cavirena-cts-06001327-zbs-29-06-2025--tinny-2.jpg", europanummer:"6001327", dimensions:"38,88 x 5,09", draft:"2,09", tonnage:271},
    {name:"Corazon", operator:"Gitra Shipping", country:"Belgium", image:"https://shipphoto.nl/Ship/Keizer/C/im/Corazon%20Brakel%20(1).jpg", europanummer:"2315158", dimensions:"63,42 x 7,05", draft:"2,63", tonnage:553},
    {name:"Delta", operator:"Gitra Shipping", country:"Belgium", image:"https://static.vesselfinder.net/ship-photo/0-205390090-4796fa6e9f7b998991197c2e5ae7dbec/1?v1", europanummer:"2322599", dimensions:"39,03 x 5,05", draft:"2,45", tonnage:288},
    {name:"(duwbak) Epsilon", operator:"Gitra Shipping", country:"Belgium", image:"https://www.shipspotting.com/photos/big/5/3/1/3239135.jpg?cb=0", europanummer:"4033990", dimensions:"70,8 x 10,5", draft:"3", tonnage:1400},
    {name:"Idefix", operator:"Gitra Shipping", country:"Belgium", image:"https://www.marinetraffic.com/getPhoto/?photo_id=5054764&photo_size=1600", europanummer:"2308525", dimensions:"36,47 x 5,42", draft:"2", tonnage:95},
    {name:"(duwbak) Kappa", operator:"Gitra Shipping", country:"Belgium", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2019/12/kappa-02306190-24.10.2021-heckrhesse-db.jpg", europanummer:"2306190", dimensions:"66,95 x 8,2", draft:"2,52", tonnage:1001},
    {name:"(duwbak) Marc", operator:"Gitra Shipping", country:"Belgium", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/TXAgVtPMg2gccE4T.jpg", europanummer:"6003629", dimensions:"35,45 x 0,02", draft:"2,63", tonnage:535},
    {name:"(duwbak) Navin 24", operator:"Gitra Shipping", country:"Belgium", image:"https://cdn.binnenvaart.eu/userfiles/images/schepen/60000-70000/69478/600/217514-.jpg", europanummer:"2331711", dimensions:"71 x 10,5", draft:"2,8", tonnage:1463},
    {name:"(duwbak) Navin 522", operator:"Gitra Shipping", country:"Belgium", image:"https://www.eurobarges.nl/assets/uploads/projects/123/navin%2020.jpg", europanummer:"32200115", dimensions:"35,51", draft:"2", tonnage:590},
    {name:"(duwbak) Navin 544", operator:"Gitra Shipping", country:"Belgium", image:"https://www.eurobarges.nl/assets/uploads/projects/123/navin%2020.jpg", europanummer:"32200529", dimensions:"35,62", draft:"2", tonnage:590},
    {name:"Omega", operator:"Gitra Shipping", country:"Belgium", image:"https://static.vesselfinder.net/ship-photo/0-205209990-f47c04c0e996845ef62becdb221df27f/1?v1", europanummer:"6002562", dimensions:"38,85 x 5", draft:"2,44", tonnage:261},
    {name:"Siam", operator:"Gitra Shipping", country:"Belgium", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/JpX90AliPaZi4eJ9.jpg", europanummer:"2325465", dimensions:"40,68 x 5,09", draft:"2,31", tonnage:371},
    {name:"(duwbak) Tia", operator:"Gitra Shipping", country:"Belgium", image:"https://www.shipspotting.com/photos/big/8/3/1/518138.jpg?cb=0", europanummer:"6504086", dimensions:"71 x 10,5", draft:"3", tonnage:1281},
    {name:"(duwbak) Tia II", operator:"Gitra Shipping", country:"Belgium", image:"https://cdn.binnenvaart.eu/userfiles/images/schepen/40000-50000/46837/600/150214-.jpg", europanummer:"2324452", dimensions:"71 x 10,5", draft:"3", tonnage:1274},
    {name:"Wouter", operator:"Gitra Shipping", country:"Belgium", image:"https://cdn.binnenvaart.eu/userfiles/images/schepen/10000-20000/17440/600/41101-wouter.JPG", europanummer:"2311966", dimensions:"46,93 x 5,10", draft:"2,3", tonnage:383},

    //VOF. H. Taekema Binnenvaart en Overslag
    {name:"Hilda", operator:"VOF. H. Taekema Binnenvaart en Overslag", country:"Netherlands", image:"https://cdn.binnenvaart.eu/userfiles/images/schepen/00000-10000/5593/400/202047-bajac.JPG", europanummer:"3260143", dimensions:"51,15 x 6,24", draft:"2,44", tonnage:500},
    {name:"Fenna", operator:"VOF. H. Taekema Binnenvaart en Overslag", country:"Netherlands", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2019/12/fenna-van-zwolle-03021324-groningen-kh08072020-003-db.jpg", europanummer:"3021324", dimensions:"57,05 x 7,28", draft:"2,61", tonnage:668},

    // weet ik niet
    {name:"Tarsis", operator:"", country:"Belgium", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2019/12/img-9847.jpg", europanummer:"6004050", dimensions:"85 x 10,35", draft:"3", tonnage:1467},
    {name:"Trypa", operator:"", country:"Netherlands", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2019/12/img-4737.jpg", europanummer:"3270638", dimensions:"55,35 x 6,08", draft:"2,59", tonnage:565},
    {name:"SPIDO II", operator:"", country:"Netherlands", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2021/04/spido-ii-cts-02307298-boven-schelde-km-15-22-06-2025--tinny-1.jpg", europanummer:"2300118", dimensions:"55,33 x 6,46", draft:"2,38", tonnage:430},
    {name:"PASCAL-V", operator:"", country:"Belgium", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2019/12/pascal-v-06003766-mts-sint-philipsland08092021leos-156.-dbjpg.jpg", europanummer:"2005841", dimensions:"57 x 7,27", draft:"2,17", tonnage:470},
    {name:"Rodort 10", operator:"", country:"Netherlands", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2023/05/rodort-10-02309837-mts-nigtevecht12052025-leos-1-db.jpg", europanummer:"2309837", dimensions:"61,67 x 6,6", draft:"2,63", tonnage:656},
    {name:"Rodort 8", operator:"", country:"Netherlands", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2019/12/img-1613.jpg", europanummer:" 4005010", dimensions:"66,93 x 7,15", draft:"2,35", tonnage:724},
    {name:"Cedert", operator:"", country:"Belgium", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/RhqEZIgir149Tqzm.jpg", europanummer:"2006477", dimensions:"47,5 x 6,3", draft:"2,32", tonnage:378},
    {name:"Tercila", operator:"", country:"France", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2021/11/tercila-02311069-mts-seine-conflans-gerd-schuth-1.10.2021-db.jpg", europanummer:"02311069", dimensions:"67 x 8,2", draft:"2,52", tonnage:809},
    {name:"Stimul Forti", operator:"", country:"Netherlands", image:"https://debinnenvaart.nl/wp-content/uploads/image.php?url=https://de-binnenvaart.b-cdn.net/2022/09/img-8124-scaled.jpg", europanummer:"6004229", dimensions:"85,85 x 9,5", draft:"3,37", tonnage:1677}    
];

function parseLength(dim) {
    if (!dim) return 0;
    const lengthPart = dim.split("x")[0].trim().replace(",", ".");
    return parseFloat(lengthPart);
}

function calculateStats(filteredShips) {
    const totalShips = filteredShips.length;
    let totalTonnage = 0;
    let totalLength = 0;
    let largestShip = null;
    let smallestShip = null;
    const operatorCount = {};
    const operatorTonnage = {};

    filteredShips.forEach(ship => {
        if (ship.tonnage) {
            totalTonnage += ship.tonnage;
            if (!largestShip || ship.tonnage > largestShip.tonnage) largestShip = ship;
            if (!smallestShip || ship.tonnage < smallestShip.tonnage) smallestShip = ship;

            operatorTonnage[ship.operator] = (operatorTonnage[ship.operator] || 0) + ship.tonnage;
        }
        totalLength += parseLength(ship.dimensions);
        operatorCount[ship.operator] = (operatorCount[ship.operator] || 0) + 1;
    });

    const avgTonnage = totalShips ? (totalTonnage / totalShips).toFixed(1) : 0;
    const avgLength = totalShips ? (totalLength / totalShips).toFixed(1) : 0;

    // Most common operator
    let mostCommonOperator = "N/A";
    let maxCount = 0;
    for (const [op, count] of Object.entries(operatorCount)) {
        if (count > maxCount) {
            maxCount = count;
            mostCommonOperator = op;
        }
    }

    return { totalShips, totalTonnage, avgTonnage, avgLength, largestShip, smallestShip, mostCommonOperator, operatorTonnage };
}

// Detect which page is loaded
if (document.getElementById("shipList")) {
    // --- Ship Cards Page ---
    const shipList = document.getElementById("shipList");
    const companyFilter = document.getElementById("companyFilter");

    [...new Set(ships.map(s => s.operator))].forEach(company => {
        const opt = document.createElement("option");
        opt.value = company;
        opt.textContent = company;
        companyFilter.appendChild(opt);
    });

    function renderShips() {
        shipList.innerHTML = "";
        const selectedCompany = companyFilter.value;
        const filtered = ships.filter(
            s => selectedCompany === "all" || s.operator === selectedCompany
        );

        filtered.forEach(ship => {
            const card = document.createElement("div");
            card.className = "ship-card " + ship.operator.replace(/\s+/g, "-"); // for color coding

            card.innerHTML = `
                <img src="${ship.image || 'https://via.placeholder.com/600x400?text=No+Image'}">
                <div class="ship-content">
                    <h2>${ship.name}</h2>
                    <p class="operator">${ship.operator}</p>
                    <p class="country"><strong>Country:</strong> ${ship.country || "-"}</p>
                    <p><strong>Europanummer:</strong> ${ship.europanummer || "-"}</p>
                    <p><strong>Dimensions:</strong> ${ship.dimensions || "-"}</p>
                    <p><strong>Draft:</strong> ${ship.draft || "-"}</p>
                    <p><strong>Tonnage:</strong> ${ship.tonnage || "-"}</p>
                </div>
            `;
            shipList.appendChild(card);
        });
    }

    companyFilter.addEventListener("change", renderShips);
    renderShips();

} else if (document.getElementById("totalShips")) {
    // --- Statistics Page ---
    const totalShipsEl = document.getElementById("totalShips");
    const totalTonnageEl = document.getElementById("totalTonnage");
    const avgTonnageEl = document.getElementById("avgTonnage");
    const avgLengthEl = document.getElementById("avgLength");
    const largestShipEl = document.getElementById("largestShip");
    const smallestShipEl = document.getElementById("smallestShip");
    const mostCommonOperatorEl = document.getElementById("mostCommonOperator");
    const ctx = document.getElementById('operatorChart').getContext('2d');

    const stats = calculateStats(ships);

    totalShipsEl.textContent = stats.totalShips;
    totalTonnageEl.textContent = stats.totalTonnage;
    avgTonnageEl.textContent = stats.avgTonnage;
    avgLengthEl.textContent = stats.avgLength;
    largestShipEl.textContent = `${stats.largestShip?.name} (${stats.largestShip?.tonnage})`;
    smallestShipEl.textContent = `${stats.smallestShip?.name} (${stats.smallestShip?.tonnage})`;
    mostCommonOperatorEl.textContent = stats.mostCommonOperator;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(stats.operatorTonnage),
            datasets: [{
                label: 'Total Tonnage per Operator',
                data: Object.values(stats.operatorTonnage),
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            plugins: { legend: { display: false } },
            responsive: true,
            scales: {
                y: { beginAtZero: true, title: { display: true, text: 'Tonnage' } },
                x: { title: { display: true, text: 'Operator' } }
            }
        }
    });
}
// Hulpfunctie: landnaam → vlag
function getFlagEmoji(country) {
    const flags = {
        "Netherlands": "🇳🇱",
        "Belgium": "🇧🇪",
        "Germany": "🇩🇪",
        "France": "🇫🇷",
        "Luxembourg": "🇱🇺"
        // Voeg hier eventueel meer landen toe
    };
    return flags[country] || "🏳️"; // fallback wit vlaggetje
}

// Scheepskaarten renderen
function renderShips() {
    const container = document.getElementById("ships-container");
    container.innerHTML = "";

    ships.forEach(ship => {
        const card = document.createElement("div");
        card.classList.add("ship-card");

        card.innerHTML = `
            <img src="${ship.image}" alt="${ship.name}">
            <h3>${ship.name}</h3>
            <p><strong>Operator:</strong> ${ship.operator}</p>
            <p><strong>Country:</strong> ${getFlagEmoji(ship.country)} ${ship.country}</p>
            <p><strong>Tonnage:</strong> ${ship.tonnage} t</p>
        `;

        container.appendChild(card);
    });
}
