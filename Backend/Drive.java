import java.time.LocalDate;

class Drive{
    private String driver;
    private LocalDate departure;
    private LocalDate arrival;

    public Drive(String driver, LocalDate departureTime, LocalDate arrivalTime){
        this.driver = driver;
        departure = departureTime;
        arrival = arrivalTime;
    }

    public String getDriver() {
        return driver;
    }

    public LocalDate getArrivalTime() {
        return arrival;
    }

    public LocalDate getDepartureTime() {
        return departure;
    }

    public String driveInfo(){
        return "Driver: " + driver + "\nDeparture Time: " + departure + "\nArrival Time: " + arrival;
    }
}