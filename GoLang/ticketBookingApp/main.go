package main

import ("fmt")

func main(){

	appName := "iTicket"; // := this symbol is used for declare variable withour type
	const totalTickets int = 50; // total no of tickes available
	var remainingTickets uint = 50; // uint for positive


	fmt.Println("Welcome to", appName ," - A Online Ticket Booking Application");
	fmt.Printf("We have total no of %v and  %v are still available for booking \n", totalTickets, remainingTickets);

    var firstName string;
    var lastName string;
    var userMobNo int;
	var userTickets uint;

	fmt.Println("Enter your firstname : ");
	fmt.Scan(&firstName);

	fmt.Println("Enter your lastname : ");
	fmt.Scan(&lastName);

	fmt.Println("Enter your mobile number : ");
	fmt.Scan(&userMobNo);

	fmt.Println("Enter no of tickets you want to buy : ");
	fmt.Scan(&userTickets);

	remainingTickets = remainingTickets - userTickets;

	fmt.Printf("Thank you %v %v for booking %v tickets. You will received a confirmation message in your mobile number %v. \n",firstName,lastName,userTickets,userMobNo );

	fmt.Printf("%v tickets are left \n", remainingTickets);

	

}