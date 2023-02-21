public class Booking {

    private Drive driveInfo;
    private int departCapacity;
    private int returnCapacity;

    public Booking(Drive drive, int departureCap, int returnCap){
        driveInfo = drive;
        departCapacity = departureCap;
        returnCapacity = returnCap;
    }

    public Drive getDriveInfo() {
        return driveInfo;
    }

    public int getDepartCapacity() {
        return departCapacity;
    }

    public int getReturnCapacity() {
        return returnCapacity;
    }

    public void bookDeparture(){
        departCapacity--;
    }

    public void bookReturn(){
        returnCapacity--;
    }

    public void printInfo(){
        System.out.println(driveInfo.driveInfo() + "\nBookings left for departure: " + departCapacity + "\nBookings left for return: " + returnCapacity);
    }

    public static void main(String[] args) {
        Drive driver = new Drive("Bob", "4:45", "7:20");
        Booking book = new Booking(driver, 3, 4);
        book.printInfo();
    }
}
