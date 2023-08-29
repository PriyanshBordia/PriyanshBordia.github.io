document.addEventListener("DOMContentLoaded", () => {
	// console.log("DOM Loaded..!!");
	const tabs = document.querySelector(".experience__tabs");

	tabs.addEventListener("click", (e) => handleClick(e));

	function handleClick(e) {
		const target = e.target;
		const tabNum = target.dataset.tab;
		const activeTab = document.querySelector(".experience__tabs .active");
		const activeContent = document.querySelector(
			".experience__content .visible"
		);
		const currentContent = document.querySelector(
			`.experience__content__section[data-tab='${tabNum}']`
		);

		if (!tabNum) {
			return;
		}

		activeTab.classList.remove("active");
		target.classList.add("active");
		activeContent.classList.remove("visible");
		currentContent.classList.add("visible");
	}
});