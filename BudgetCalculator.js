var budgetController = (function () {})();

var UIController = (function () {})();

var controller = (function (budgetCtrl, UICtrl) {
	document.querySelector(".add--btn").addEventListener("click", function () {});

	document
		.querySelector(".add--btn")
		.addEventListener("keypress", function (event) {
			if (event.keycode === 13 || event.which === 13) {
			}
		});
})(budgetController, UIController);
