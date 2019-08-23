function MarkPercentages() {

    function setPassRate(name, percent) {

        
        if (name === "") {
            return "You need to enter your name!";
        }
        if (percent === undefined || percent === "") {
            return "You need to add your percentage!";
        }

       
        if (percent >= 50) {
            return name + ", Great, you Passed!";
        }
        if (percent < 50) {
            return name + ", You Failed! Bettter luck next time.";
        }
        else if(percent === 50){
            return "Yey wena, " + name + " watchout! You should pull those socks up"
        }
        
        
    }

    return {
        setPassRate
    }
}