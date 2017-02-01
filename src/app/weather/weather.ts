export class Weather {
    constructor(
        public currentLocationTemp: number,
        public summary: string,
        public wind: number,
        public windBearing: number,
        public humidity:number,
        public icon: string,
        public pressure: number,
        public ozone: number,
        public chanceOfRain: number,
        public cloudcover: number,
        public rainIntensity: number
    ) {}
}