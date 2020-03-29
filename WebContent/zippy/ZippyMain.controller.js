sap.ui.controller("zippy.ZippyMain", {

	/**
	* Called when a controller is instantiated and its View controls (if available) are already created.
	* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	* @memberOf moviesearch.MSView
	*/
		onInit: function() {
			
			sap.ui.getCore().byId("idMain").setVisible(false);
			sap.ui.getCore().byId("idFirst").setVisible(true);
		},
		
		searchMovie: function(oEvt){
						
			var sMovie = oEvt.getParameters().query;
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData( "http://www.omdbapi.com/?t=" + sMovie + "&apikey=44aece0c", "", false );
			sap.ui.getCore().setModel(oModel);
			sap.ui.getCore().byId("idMain").setVisible(true);
			sap.ui.getCore().byId("idFirst").setVisible(false);

		},
		
	/**
	* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	* (NOT before the first rendering! onInit() is used for that one!).
	* @memberOf moviesearch.MSView
	*/
//		onBeforeRendering: function() {
	//
//		},

	/**
	* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	* This hook is the same one that SAPUI5 controls get after being rendered.
	* @memberOf moviesearch.MSView
	*/
//		onAfterRendering: function() {
	//
//		},

	/**
	* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	* @memberOf moviesearch.MSView
	*/
//		onExit: function() {
	//
//		}

	});