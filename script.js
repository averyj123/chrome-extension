async function getapi(url) {
   const response = await fetch(url);
   var data = await response.json();

   var today = new Date();
   var time = today.getHours();

   let theDate = data.daily.time[0];
   let max= data.daily.temperature_2m_max[0];
   let min= data.daily.temperature_2m_min[0];
   let current = data.hourly.temperature_2m[parseInt(time)];
   const temp_units = data.daily_units.temperature_2m_max;
   let message = "";
   let current_temp = parseInt(current);

if(current_temp <=20) {
   message = "ice ice baby **"
} if (current_temp <=40) {
      message = "** ooh the weather outside is frightful **";
   }  else if(current_temp <= 60) {
      message = "~ baby its cold outside ~";
   } else if(current_temp <=80) {
      message = "yeah you're living the good life";
   } else {
      message = "it's electric!";
   }

   document.getElementById("date").innerHTML = theDate;  
   document.getElementById("high").innerHTML = max+ " "+temp_units;
   document.getElementById("low").innerHTML = min+ " "+temp_units;
   document.getElementById("time").innerHTML = current+ " "+temp_units;
   document.getElementById("message").innerHTML = message;

}
const api_url = "https://api.open-meteo.com/v1/forecast?latitude=37.34&longitude=-121.89&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles&start_date=2022-11-19&end_date=2022-11-26";
getapi(api_url);