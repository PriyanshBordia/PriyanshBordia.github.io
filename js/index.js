document.addEventListener("DOMContentLoaded", () => {
	// console.log("DOM Loaded..!!");

	const typingEffect = document.querySelector(".main__typingText");
	
	const typingText = [
		"Engineer Software",
		"Develop Software",
		"am a Student",
		"am a Tech Geek",
		"play Football",
	]

	const typingDelay = 100;
	const eraseDelay = 50;
	const newTextDelay = 1000;
	let idx = 0;
	let charIdx = 0;

	type();

	function type() {
		if (charIdx < typingText[idx].length) {
			typingEffect.textContent += typingText[idx].charAt(charIdx);
			charIdx++;

			setTimeout(type, typingDelay);
		} else {
			setTimeout(erase, newTextDelay);
		}
	};

	function erase() {
		if (charIdx > 0) {
			typingEffect.textContent = typingText[idx].substring(0, charIdx - 1);
			charIdx--;
			setTimeout(erase, eraseDelay);
		} else {
			idx++;
			if (idx >= typingText.length) idx = 0;

			setTimeout(type, typingDelay);
		}
	};
});
