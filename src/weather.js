function processWeatherData(data) {
  const current = data.currentConditions;
  
  return {
    location: data.resolvedAddress,
    temperature: current.temp,
    conditions: current.conditions,
    description: data.description,
    icon: current.icon,
    feelsLike: current.feelslike,
    humidity: current.humidity,
    windSpeed: current.windspeed,
    datetime: current.datetime,
  };
}

export { processWeatherData };
