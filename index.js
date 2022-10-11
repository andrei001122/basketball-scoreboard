 // home score
   let homeScore = document.getElementById("home-score")
   let sum = 0
    
    
    function onePointH() {
        sum +=1
        homeScore.textContent = sum
    }
     function twoPointH() {
        sum +=2
        homeScore.textContent = sum
    }
     function treePointH() {
        sum +=3
        homeScore.textContent = sum
        }
        // guest score
        
        let guestScore = document.getElementById("guest-score")
        let count = 0
    
     function onePointG() {
        count +=1
        guestScore.textContent = count
    }
     function twoPointG() {
        count +=2
        guestScore.textContent = count
    }
     function treePointG() {
        count +=3
        guestScore.textContent = count
    }
    // new game
    function newGame() {
        homeScore.textContent = 0
        guestScore.textContent = 0
        sum = 0
        count = 0
    }