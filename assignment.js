//github link:

//program 1 
function kilometerToMeter(kilometer){
    if(kilometer<0){
        return -1;
    }
    else return kilometer*1000;
}

let meter = kilometerToMeter(5);
if(meter == -1) console.log("Distance cann't be negetive");
else console.log(meter);


//program 2

function budgetCalculator(watch, mobile, laptop){
    if(watch < 0 || mobile < 0 || laptop < 0){
        return -1;
    }
    else return ( watch*50 + mobile*100 + laptop*500);
}

let totalBudget = budgetCalculator(1, 1, 1);
if(totalBudget == -1) console.log("Wrong Input");
else console.log(totalBudget);


//program 3

function hotelCost(days){
    if(days < 0) return -1;

    else if(days <=10){
        return days*100;
    }
    else if(days<=20){
        return 1000 + (days-10)*80;
    }
    else return 1800 + (days-20)*50;
}

let totalHotelCost = hotelCost(23);
if(totalHotelCost == -1) console.log("Number of days should not be negetive");
else console.log(totalHotelCost);

//program 4
/* In this problem multiple friends may have the same 
length of name which is max
*/

function megaFriend(friends){

    if(friends.length == 0){
        return -1;
    }
    let maxLength = -1;

    for(let i = 0; i<friends.length; i++){
        if(friends[i].length > maxLength){
            maxLength = friends[i].length;
        }
    }

    let friend = []; /* this will containe names whoever name length is equal to maxLength */

    for(let i = 0; i<friends.length; i++){
        if(friends[i].length == maxLength){
            friend.push(friends[i]);
        }
    }

    return friend;
}

allFriends = ["babar", "hridoy", "mamun", "johir", "AssaduzzamanNur"];
megaFriendName = megaFriend(allFriends);

if(megaFriendName == -1){
    console.log("No friends name in the array");
}
else{
    console.log(megaFriendName);
}