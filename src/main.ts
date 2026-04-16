import { WeatherStation } from "./Domain/Business/WeatherStation";
import { PhoneDisplay } from "./presentation/displays/Phone";
import { WebDisplay } from "./presentation/displays/Web";

const station = new WeatherStation();

const phone = new PhoneDisplay();
const web = new WebDisplay();

station.attach(phone);
station.attach(web);

station.setTemperature(25);
station.setTemperature(30);
station.setTemperature(28);
