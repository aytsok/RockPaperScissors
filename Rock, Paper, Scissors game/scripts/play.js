jQuery('document').ready(function() {
	function clearBoard() {
		// hide computer choice
		$('#ComputerButtonRock').hide();
		$('#ComputerButtonPaper').hide();
		$('#ComputerButtonScissors').hide();
		
		// hide user messages
		$('#YouWon').hide();
		$('#YouLoose').hide();
		$('#Draw').hide();
		
		// show user choice
		$('#UserButtonRock').show();
		$('#UserButtonPaper').show();
		$('#UserButtonScissors').show();
		
		// hide Rules
		$('#divRules').hide();
	}
	
	if (!localStorage.getItem("iScore")) {
		localStorage.setItem("iScore", "0");
	}
	
	let iScore = 1 * localStorage.getItem("iScore");
	
	// set scores
	$('#ScoreVal').text(iScore);
	
	// handle close buttons click
	$('.Close_Button').click(function(){
		clearBoard();
	});
	
	clearBoard();
	
	// handle click on Rock
	$("#UserButtonRock").click(function(){
		let iComputerChoise = Math.floor((Math.random() * 3) + 1);
		
		$('#UserButtonPaper').hide();
		$('#UserButtonScissors').hide();

		switch (iComputerChoise) {
			case 1:
				$('#ComputerButtonRock').show();
				$('#Draw').show();
				break;
				
			case 2:
				$('#ComputerButtonPaper').show();
				iScore--;
				$('#ScoreVal').text(iScore);
				$('#YouLoose').show();
				break;
				
			case 3:
				$('#ComputerButtonScissors').show();
				iScore++;
				$('#ScoreVal').text(iScore);
				$('#YouWon').show();
				break;
		}
		
		localStorage.setItem("iScore", iScore);
	});
	
	// handle click on Paper
	$("#UserButtonPaper").click(function(){
		let iComputerChoise = Math.floor((Math.random() * 3) + 1);
		
		$('#UserButtonRock').hide();
		$('#UserButtonScissors').hide();

		switch (iComputerChoise) {
			case 1:
				$('#ComputerButtonRock').show();
				iScore++;
				$('#ScoreVal').text(iScore);
				$('#YouWon').show();
				break;
				
			case 2:
				$('#ComputerButtonPaper').show();
				$('#Draw').show();
				break;
				
			case 3:
				$('#ComputerButtonScissors').show();
				iScore--;
				$('#ScoreVal').text(iScore);
				$('#YouLoose').show();
				break;
		}
		
		localStorage.setItem("iScore", iScore);
	});
	
	// handle click on Scissors
	$("#UserButtonScissors").click(function(){
		let iComputerChoise = Math.floor((Math.random() * 3) + 1);
		
		$('#UserButtonPaper').hide();
		$('#UserButtonRock').hide();

		switch (iComputerChoise) {
			case 1:
				$('#ComputerButtonRock').show();
				iScore--;
				$('#ScoreVal').text(iScore);
				('#YouLoose').show();
				break;
				
			case 2:
				$('#ComputerButtonPaper').show();
				iScore++;
				$('#ScoreVal').text(iScore);
				$('#YouWon').show();
				break;
				
			case 3:
				$('#ComputerButtonScissors').show();
				$('#Draw').show();
				break;
		}
		
		localStorage.setItem("iScore", iScore);
	});
	
	// handle click on Rules button
	$("#btnRules").click(function(){
		$('#divRules').show();
	});

	// handle click on Close Rules button
	$("#btnCloseRules").click(function(){
		$('#divRules').hide();
	});

});