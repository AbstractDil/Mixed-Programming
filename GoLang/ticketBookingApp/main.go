package main

import (
	"fmt"
	"strings"
)

func main(){

	appName := "iTicket"; // := this symbol is used for declare variable withour type
	const totalTickets int = 50; // total no of tickes available
	var remainingTickets uint = 50; // uint for positive
	// var bookings  []string  
	bookings := []string{}


	fmt.Println("Welcome to", appName ," - A Online Ticket Booking Application");
	fmt.Printf("We have total no of %v and  %v are still available for booking \n", totalTickets, remainingTickets);



	for{

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

	if userTickets > uint(totalTickets) {
      fmt.Println("Invalid Entry.")
	  break
	}

	if userTickets > remainingTickets {
		fmt.Printf("We have only %v tickets, so you can't book %v tickets ", remainingTickets, userTickets)
		break
	}

	remainingTickets = remainingTickets - userTickets;

	bookings = append(bookings, firstName + " " + lastName)

	fmt.Printf("Thank you %v %v for booking %v tickets. You will received a confirmation message in your mobile number %v. \n",firstName,lastName,userTickets,userMobNo );

	fmt.Printf("%v tickets are left \n", remainingTickets);

	fmt.Printf("These are all our bookings : %v \n", bookings); // this print fullname of user
	/*
	fmt.Printf("The firstname : %v \n", bookings[0]);
	fmt.Printf("Slice  type : %T \n", bookings);
	fmt.Printf("Slice length : %v \n", len(bookings));
	*/

	// to print only first name of user 

	firstNames:=[]string{} // slice

	// for index, booking  := range bookings{
		for _, booking  := range bookings{
		// range allows us to iterate over elements for different data structures
      
		var names = strings.Fields(booking) 
		//var firstName = ;
		// to add firstname into firstNames s

		firstNames = append(firstNames, names[0])

		/*
        * Example :- "Sagar Nandy" - This is a string 
		* stings.Fields() slice the name - "Sagar", "Nandy"
		* strings is a package of GoLang you need to import it top using firstbracket
		*/

	}

	fmt.Printf("The firstname of user who booked tickets : %v \n", firstNames);

	if remainingTickets == 0{
	fmt.Println("All tickets are sold out.");
	break;

	}

	}

	

}