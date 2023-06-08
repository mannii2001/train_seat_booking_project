import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let seatsAccountability = {
      row1:0,
      row2:0,
      row3:0,
      row4:0,
      row5:0,
      row6:0,
      row7:0,
      row8:0,
      row9:0,
      row10:0,
      row11:0,
      row12:0
  }

  const [val,setVal] = useState("");
  function findSeats(){
      if(val === ""){
        alert("Please Enter Number of Seats")
        setVal("")
      }else if(val > 7){
        alert("You Can Book Maximum 7 Seats at One time.")
        setVal("")
      }else{
        seeAvailableSeats(val);
        setVal("");
      }
  }
  function fillSeats(seatsBooked){
      for (const key in seatsBooked) {
        if(seatsBooked[key] > 0){
          let totalNumber = seatsBooked[key]
          let rowNum = document.getElementById(key)
          
         
          
          if( totalNumber <= 3 && key === "row12"){
            const childDiv4 = rowNum.firstChild.children;
            for (const childDiv of childDiv4) {
              if(totalNumber > 0){
                childDiv.classList.add("sold")
              childDiv.classList.remove("seat");
              totalNumber--;
              }
              console.log(childDiv)
            }
          }else if(totalNumber <= 4){
            const childDiv4 = rowNum.firstChild.children;
            for (const childDiv of childDiv4) {
              if(totalNumber > 0){
                childDiv.classList.add("sold")
              childDiv.classList.remove("seat");
              totalNumber--;
              }
              console.log(childDiv)
            }
          }else if(totalNumber > 4){
            const childDiv4 = rowNum.firstChild.children;
            const childDiv3 = rowNum.lastChild.children;
            for (const childDiv of childDiv4) {
              if(totalNumber > 0){
                childDiv.classList.add("sold")
              childDiv.classList.remove("seat");
              totalNumber--;
              }
              console.log(childDiv)
            }
            for (const childDiv of childDiv3) {
              if(totalNumber > 0){
                childDiv.classList.add("sold")
              childDiv.classList.remove("seat");
              totalNumber--;
              }
              console.log(childDiv)
            }
          }
        }
      }
  }

    function seeAvailableSeats(Value){
        let number_of_seats_required = Value;

        // first loop to findout if the required seats are available in single row
        for (const key in seatsAccountability) {
          if(3-seatsAccountability[key] < number_of_seats_required && key === 'row12'){
              console.log("nOT Avaialbe")
          }else if (7-seatsAccountability[key] < number_of_seats_required) {
              console.log(`${number_of_seats_required} are not available in ${key}`)
            
          }else{
            console.log(`${number_of_seats_required} are available in ${key}`)
            let x = key;
            seatsAccountability[x] +=  Number.parseInt(number_of_seats_required); 
            let locall = JSON.stringify(seatsAccountability);
            localStorage.setItem("seats",locall)
            return;
          }
        }

        //if seats are not available in a single row let see the number of total seats available
        let count = 0;
        for (const key in seatsAccountability) {
          if(key === "row12"){
            count += (3-seatsAccountability[key])
           
            
          }else{
            count += (7-seatsAccountability[key])
          }
        }
        if(count >= number_of_seats_required){
          alert("Seats are available");
        }else{
          alert("Your desired number of seats are not available")
        }
    }
  useEffect(()=>{
    if(localStorage.getItem("seats")){
      console.log("seatsFound");
      let x  = JSON.parse(localStorage.getItem("seats"))
      // eslint-disable-next-line
       seatsAccountability = x;
      //  console.log(seatsAccountability);
      // console.log(x);
      fillSeats(seatsAccountability);
    }else{
      let x = JSON.stringify(seatsAccountability);
      localStorage.setItem("seats",x);
      console.log(x);
    }
  },[seatsAccountability])

  return (
    <div className="App">
      <div className="mainContainer">
        <div className="seatscontainer">
        <div className="example"><div className="exampleDivItem"><div className="seat"></div> Available</div><div className="exampleDivItem"><div className="sold"></div>Booked</div></div>
          <div id="row1" className="rowContainer">
            <div className="seatGroup_of_4">
              <div className="seat">1</div>
              <div className="seat">2</div>
              <div className="seat">3</div>
              <div className="seat">4</div>
            </div>
            <div className="seatGroup_of_3">
              <div className="seat">5</div>
              <div className="seat">6</div>
              <div className="seat">7</div>
            </div>
          </div>
          <div id="row2" className="rowContainer">
            <div className="seatGroup_of_4">
              <div className="seat">8</div>
              <div className="seat">9</div>
              <div className="seat">10</div>
              <div className="seat">11</div>
            </div>
            <div className="seatGroup_of_3">
              <div className="seat">12</div>
              <div className="seat">13</div>
              <div className="seat">14</div>
            </div>
          </div>
          <div id="row3" className="rowContainer">
            <div className="seatGroup_of_4">
              <div className="seat">15</div>
              <div className="seat">16</div>
              <div className="seat">17</div>
              <div className="seat">18</div>
            </div>
            <div className="seatGroup_of_3">
              <div className="seat">19</div>
              <div className="seat">20</div>
              <div className="seat">21</div>
            </div>
          </div>
          <div id="row4" className="rowContainer">
            <div className="seatGroup_of_4">
              <div className="seat">22</div>
              <div className="seat">23</div>
              <div className="seat">24</div>
              <div className="seat">25</div>
            </div>
            <div className="seatGroup_of_3">
              <div className="seat">26</div>
              <div className="seat">27</div>
              <div className="seat">28</div>
            </div>
          </div>
          <div id="row5" className="rowContainer">
            <div className="seatGroup_of_4">
              <div className="seat">29</div>
              <div className="seat">30</div>
              <div className="seat">31</div>
              <div className="seat">32</div>
            </div>
            <div className="seatGroup_of_3">
              <div className="seat">33</div>
              <div className="seat">34</div>
              <div className="seat">35</div>
            </div>
          </div>
          <div id="row6" className="rowContainer">
            <div className="seatGroup_of_4">
              <div className="seat">36</div>
              <div className="seat">37</div>
              <div className="seat">38</div>
              <div className="seat">39</div>
            </div>
            <div className="seatGroup_of_3">
              <div className="seat">40</div>
              <div className="seat">41</div>
              <div className="seat">42</div>
            </div>
          </div>
          <div id="row7" className="rowContainer">
            <div className="seatGroup_of_4">
              <div className="seat">43</div>
              <div className="seat">44</div>
              <div className="seat">45</div>
              <div className="seat">46</div>
            </div>
            <div className="seatGroup_of_3">
              <div className="seat">47</div>
              <div className="seat">48</div>
              <div className="seat">49</div>
            </div>
          </div>
          <div id="row8" className="rowContainer">
            <div className="seatGroup_of_4">
              <div className="seat">50</div>
              <div className="seat">51</div>
              <div className="seat">52</div>
              <div className="seat">53</div>
            </div>
            <div className="seatGroup_of_3">
              <div className="seat">54</div>
              <div className="seat">55</div>
              <div className="seat">56</div>
            </div>
          </div>
          <div id="row9" className="rowContainer">
            <div className="seatGroup_of_4">
              <div className="seat">57</div>
              <div className="seat">58</div>
              <div className="seat">59</div>
              <div className="seat">60</div>
            </div>
            <div className="seatGroup_of_3">
              <div className="seat">61</div>
              <div className="seat">62</div>
              <div className="seat">63</div>
            </div>
          </div>
          <div id="row10" className="rowContainer">
            <div className="seatGroup_of_4">
              <div className="seat">64</div>
              <div className="seat">65</div>
              <div className="seat">66</div>
              <div className="seat">67</div>
            </div>
            <div className="seatGroup_of_3">
              <div className="seat">68</div>
              <div className="seat">69</div>
              <div className="seat">70</div>
            </div>
          </div>
          <div id="row11" className="rowContainer">
            <div className="seatGroup_of_4">
              <div className="seat">71</div>
              <div className="seat">72</div>
              <div className="seat">73</div>
              <div className="seat">74</div>
            </div>
            <div className="seatGroup_of_3">
              <div className="seat">75</div>
              <div className="seat">76</div>
              <div className="seat">77</div>
            </div>
          </div>
          <div id="row12" className="rowContainer">
            <div className="seatGroup_of_3">
              <div className="seat">78</div>
              <div className="seat">79</div>
              <div className="seat">80</div>
            </div>
          </div>
        </div>
        <div className="inputDetailsContainer">
            <div class="form-group">
              <label for="exampleInputEmail1" className="headingOfInput"><h1><strong>Number of Tickets</strong></h1></label>
              <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={val} placeholder="Enter Number of Tickets" onChange={(e)=>setVal(e.target.value)}/>
            </div>
            <button className="btn btn-primary" onClick={findSeats}><strong>Book Ticket</strong></button>
        </div>
      </div>
    </div>
  );
}

export default App;
