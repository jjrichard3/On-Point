class Drive{
    private String driver;
    private String departure;
    private String arrival;

    public Drive(String driver, String departureTime, String arrivalTime){
        this.driver = driver;
        departure = departureTime;
        arrival = arrivalTime;
    }

    public String getDriver() {
        return driver;
    }

    public String getArrivalTime() {
        return arrival;
    }

    public String getDepartureTime() {
        return departure;
    }

    public String driveInfo(){
        return "Driver: " + driver + "\nDeparture Time: " + departure + "\nArrival Time: " + arrival;
    }
}