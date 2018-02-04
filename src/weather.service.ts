import { Component } from "@nestjs/common";
import axios, { AxiosInstance } from "axios";

@Component()
export class WeatherService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseUrl: "https://api.openweathermap.org/data/2.5/",
      params: {
        APPID: process.env.API_KEY
      }
    });
  }

  async forCity(city: string): object {
    const response = await this.client.get("weather", {
      params: { q: city }
    });
    return response.data;
  }
}
