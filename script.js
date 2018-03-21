// TITLE
"use strict";

// Variables
let numBanana = 0;
let numGreenShell = 0;
let numStar = 0;
let numGoldMush = 0;
let numBulletBill = 0;
let pos = $("#position").val();

// Event Listeners
$("#itemBoxGif").click(rollItemBox);
$("#hundredTimes").click(rollHundred);
$("#fiveBulletBill").click(rollBill);

// Functions
function rollItemBox() {
	let randNum = Math.random();
	if (pos <= 6) {
		if (randNum < 0.45) {
			numBanana++;
			$("#numBananas").html(numBanana);
		} else if (randNum < 0.80) {
			numGreenShell++;
			$("#numGreenShells").html(numGreenShell);
		} else if (randNum < 0.95) {
			numStar++;
			$("#numStars").html(numStar);
		} else if (randNum < 0.99) {
			numGoldMush++;
			$("#numGMushrooms").html(numGoldMush);
		} else {
			numBulletBill++;
			$("#numBulletBills").html(numBulletBill);
		}
	} else {
		if (randNum < 0.05) {
			numBanana++;
			$("#numBananas").html(numBanana);
		} else if (randNum < 0.1) {
			numGreenShell++;
			$("#numGreenShells").html(numGreenShell);
		} else if (randNum < 0.35) {
			numStar++;
			$("#numStars").html(numStar);
		} else if (randNum < 0.7) {
			numGoldMush++;
			$("#numGMushrooms").html(numGoldMush);
		} else {
			numBulletBill++;
			$("#numBulletBills").html(numBulletBill);
		}
	}

	$().playSound("sounds/ItemBoxSound.mp3")
}

function rollHundred() {
	for (let n = 0; n < 100; n++) {
		let randNum = Math.random();
		console.log(randNum);

		if (pos <= 6) {
			if (randNum < 0.45) {
				numBanana++;
				$("#numBananas").html(numBanana);
			} else if (randNum < 0.80) {
				numGreenShell++;
				$("#numGreenShells").html(numGreenShell);
			} else if (randNum < 0.95) {
				numStar++;
				$("#numStars").html(numStar);
			} else if (randNum < 0.99) {
				numGoldMush++;
				$("#numGMushrooms").html(numGoldMush);
			} else {
				numBulletBill++;
				$("#numBulletBills").html(numBulletBill);
			}
		} else {
			if (randNum < 0.05) {
				numBanana++;
				$("#numBananas").html(numBanana);
			} else if (randNum < 0.1) {
				numGreenShell++;
				$("#numGreenShells").html(numGreenShell);
			} else if (randNum < 0.35) {
				numStar++;
				$("#numStars").html(numStar);
			} else if (randNum < 0.7) {
				numGoldMush++;
				$("#numGMushrooms").html(numGoldMush);
			} else {
				numBulletBill++;
				$("#numBulletBills").html(numBulletBill);
			}
		}
	}
}

function rollBill() {
	while (numBulletBill <= 4) {
		let randNum = Math.random();
		console.log(randNum);

		if (pos <= 6) {
			if (randNum < 0.45) {
				numBanana++;
				$("#numBananas").html(numBanana);
			} else if (randNum < 0.80) {
				numGreenShell++;
				$("#numGreenShells").html(numGreenShell);
			} else if (randNum < 0.95) {
				numStar++;
				$("#numStars").html(numStar);
			} else if (randNum < 0.99) {
				numGoldMush++;
				$("#numGMushrooms").html(numGoldMush);
			} else {
				numBulletBill++;
				$("#numBulletBills").html(numBulletBill);
			}
		} else {
			if (randNum < 0.05) {
				numBanana++;
				$("#numBananas").html(numBanana);
			} else if (randNum < 0.1) {
				numGreenShell++;
				$("#numGreenShells").html(numGreenShell);
			} else if (randNum < 0.35) {
				numStar++;
				$("#numStars").html(numStar);
			} else if (randNum < 0.7) {
				numGoldMush++;
				$("#numGMushrooms").html(numGoldMush);
			} else {
				numBulletBill++;
				$("#numBulletBills").html(numBulletBill);
			}
		}
	}
}
