

import React from "react";
import { Route, Routes } from "react-router-dom";
import Cases from "../Pages/Cases and sleeves/Cases";



import SingleWatchband from "./NewArrivalComp/SinglePage/SingleWatchband"

// import Home from '../Pages/Home/Home'
// import PhoneCovers from './Cases and covers/GroupSingle/PhoneCovers'


import Home from '../Pages/Home/Home'
import { AccountPage } from '../Pages/UserAccount/AccountPage'
import { Rewards } from '../Pages/UserAccount/Reward'
import FilterMobiles from './Cases and covers/FilterMobiles'
import PhoneCovers from './Cases and covers/GroupSingle/Iphone.jsx/PhoneCovers'
import OppoCover from './Cases and covers/GroupSingle/Oppo/OppoCover'
import NothingCover from './Cases and covers/Nothing/NothingCover'
import OneplusCover from './Cases and covers/Onepus/OneplusCover'
import SamsumgCover from './Cases and covers/Samsung/SamsumgCover'
import VivoCover from './Cases and covers/Vivo/VivoCover'
import All from './Laptop Macbook Sleeves/GroupSingle/All'
import Envelop from './Laptop Macbook Sleeves/GroupSingle/Envelop'
import LaptopCoverNavbar from './Laptop Macbook Sleeves/GroupSingle/LaptopCoverNavbar'
import MacbookSleeves from './Laptop Macbook Sleeves/GroupSingle/MacbookSleeves'
import Messenger from './Laptop Macbook Sleeves/GroupSingle/Messenger'
import ZippedSleeves from './Laptop Macbook Sleeves/GroupSingle/ZippedSleeves'

import NewArrivalComp from './NewArrivalComp/NewArrivalComp'
import NewArrivalsPage from '../Pages/NewArrivalsPage.jsx/NewArrivalsPage'
import Watchbands from './NewArrivalComp/Watchbands'
import MessengerBags from './NewArrivalComp/MessengerBags'
import PedalBackPack from './NewArrivalComp/PedalBackPack'
import Desks from './NewArrivalComp/Desks'
import ChargingSolution from './NewArrivalComp/ChargingSolution'
import AllArrivals from './NewArrivalComp/AllArrivals'
import Cart from "../Pages/cart/Cart";
import BuyNow from "../Pages/BuyNow";






export default function AllRoutes() {
  console.log("dbdf");
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cases' element={<Cases/>}/>
            <Route path='/cases/phonecovers' element={<PhoneCovers/>}/>
            <Route path='/rewards' element={<Rewards/>}/>
            <Route path='/cases/phonecovers' element={<FilterMobiles/>}/>
            <Route path='/cases/phonecovers/apple' element={<PhoneCovers/>}/>
            <Route path='/cases/phonecovers/samsung' element={<SamsumgCover/>}/>
            <Route path='/cases/phonecovers/xiaomi' element={<NothingCover/>}/>
            <Route path='/cases/phonecovers/oneplus' element={<OneplusCover/>}/>
            <Route path='/cases/phonecovers/vivo' element={<VivoCover/>}/>
            <Route path='/cases/phonecovers/oppo' element={<OppoCover/>}/>
            <Route path='/cases/laptopcovers'  element={<LaptopCoverNavbar/>}/>
            <Route path='/cases/laptopcovers/all'  element={<All/>}/>
            <Route path='/cases/laptopcovers/zipped'  element={<ZippedSleeves/>}/>
            <Route path='/cases/laptopcovers/macbook'  element={<MacbookSleeves/>}/>
            <Route path='/cases/laptopcovers/envelope'  element={<Envelop/>}/>
            <Route path='/cases/laptopcovers/messenger'  element={<Messenger/>}/>

            <Route path='/newarrivalcomp/allarrivals'  element={<AllArrivals/>}/>
            <Route path='/newarrivalcomp/watchbands'  element={<Watchbands/>}/>
            <Route path='/newarrivalcomp/pedalbackpack'  element={<PedalBackPack/>}/>
            <Route path='/newarrivalcomp/messengerbags'  element={<MessengerBags/>}/>
            <Route path='/newarrivalcomp/desks'  element={<Desks/>}/>
            <Route path='/newarrivalcomp/chargingsolution'  element={<ChargingSolution/>}/>
            <Route path='/newarrivalspage' element={<NewArrivalsPage/>}></Route>
            <Route path='/newarrivalcomp' element={<NewArrivalComp/>}></Route>
            {/* <Route path='/cases/phonecovers' element={<PhoneCovers/>}/> */}
            <Route path="/cart" element={<Cart />} />
        <Route path="/buynow" element={<BuyNow />} />
       <Route path="/singlewatchband/:id" element={<SingleWatchband/>}></Route>
       <Route path="/account/*" element={<AccountPage />} />
       

        {/* <Route path='/cases/phonecovers' element={<PhoneCovers/>}/> */}
      {/* </Routes>

      <Routes>
        <Route path="/cases/phonecovers" element={<FilterMobiles />} /> */}
        {/* <Route path='/rewards' element={<Rewards/>}/> */}
       
        {/* <Route path="/cases/phonecovers/apple" element={<PhoneCovers />} /> */}

        <Route
          path="/iphoneCovers/:id"
          element={<IndividualPhoneCoverData />}
        />
       
        {/* <Route path='/cases/phonecovers' element={<PhoneCovers/>}/> */}
        <Route path="/accesories" element={<AllAccessories />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/wallets" element={<AllAccessories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/buynow" element={<BuyNow />} />
      
        </Routes>
    </div>
  );
}
