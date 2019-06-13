
			class Player {
			constructor(name, hitpoints,energy) {
				this.name = name;
				this.hitpoints = 100;
				this.energy = 100;
			}

			attack(opponent) {
				console.log(this.name + " just hit " + opponent.name + "!");
				opponent.hitpoints -= 10;
				this.energy -=10;
				console.log(opponent.name + " currently has " + opponent.hitpoints + " hitpoints.");
				console.log(this.name + " now has " + this.energy + " energy!");
				hp2input.value =  playerOne.hitpoints;
				energy2input.value = playerOne.energy;
				bossenergyInput.value = boss.energy;
				bosshpInput.value = boss.hitpoints;
			}
			heal(player) {
				player.hitpoints += 5;
				console.log(this.name + " has healed himself! He has " + this.hitpoints + " hitpoints!");
				hp2input.value =  playerOne.hitpoints;
				bosshpInput.value = boss.hitpoints;
			}
			ultimate(opponent) {
				console.log(this.name + " just hit " + opponent.name + " with his ultimate!");
				opponent.hitpoints -= 30;
				this.energy -=30;
				console.log(opponent.name + " currently has " + opponent.hitpoints + " hitpoints.");
				console.log(this.name + " now has " + this.energy + " energy!");
				hp2input.value =  playerOne.hitpoints;
				energy2input.value = playerOne.energy;
				bossenergyInput.value = boss.energy;
				bosshpInput.value = boss.hitpoints;
			}	
		}		
			

		var playerOne = new Player();
		var boss = new Player();
		playerOne.name = "Stefan";
		boss.name = "Boss"
		boss.hitpoints = 150;


		var playerDiv = document.querySelector("#playerDiv");
		var attackButton = document.querySelector("#attackButton");
		var healButton = document.querySelector("#healButton");
		var ultButton = document.querySelector("#ultButton");

		var bossDiv = document.querySelector("#bossDiv");
		var bossAttackButton = document.querySelector("#bossAttackButton");
		var bossHealButton = document.querySelector("#bossHealButton");

		var h3player = document.querySelector("#h3player");
		var h3boss = document.querySelector("#h3boss"); 

		var hpSpan = document.querySelector("#hpSpan");
		var energySpan = document.querySelector("#energySpan");
		var hp = document.querySelector("#hp2input");
		var energy = document.querySelector("#energy2input")
		hp2input.value =  playerOne.hitpoints;
		energy2input.value = playerOne.energy;

		var bosshpSpan = document.querySelector("#bosshpSpan");
		var bossenergySpan = document.querySelector("#bossenergySpan");
		var bossenergyInput = document.querySelector("#bossenergyInput");
		var bosshpInput = document.querySelector("#bosshpInput")
		bosshpInput.value = boss.hitpoints;
		bossenergyInput.value = boss.energy;
		

		attackButton.addEventListener("click", function() {
			if(boss.hitpoints !== 0 && playerOne.hitpoints !== 0) {
			playerDiv.classList.add("gameClass");
			h3player.classList.add("gameClass");
			h3boss.classList.add("gameClassRed");
			bossDiv.classList.add("gameClassRed");
			setInterval(function() {
				playerDiv.classList.remove("gameClass");
				h3player.classList.remove("gameClass");
				h3boss.classList.remove("gameClassRed");
				bossDiv.classList.remove("gameClassRed");
			},1500)

			playerOne.attack(boss);
			playerOne.energy -=10;}

		});	

		healButton.addEventListener("click", function() {
			playerOne.heal(playerOne);

		});

		bossAttackButton.addEventListener("click", function() {
			if(boss.hitpoints !== 0 && playerOne.hitpoints !== 0){
			bossDiv.classList.add("gameClass2");
			bossDiv.style.position = "relative"
			bossDiv.style.left = "105px";
			h3boss.style.position = "relative"
			h3boss.style.left = "105px";
			h3boss.classList.add("gameClass2");
			h3player.classList.add("gameClassRed");
			playerDiv.classList.add("gameClassRed");
			setInterval(function() {
				bossDiv.classList.remove("gameClass2");
				bossDiv.style.left = "505px";
				h3boss.style.left = "505px";
				playerDiv.classList.remove("gameClassRed");
				h3boss.classList.remove("gameClass2");
				h3player.classList.remove("gameClassRed");
			},1000)

			boss.attack(playerOne)	}
			
		})

		bossHealButton.addEventListener("click", function() {
			boss.heal(boss);
		});

		ultButton.addEventListener("click", function() {
			playerDiv.classList.add("gameClassUlt");
			h3player.classList.add("gameClassUlt");
			h3boss.classList.add("gameClassRed");
			bossDiv.classList.add("gameClassRed");
			setInterval(function() {
				playerDiv.classList.remove("gameClassUlt");
				h3player.classList.remove("gameClassUlt");
				h3boss.classList.remove("gameClassRed");
				bossDiv.classList.remove("gameClassRed");
			},1500)
			playerOne.ultimate(boss);	
		});
		
		var resetButton = document.querySelector("#resetGameButton");
		resetButton.addEventListener("click" , function refresh() {
				alert("Game will be reseted!")
                   window .location.reload();
           })