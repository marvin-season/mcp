import { AlertFeature, ForecastPeriod } from "./nws.js";

export function formatAlert(feature: AlertFeature): string {
  const props = feature.properties;
  return [
    `Event: ${props.event || "Unknown"}`,
    `Area: ${props.areaDesc || "Unknown"}`,
    `Severity: ${props.severity || "Unknown"}`,
    `Status: ${props.status || "Unknown"}`,
    `Headline: ${props.headline || "No headline"}`,
    "---",
  ].join("\n");
}

export function formatForecast(
  periods: ForecastPeriod[],
  latitude: number,
  longitude: number
): string {
  if (!periods.length) {
    return "No forecast periods available";
  }
  const formattedForecast = periods.map((period: ForecastPeriod) =>
    [
      `${period.name || "Unknown"}:`,
      `Temperature: ${period.temperature || "Unknown"}°${
        period.temperatureUnit || "F"
      }`,
      `Wind: ${period.windSpeed || "Unknown"} ${period.windDirection || ""}`,
      `${period.shortForecast || "No forecast available"}`,
      "---",
    ].join("\n")
  );
  return `Forecast for ${latitude}, ${longitude}:\n\n${formattedForecast.join(
    "\n"
  )}`;
}
