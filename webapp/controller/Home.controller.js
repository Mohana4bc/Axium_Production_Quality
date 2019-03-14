sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller, MessageBox) {
	"use strict";

	return Controller.extend("com.axium.Axium.controller.Home", {
		onPressFG: function (e) {
			MessageBox.information("Coming Soon...");
			// var that = this;
			// var data = that.getView().getModel("oListHU").getData();
			// that.data = [];
			// that.getView().getModel("oListHU").setData(that.data);
			// that.getView().getModel("oListHU").refresh(true);
			// var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// oRouter.navTo("ScanHU", {});
		},

		// onPressRM : function(e){
		// 	  var that = this;
		//       var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		//         oRouter.navTo("RMPickReturn",{});
		// },
		// onPick: function (e) {
		// 	var that = this;
		// 	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		// 	oRouter.navTo("Pick", {});
		// },
		// onReturn: function (e) {
		// 	var that = this;
		// 	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		// 	oRouter.navTo("Return", {});
		// },
		// onRMPutAway: function (e) {
		// 	var that = this;
		// 	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		// 	oRouter.navTo("PutAway", {});
		// },

		onPick: function (e) {
			var that = this;
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Pick", {});
		},
		onReturn: function (e) {
			var that = this;
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Return", {});
		},
		onRMPutAway: function (e) {
			var that = this;
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("PutAway", {});
		},

		/*Stock Overview*/
		onPressPlantScreen: function (e) {
			var that = this;
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("PlantScreen", {});
		},

		onPressWarehouseScreen: function (e) {
			var that = this;
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("WarehouseScreen", {});
		},
		onPressFGPick: function (e) {
			var that = this;
			var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
			oRouter.navTo("ScanDelNo", {});
		},
		onPressBinToBin: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("BinToBin", {});
		},
		onInventoryPress: function (e) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("InventoryPlntStrloc", {});
		}

	});
});