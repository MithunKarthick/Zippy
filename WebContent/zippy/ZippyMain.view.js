sap.ui.jsview("zippy.ZippyMain", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zippy.ZippyMain
	*/ 
	getControllerName : function() {
		return "zippy.ZippyMain";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zippy.ZippyMain
	*/ 
	createContent : function(oController) {
		
		
/***********************************    Head Section       *******************************************/		
		
		var oLogo = new sap.ui.core.Icon({
			size: "30px",
			width: "30px",
			src: "sap-icon://sap-ui5"
			});
		var oTitle = new sap.m.Text({text: "Zippy"}).addStyleClass("title");
		var oSubTitle = new sap.m.Text({text: "A simple movie database"}).addStyleClass("subTitle");
		var oSearch = new sap.m.SearchField({
			width : "240px",
			placeholder : "Type any movie name...",
			search: [ oController.searchMovie ]
		});
		
		var oHeader = new sap.tnt.ToolHeader({
			content: [
				oLogo,
				oTitle,
				new sap.m.ToolbarSpacer(),
				oSubTitle,
				new sap.m.ToolbarSpacer(),
				oSearch
			]
		});
		
/***********************************    Body Section        *******************************************/
		
		var oLabelForYear        = new sap.m.Label({ text: "Year", design: "Bold", width: "100px"});
		var oTextYear			 = new sap.m.Label("idYear",{text: "{/Year}"});
		
		var oLabelForReleased    = new sap.m.Label({ text: "Released on", design: "Bold", width: "100px"});
		var oTextReleased		 = new sap.m.Label("idReleased",{text: "{/Released}"});
		
		var oLabelForGenre       = new sap.m.Label({ text: "Genre", design: "Bold", width: "100px"});
		var oTextGenre			 = new sap.m.Label("idGenre",{text: "{/Genre}"});
		
		var oLabelForDirector    = new sap.m.Label({ text: "Director(s)", design: "Bold", width: "100px"});
		var oTextDirector		 = new sap.m.Label("idDirector",{ wrapping: true, text: "{/Director}"});
		
		var oLabelForActor       = new sap.m.Label({ text: "Actor(s)", design: "Bold", width: "100px"});
		var oTextActor			 = new sap.m.Label("idActor",{ wrapping: true, text: "{/Actors}"});
		
		var oLabelForWriter      = new sap.m.Label({ text: "Writer(s)", design: "Bold", width: "100px"});
		var oTextWriter			 = new sap.m.Label("idWriter",{ wrapping: true, text: "{/Writer}"});
		
		var oLabelForProduction  = new sap.m.Label({ text: "Production", design: "Bold", width: "100px"});
		var oTextProduction		 = new sap.m.Label("idProduction",{ wrapping: true, text: "{/Production}"});
		
		var oLabelForPlot 	     = new sap.m.Label({ text: "Plot", design: "Bold", width: "100px"});
		var oTextPlot  			 = new sap.m.Label("idPlotText",{ wrapping: true, text: "{/Plot}"});
		
		var oImage = new sap.m.Image({
			src: "{/Poster}",
			width: "285px",
			height: "380px",
		}).addStyleClass("poster");
		
		var oYear = new sap.m.HBox({items:[ oLabelForYear, oTextYear]}).addStyleClass("detail");
		var oReleased = new sap.m.HBox({items:[ oLabelForReleased, oTextReleased]}).addStyleClass("detail");
		var oGenre = new sap.m.HBox({items:[ oLabelForGenre, oTextGenre]}).addStyleClass("detail");
		var oDirector = new sap.m.HBox({items:[ oLabelForDirector, oTextDirector]}).addStyleClass("detail");
		var oActor = new sap.m.HBox({items:[ oLabelForActor, oTextActor]}).addStyleClass("detail");
		var oWriter = new sap.m.HBox({items:[ oLabelForWriter, oTextWriter]}).addStyleClass("detail");
		var oProduction = new sap.m.HBox({items:[ oLabelForProduction, oTextProduction]}).addStyleClass("detail");
		var oPlot = new sap.m.HBox({items:[ oLabelForPlot, oTextPlot]}).addStyleClass("detail");
		
		var oDetails = new sap.m.VBox({
			items: [
				oYear, oReleased, oGenre, oDirector, oActor, oWriter, oProduction, oPlot
			]
		});
		
		var oPanel = new sap.m.Panel({
			height: "95%",
			headerText: "{/Title}",
			content: [
				oDetails
			]
		});
		
		var oHBox = new sap.m.HBox("idMain",{ items: [ oImage, oPanel ]}).addStyleClass("main");
		
		var oFirstPage = new sap.m.Text("idFirst",{
			text: "Type any Movie name in the search box to get the details of the Movie."
			}).addStyleClass("first");
		
		
		
/***********************************    Footer Section      *******************************************/
		
		var oCopyIcon = new sap.ui.core.Icon({src: "sap-icon://initiative"});
		var oCopyText = new sap.m.Text({
			text: "theMyth",
			width: "100px"
		});
		var oFooter = new sap.m.Toolbar({
			content: [
				new sap.m.ToolbarSpacer(),
				oCopyIcon,
				oCopyText
			]
		});
		
/***********************************    Content Section     *******************************************/		
				
 		var oPage =  new sap.m.Page({
 			customHeader: [ oHeader ],
			content: [ oFirstPage, oHBox ],
			footer: [ oFooter ]
		});
 		
 		return oPage;
	}
	
});
/******************************************************************************************************/