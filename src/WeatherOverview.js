export default function WeatherOverview() {
    return (
      <>
        <div className="WeatherOverview">
          <div className="container">
            <div class="overview">
              <h1 id="current-city">Cape Town</h1>
              <h2 class="time" id="day-time">
                Friday, 17:00
              </h2>
              <h2 id="weather-description">Mostly cloudy</h2>
            </div>
          </div>
        </div>
      </>
    );
  }