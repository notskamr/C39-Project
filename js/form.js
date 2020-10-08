class Form{
    constructor(){
       this.inputText = createElement('h2')
       this.errorText = createElement('h2')
       this.input = createInput(" ", 'search');
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h1');
       this.reset = createButton('Reset');
    }

    inputCheck(inputValue) {
        inputValue == inputValue.toString()
        if(typeof inputValue == 'string' && inputValue != " " ) {
            this.button.mousePressed(() => {
                this.input.hide();
                this.button.hide()
                this.inputText.hide();
                player.name = this.input.value();
                playerCount += 1;
                player.index = playerCount;
                player.update();
                player.updateCount(playerCount);
                this.greeting.html("Hello " + player.name)
                this.greeting.position(400,250);
                this.greeting.style('color', 'white');
                this.greeting.style('font-size', '100px');
            });

        
            
        }

        else {
            this.errorText.position(550,500)
            this.errorText.html("Not a valid name!");
        }
    }
    
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.inputText.hide()
    }
    display() {

        
        this.inputText.position(550,300)
        
        this.title.html("SYNTHWAVE");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
       
        this.inputText.html("Enter a name!");
        

        this.input.position(550,400);
        this.inputText.style('color', 'lime');
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

       inputCheck('input')

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        });

    }
}