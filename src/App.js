import React, { Component } from 'react';
import './App.css';
var moment = require('moment');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [], //contains city names
      main: [], // contains todays info
      tomorrow: [], // contains tomorrow info
      day3: [],
      day4: [],
      day5: [],
      zipCode: 60613,
      weather: '',
      code: "US",
      zipInput: '60657',
      images: ['http://icons.iconarchive.com/icons/icons-land/weather/256/Overcast-icon.png', //cloudy
            "http://icons.iconarchive.com/icons/icons-land/weather/256/Sunny-icon.png", // sunny
            "http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-showers-scattered-icon.png", //rainy
            "http://icons.iconarchive.com/icons/icons-land/weather/256/Moon-Phase-Full-icon.png" // clear skies night
          ],
      degrees:'Farenheit'
    }
  }

  componentWillMount() {
    let zip = localStorage.getItem(1)
    if(zip) {
    console.log(zip);
    this.setState({
      zipCode: parseFloat(zip)
    })
  } else {
      this.setState({
        zipCode: 60657
      })
    }
}

  componentDidMount() {
    let city = document.getElementById("city")
    let mintemp = document.getElementById("mintemp")
    let temp = document.getElementById("temp")
    let maxtemp = document.getElementById("maxtemp")
    let clouds = document.getElementById("clouds")
    let dateScreen = document.getElementById("date")
    let time = document.getElementById("time")
    let storm = document.getElementById("storm")

    let celsiusButton = document.getElementById('celsiusButton')
    let FarenheitButton = document.getElementById('FarenheitButton')

    let mintemp2 = document.getElementById("mintemp2")
    let temp2 = document.getElementById("temp2")
    let maxtemp2 = document.getElementById("maxtemp2")
    let date2 = document.getElementById("date2")

    let mintemp3 = document.getElementById("mintemp3")
    let temp3 = document.getElementById("temp3")
    let maxtemp3 = document.getElementById("maxtemp3")
    let date3 = document.getElementById("date3")

    let mintemp4 = document.getElementById("mintemp4")
    let temp4 = document.getElementById("temp4")
    let maxtemp4 = document.getElementById("maxtemp4")
    let date4 = document.getElementById("date4")

    let mintemp5 = document.getElementById("mintemp5")
    let temp5 = document.getElementById("temp5")
    let maxtemp5 = document.getElementById("maxtemp5")
    let date5 = document.getElementById("date5")

    let lowDes2 = document.getElementById("lowDes2")
    let des2 = document.getElementById("des2")
    let highdes2 = document.getElementById("highdes2")

    let lowDes3 = document.getElementById("lowDes3")
    let des3 = document.getElementById("des3")
    let highdes3 = document.getElementById("highdes3")

    let lowDes4 = document.getElementById("lowDes4")
    let des4 = document.getElementById("des4")
    let highdes4 = document.getElementById("highdes4")

    let lowDes5 = document.getElementById("lowDes5")
    let des5 = document.getElementById("des5")
    let highdes5 = document.getElementById("highdes5")

    let img1pan1 = document.getElementById("img1pan1")
    let img2pan1= document.getElementById("img2pan1")
    let img3pan1 = document.getElementById("img3pan1")

    let img1pan2 = document.getElementById("img1pan2")
    let img2pan2= document.getElementById("img2pan2")
    let img3pan2 = document.getElementById("img3pan2")

    let img1pan3 = document.getElementById("img1pan3")
    let img2pan3= document.getElementById("img2pan3")
    let img3pan3 = document.getElementById("img3pan3")

    let img1pan4 = document.getElementById("img1pan4")
    let img2pan4= document.getElementById("img2pan4")
    let img3pan4 = document.getElementById("img3pan4")

    celsiusButton.addEventListener('click',() => {
      if(this.state.degrees === 'Celsius') return;
      else {
        mintemp.innerHTML = Math.round((parseFloat(mintemp.innerHTML) - 32) * (5/9))+ '˚'
        temp.innerHTML = Math.round((parseFloat(temp.innerHTML) - 32) * (5/9))
        maxtemp.innerHTML =Math.round((parseFloat(maxtemp.innerHTML) - 32) * (5/9))+ '˚'

        mintemp2.innerHTML =Math.round((parseFloat(mintemp2.innerHTML) - 32) * (5/9))+ '˚'
        temp2.innerHTML =Math.round((parseFloat(temp2.innerHTML) - 32) * (5/9))+ '˚'
        maxtemp2.innerHTML =Math.round((parseFloat(maxtemp2.innerHTML) - 32) * (5/9))+ '˚'

        mintemp3.innerHTML =Math.round((parseFloat(mintemp3.innerHTML) - 32) * (5/9))+ '˚'
        temp3.innerHTML =Math.round((parseFloat(temp3.innerHTML) - 32) * (5/9))+ '˚'
        maxtemp3.innerHTML =Math.round((parseFloat(maxtemp3.innerHTML) - 32) * (5/9))+ '˚'

        mintemp4.innerHTML =Math.round((parseFloat(mintemp4.innerHTML) - 32) * (5/9))+ '˚'
        temp4.innerHTML =Math.round((parseFloat(temp4.innerHTML) - 32) * (5/9))+ '˚'
        maxtemp4.innerHTML =Math.round((parseFloat(maxtemp4.innerHTML) - 32) * (5/9))+ '˚'

        mintemp5.innerHTML =Math.round((parseFloat(mintemp5.innerHTML) - 32) * (5/9))+ '˚'
        temp5.innerHTML =Math.round((parseFloat(temp5.innerHTML) - 32) * (5/9))+ '˚'
        maxtemp5.innerHTML =Math.round((parseFloat(maxtemp5.innerHTML) - 32) * (5/9))+ '˚'
        this.setState({
          degrees: "Celsius"
        })
      }
    })

    FarenheitButton.addEventListener('click', () => {
      if(this.state.degrees === 'Farenheit') return;
      mintemp.innerHTML = Math.round(((parseFloat(mintemp.innerHTML) * (9/5)) + 32)) + '˚'
      temp.innerHTML = Math.round(((parseFloat(temp.innerHTML) * (9/5)) + 32))
      maxtemp.innerHTML = Math.round(((parseFloat(maxtemp.innerHTML) * (9/5)) + 32)) + '˚'

      mintemp2.innerHTML =  Math.round(((parseFloat(mintemp2.innerHTML) * (9/5)) + 32)) + '˚'
      temp2.innerHTML =  Math.round(((parseFloat(temp2.innerHTML) * (9/5)) + 32)) + '˚'
      maxtemp2.innerHTML =  Math.round(((parseFloat(maxtemp2.innerHTML) * (9/5)) + 32)) + '˚'

      mintemp3.innerHTML =  Math.round(((parseFloat(mintemp3.innerHTML) * (9/5)) + 32)) + '˚'
      temp3.innerHTML =  Math.round(((parseFloat(temp3.innerHTML) * (9/5)) + 32)) + '˚'
      maxtemp3.innerHTML =  Math.round(((parseFloat(maxtemp3.innerHTML) * (9/5)) + 32)) + '˚'

      mintemp4.innerHTML =  Math.round(((parseFloat(mintemp4.innerHTML) * (9/5)) + 32)) + '˚'
      temp4.innerHTML =  Math.round(((parseFloat(temp4.innerHTML) * (9/5)) + 32)) + '˚'
      maxtemp4.innerHTML =  Math.round(((parseFloat(maxtemp4.innerHTML) * (9/5)) + 32)) + '˚'

      mintemp5.innerHTML =  Math.round(((parseFloat(mintemp5.innerHTML) * (9/5)) + 32)) + '˚'
      temp5.innerHTML =  Math.round(((parseFloat(temp5.innerHTML) * (9/5)) + 32)) + '˚'
      maxtemp5.innerHTML =  Math.round(((parseFloat(maxtemp5.innerHTML) * (9/5)) + 32)) + '˚'
      this.setState({
        degrees:'Farenheit'
      })
    })

    let date = new Date()
    let tomorrow = moment(date).add(1, 'days').format('YYYY-MM-DD HH:m:s')
                                              .split(' ')
                                              .shift()
    let day3_ = moment(date).add(2, 'days').format('YYYY-MM-DD HH:m:s')
                                           .split(' ')
                                           .shift()
    let day4_ = moment(date).add(3, 'days').format('YYYY-MM-DD HH:m:s')
                                            .split(' ')
                                            .shift()
    let day5_ = moment(date).add(4, 'days').format('YYYY-MM-DD HH:m:s')
                                           .split(' ')
                                           .shift()

    let day2 = moment(date).add(1,'days')
    let day3 = moment(date).add(2, 'days')
    let day4 = moment(date).add(3, 'days')
    let day5 = moment(date).add(4, 'days')

    let formatted = moment(date).format('YYYY-MM-DD HH:m:s')
                                .split(' ')
                                .shift()

    const endpoint2 = `http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipCode},${this.state.code}&APPID=595880a4870b5f0a0e0336522f0eb76e`
    const endpoint = `http://api.openweathermap.org/data/2.5/forecast?zip=${this.state.zipCode},${this.state.code}&APPID=595880a4870b5f0a0e0336522f0eb76e`

    fetch(endpoint2)
            .then(x => x.json())
            .then(data => {
              this.state.main.push(data)

              this.state.name.push(data.name)
              this.state.name.push(data.sys.country)

                clouds.innerHTML = this.state.main[0].weather[0].description
                city.innerHTML = this.state.name[0] + ', ' + this.state.name[1]
                mintemp.innerHTML = Math.round(((this.state.main[0].main.temp_min - 273) * (9/5) + 32)) + '˚'
                temp.innerHTML = Math.round(((this.state.main[0].main.temp - 273) * (9/5) + 32))
                maxtemp.innerHTML = Math.round(((this.state.main[0].main.temp_max - 273) * (9/5) + 32)) + '˚'
            })
    fetch(endpoint)
            .then(x => x.json())
            .then(data => {

                for(let x=0;x<data.list.length;x++) {
                  let dayOne = data.list[x].dt_txt.split(' ').shift()
                  if(dayOne === tomorrow) { // if list item has tmrrows date
                    this.state.tomorrow.push(data.list[x])
                  }}

                  for(let x=0;x<data.list.length;x++) {
                    let dayOne = data.list[x].dt_txt.split(' ').shift()
                    if(dayOne === day3_) { // if list item has day3 date
                      this.state.day3.push(data.list[x])
                    }}

                    for(let x=0;x<data.list.length;x++) {
                      let dayOne = data.list[x].dt_txt.split(' ').shift()
                      if(dayOne === day4_) { // if list item has day4 date
                        this.state.day4.push(data.list[x])
                      }}

                      for(let x=0;x<data.list.length;x++) {
                        let dayOne = data.list[x].dt_txt.split(' ').shift()
                        if(dayOne === day5_) { // if list item has day5 date
                          this.state.day5.push(data.list[x])
                        }}

                  date2.innerHTML= day2._d.toDateString()
                  date3.innerHTML= day3._d.toDateString()
                  date4.innerHTML= day4._d.toDateString()
                  date5.innerHTML= day5._d.toDateString()

                dateScreen.innerHTML =  new Date().toDateString()
                time.innerHTML = new Date().toLocaleTimeString()

                mintemp2.innerHTML =  Math.round(((this.state.tomorrow[2].main.temp_min - 273) * (9/5) + 32)) + '˚'
                temp2.innerHTML =  Math.round(((this.state.tomorrow[5].main.temp - 273) * (9/5) + 32)) + '˚'
                maxtemp2.innerHTML =  Math.round(((this.state.tomorrow[this.state.tomorrow.length-1].main.temp_max - 273) * (9/5) + 32)) + '˚'
                console.log(this.state.day3)

                mintemp3.innerHTML =  Math.round(((this.state.day3[2].main.temp_min - 273) * (9/5) + 32)) + '˚'
                temp3.innerHTML =  Math.round(((this.state.day3[5].main.temp - 273) * (9/5) + 32)) + '˚'
                maxtemp3.innerHTML =  Math.round(((this.state.day3[7].main.temp_max - 273) * (9/5) + 32)) + '˚'

                mintemp4.innerHTML =  Math.round(((this.state.day4[2].main.temp_min - 273) * (9/5) + 32)) + '˚'
                temp4.innerHTML =  Math.round(((this.state.day4[5].main.temp - 273) * (9/5) + 32)) + '˚'
                maxtemp4.innerHTML =  Math.round(((this.state.day4[7].main.temp_max - 273) * (9/5) + 32)) + '˚'

                mintemp5.innerHTML =  Math.round(((this.state.day5[2].main.temp_min - 273) * (9/5) + 32)) + '˚'
                temp5.innerHTML =  Math.round(((this.state.day5[5].main.temp - 273) * (9/5) + 32)) + '˚'
                maxtemp5.innerHTML =  Math.round(((this.state.day5[7].main.temp_max - 273) * (9/5) + 32)) + '˚'

                lowDes2.innerHTML = this.state.tomorrow[2].weather[0].main
                des2.innerHTML = this.state.tomorrow[5].weather[0].main
                highdes2.innerHTML = this.state.tomorrow[this.state.tomorrow.length-1].weather[0].main

                lowDes3.innerHTML = this.state.day3[2].weather[0].main
                des3.innerHTML = this.state.day3[5].weather[0].main
                highdes3.innerHTML = this.state.day3[7].weather[0].main

                lowDes4.innerHTML = this.state.day4[2].weather[0].main
                des4.innerHTML = this.state.day4[5].weather[0].main
                highdes4.innerHTML = this.state.day4[7].weather[0].main

                lowDes5.innerHTML = this.state.day5[2].weather[0].main
                des5.innerHTML = this.state.day5[5].weather[0].main
                highdes5.innerHTML = this.state.day5[7].weather[0].main

                if(clouds.innerHTML.match(/rain/)) {
                  document.body.style.background = `linear-gradient(hsl(200, 50%, 10%), hsla(200, 40%, 60%))`
                  storm.src = this.state.images[2]
                } else if (clouds.innerHTML.match(/sunny/) || clouds.innerHTML.match(/clear/)  ) {
                  document.body.style.background = `linear-gradient(rgba(232, 229, 116, 0.82), rgb(177, 127, 51))`
                  storm.src = this.state.images[1]
                } else if (clouds.innerHTML.match(/cloud/)) {
                  document.body.style.background = `linear-gradient(rgb(31, 31, 31), hsl(200, 1%, 61%))`
                  storm.src = this.state.images[0]
                }

                 if(lowDes2.innerHTML.match(/Rain/)) {
                  img1pan1.src = this.state.images[2]
                } else if (lowDes2.innerHTML.match(/Sunny/) || lowDes2.innerHTML.match(/Clear/)) {
                  img1pan1.src = this.state.images[1]
                } else if (lowDes2.innerHTML.match(/Cloud/)) {
                  img1pan1.src = this.state.images[0]
                }

                if(des2.innerHTML.match(/Rain/)) {
                 img2pan1.src = this.state.images[2]
               } else if (des2.innerHTML.match(/Sunny/) || des2.innerHTML.match(/Clear/)) {
                 img2pan1.src = this.state.images[1]
               } else if (des2.innerHTML.match(/Cloud/)) {
                 img2pan1.src = this.state.images[0]
               }

               if(highdes2.innerHTML.match(/Rain/)) {
                img3pan1.src = this.state.images[2]
              } else if (highdes2.innerHTML.match(/Sunny/) || highdes2.innerHTML.match(/Clear/)) {
                img3pan1.src = this.state.images[3]
              } else if (highdes2.innerHTML.match(/Cloud/)) {
                img3pan1.src = this.state.images[0]
              }

              if(lowDes3.innerHTML.match(/Rain/)) {
               img1pan2.src = this.state.images[2]
             } else if (lowDes3.innerHTML.match(/Sunny/) || lowDes3.innerHTML.match(/Clear/)) {
               img1pan2.src = this.state.images[1]
             } else if (lowDes3.innerHTML.match(/Cloud/)) {
               img1pan2.src = this.state.images[0]
             }

             if(des3.innerHTML.match(/Rain/)) {
              img2pan2.src = this.state.images[2]

            } else if (des3.innerHTML.match(/Sunny/) || des3.innerHTML.match(/Clear/)) {
              img2pan2.src = this.state.images[1]

            } else if (des3.innerHTML.match(/Cloud/)) {
              img2pan2.src = this.state.images[0]

            }

            if(highdes3.innerHTML.match(/Rain/)) {
             img3pan2.src = this.state.images[2]
           } else if (highdes3.innerHTML.match(/Sunny/) || highdes3.innerHTML.match(/Clear/)) {
             img3pan2.src = this.state.images[3]
           } else if (highdes3.innerHTML.match(/Cloud/)) {
             img3pan2.src = this.state.images[0]
           }

           if(lowDes4.innerHTML.match(/Rain/)) {
            img1pan3.src = this.state.images[2]
          } else if (lowDes4.innerHTML.match(/Sunny/) || lowDes3.innerHTML.match(/Clear/)) {
            img1pan3.src = this.state.images[1]
          } else if (lowDes4.innerHTML.match(/Cloud/)) {
            img1pan3.src = this.state.images[0]
          }

          if(des4.innerHTML.match(/Rain/)) {
           img2pan3.src = this.state.images[2]
         } else if (des4.innerHTML.match(/Sunny/) || des4.innerHTML.match(/Clear/)) {
           img2pan3.src = this.state.images[1]
         } else if (des4.innerHTML.match(/Cloud/)) {
           img2pan3.src = this.state.images[0]
         }

         if(highdes4.innerHTML.match(/Rain/)) {
          img3pan3.src = this.state.images[2]
        } else if (highdes4.innerHTML.match(/Sunny/) || highdes4.innerHTML.match(/Clear/)) {
          img3pan3.src = this.state.images[3]
        } else if (highdes4.innerHTML.match(/Cloud/)) {
          img3pan3.src = this.state.images[0]
        }

        if(lowDes5.innerHTML.match(/Rain/)) {
         img1pan4.src = this.state.images[2]
       } else if (lowDes5.innerHTML.match(/Sunny/) || lowDes5.innerHTML.match(/Clear/)) {
         img1pan4.src = this.state.images[1]
       } else if (lowDes5.innerHTML.match(/Cloud/)) {
         img1pan4.src = this.state.images[0]
       }

       if(des5.innerHTML.match(/Rain/)) {
        img2pan4.src = this.state.images[2]
      } else if (des5.innerHTML.match(/Sunny/) || des5.innerHTML.match(/Clear/)) {
        img2pan4.src = this.state.images[1]
      } else if (des5.innerHTML.match(/Cloud/)) {
        img2pan4.src = this.state.images[0]
      }

      if(highdes5.innerHTML.match(/Rain/)) {
       img3pan4.src = this.state.images[2]
     } else if (highdes5.innerHTML.match(/Sunny/) || highdes5.innerHTML.match(/Clear/)) {
       img3pan4.src = this.state.images[3]
     } else if (highdes5.innerHTML.match(/Cloud/)) {
       img3pan4.src = this.state.images[0]
     }

        }
          )
        }

    zip = (e) => {
      let value = e.target.value
      this.setState({
        zipInput: value
      })
    }

    submit = () => {
      let fake = []
      const zip = document.getElementById('zip')
      const endpoint2 = `http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipInput},${this.state.code}&APPID=595880a4870b5f0a0e0336522f0eb76e`
      fetch(endpoint2)
                .then(x => x.json())
                .then(data => {
                  fake.push(data)
                  if((/(^\d{5}$)|(^\d{5}-\d{4}$)/).test(this.state.zipInput)
                      && fake[0].cod === 200) {
                        localStorage.removeItem(1)
                        localStorage.setItem(1, this.state.zipInput);
                        window.location.reload()
                  } else {
                    alert("Invalid Zip")
                  }
                })
              }


  render() {
    return (
      <div className = 'main'>

        <div className="topApp" >

          <div id = 'dateTime'>
            <div id = 'city'></div>
            <div id = 'date'></div>
            <div id = 'time'></div>
          </div>

          <div className = 'highsLows'>
            <div id = 'first'></div>
            <div id ='theTimes'>
              <div id = 'min'>
                <div id = 'min-label'>Low</div>
                <div id = 'mintemp'></div>
              </div>
              <div id = 'temp'></div>
              <div id = 'max'>
                  <div id= 'max-label'>High</div>
                  <div id = 'maxtemp'></div>
              </div>
            </div>
            <div id = 'conditions'>
              <div id = 'clouds'></div>
              <img id = 'storm' src = {this.state.images[0]} alt = ''/>
            </div>
          </div>

          <div id = 'part3'>
          <div id = 'buttons'>
            <div id = 'celsiusButton'>˚C</div>
            <div id = 'FarenheitButton'>˚F</div>
          </div>
            <div id = 'topMiddle'>
                <input id = 'zip' onChange ={this.zip} type = 'text' placeholder = 'Zip Code'></input>
                <input id ='submit' onClick = {this.submit} type = 'submit' placeholder = 'Funk'></input>
            </div>

          </div>

      </div>

      <div className = 'bottomApp'>

      <div id = 'panel' className ='pan1'>
        <div id = 'date2'></div>
        <div className = 'highsLows2'>
          <div className = 'timeLabels'>
            <div id = 'label1'>6:00</div>
            <div id = 'label2'>15:00</div>
            <div id = 'label3'>21:00</div>
          </div>
          <div className = 'tempsBottom'>
            <div id = 'mintemp2'></div>
            <div id = 'temp2'></div>
            <div id = 'maxtemp2'></div>
          </div>
          <div className = 'descrip'>
            <div id = 'lowDes2'></div>
            <div id = 'des2'></div>
            <div id = 'highdes2'></div>
          </div>
          <div className = 'images'>
          <img id ='img1pan1' src = {this.state.images[0]} alt =''/>
          <img id = 'img2pan1' src ={this.state.images[1]} alt =''/>
          <img id = 'img3pan1' src ={this.state.images[2]} alt= ''/>
          </div>
        </div>
      </div>

      <div id='panel' className ='pan2'>
        <div id = 'date3'></div>
        <div className = 'highsLows2'>
        <div className = 'timeLabels'>
          <div id = 'label1'>6:00</div>
          <div id = 'label2'>15:00</div>
          <div id = 'label3'>21:00</div>
        </div>
        <div className = 'tempsBottom'>
          <div id = 'mintemp3'></div>
          <div id = 'temp3'></div>
          <div id = 'maxtemp3'></div>
        </div>
        <div className = 'descrip'>
          <div id = 'lowDes3'></div>
          <div id = 'des3'></div>
          <div id = 'highdes3'></div>
        </div>
        <div className = 'images'>
        <img id = 'img1pan2' src = '' alt =''/>
        <img id ='img2pan2' src ='' alt =''/>
        <img id = 'img3pan2' src ='' alt= ''/>
        </div>
        </div>
      </div>

      <div id = 'panel' className ='pan3'>
        <div id = 'date4'></div>
        <div className = 'highsLows2'>
        <div className = 'timeLabels'>
          <div id = 'label1'>6:00</div>
          <div id = 'label2'>15:00</div>
          <div id = 'label3'>21:00</div>
        </div>
        <div className = 'tempsBottom'>
          <div id = 'mintemp4'></div>
          <div id = 'temp4'></div>
          <div id = 'maxtemp4'></div>
        </div>
        <div className = 'descrip'>
          <div id = 'lowDes4'></div>
          <div id = 'des4'></div>
          <div id = 'highdes4'></div>
        </div>
        <div className = 'images'>
        <img id='img1pan3' src = {this.state.images[0]} alt =''/>
        <img id='img2pan3' src ={this.state.images[1]} alt =''/>
        <img id ='img3pan3' src ={this.state.images[2]} alt= ''/>
        </div>
        </div>
      </div>

      <div id = 'panel' className ='pan4'>
        <div id = 'date5'></div>
        <div className = 'highsLows2'>
        <div className = 'timeLabels'>
          <div id = 'label1'>6:00</div>
          <div id = 'label2'>15:00</div>
          <div id = 'label3'>21:00</div>
        </div>
        <div className = 'tempsBottom'>
          <div id = 'mintemp5'></div>
          <div id = 'temp5'></div>
          <div id = 'maxtemp5'></div>
        </div>
        <div className = 'descrip'>
          <div id = 'lowDes5'></div>
          <div id = 'des5'></div>
          <div id = 'highdes5'></div>
        </div>
        <div className = 'images'>
        <img id='img1pan4'src = {this.state.images[0]} alt =''/>
        <img id='img2pan4'src ={this.state.images[1]} alt =''/>
        <img id='img3pan4'src ={this.state.images[2]} alt= ''/>
        </div>
        </div>
      </div>

      </div>

      </div>
    );
  }
}

export default App;

// <img id = 'storm' src = {this.state.images[0]} alt = ''/>
