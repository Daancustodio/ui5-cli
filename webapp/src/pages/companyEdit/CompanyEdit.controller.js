sap.ui.define(
	[
	"ui5/src/app/BaseController",		
	"ui5/model/RestModel",
	], 
	function (BaseController, RestModel) {
		"use strict";

		return BaseController.extend("ui5.src.pages.companyEdit.CompanyEdit", {
			onInit : function(){
				console.log("controllet Inicializado");
			},		

		});
	}
);
