

var vrvToolkit = new verovio.toolkit();
var page = 1;
var zoom = 40;
var pageHeight = 2970;
var pageWidth = 2100;
/* the default xslt to load */
let $xslToDisplay = "../xslt/parts.xsl";

//////////////////////////////////////////////
/* Variables for selecting a <choice> child */
//////////////////////////////////////////////
var choices = {
};
var choiceXPathQueries =[];
var choiceId = "";
var voice = 3;
var id = "m48_d1e53631";


function setOptions() {
	pageHeight = $(document).height() * 70 / zoom;
	pageWidth = $(window).width() * 90 / zoom;
	options = {
		pageHeight: pageHeight,
		pageWidth: pageWidth,
		scale: zoom,
		adjustPageHeight: 1,
		ignoreLayout: 1,
		choiceXPathQueries: choiceXPathQueries
	};
	vrvToolkit.setOptions(options);
}

function loadData(data) {
	setOptions();
	vrvToolkit.loadData(data);
	var elementPage = vrvToolkit.getPageWithElement(id);
	if (elementPage == 0) {
		alert("This measure is: 1) out of range; 2) not avaiable in the 'part(s)' mode. (TIP: For better behavior reload the page with F5.)");
	} else {
		page = elementPage;
	}
	
	loadPage();
}

function loadPage() {
	////////////////////////////////////////////////////
	/* Reload the page with the choice if we made one */
	////////////////////////////////////////////////////
	if (choiceId != "") {
		var elementPage = vrvToolkit.getPageWithElement(choiceId);
		if (elementPage == 0) console.log("ID not found"); else page = elementPage;
		choiceId = "";
	}
	
	svg = vrvToolkit.renderPage(page, {
	});
	$("#choice_overlay").hide();
	$("#svg_output").html(svg);
	
	/////////////////////////////////////////////////////
	/* Highlights the origin  */
	/////////////////////////////////////////////////////
	$(".orig").attr("fill", "#0099ff").attr("stroke", "#0099ff");
	$(".reg").attr("fill", "#009933").attr("stroke", "#009933");
	
	///////////////////////////////////////////////
	/* Bind a click event on all choice children */
	///////////////////////////////////////////////
	$(".orig, .reg").each(function () {
		///////////////////////////////////////////////////////////
		/* Make the bounding box clickable (works on Opera only )*/
		///////////////////////////////////////////////////////////
		$(this).attr("pointer-events", "bounding-box");
		$(this).click(function (event) {
			/////////////////////////////////////////////////////////////////////////////
			/* Create a link for each alternative sibling of the selected choice child */
			/////////////////////////////////////////////////////////////////////////////
			links = "";
			$(this).siblings().each(function () {
				/////////////////////////////////////////////////////////////////
				/* Display the @label for the link but it can be anything else */
				/////////////////////////////////////////////////////////////////
				var attr = vrvToolkit.getElementAttr($(this).attr("id"));
				if (attr.label) {
					links += '<p><a href="javascript:choose(\'' + $(this).parent().attr("id") + '\', \'' + $(this).attr("id") + '\')">' + attr.label + "</a></p>";
				}
			});
			//////////////////////
			/* Show the overlay */
			//////////////////////
			$("#choice_overlay").html(links);
			$("#choice_overlay").attr("style", "left: " + event.pageX + "px;" + "top: " + event.pageY + "px;").show();
		});
	});
	
	$(".dynam").each(function (i) {
		var attr = vrvToolkit.getElementAttr($(this).attr("id"));
		if (attr.label == "tutti") {
			$(this).attr("fill", "#a8a8a8").attr("stroke", "#a8a8a8");
		}
	});
	
	$(".mRest").each(function (i) {
		var attr = vrvToolkit.getElementAttr($(this).attr("id"));
		if (attr.label == "tutti") {
			$(this).attr("fill", "#a8a8a8").attr("stroke", "#a8a8a8");
		}
	});
	
	$("body").removeClass("loading");
};

////////////////////////////////////////////
/* A function for choosing a choice child */
////////////////////////////////////////////
function choose(choice, child) {
	//////////////////////////////////////////////////////
	/* Keep track of the selected child for each choice */
	//////////////////////////////////////////////////////
	choices[choice] = child;
	choiceXPathQueries =[];
	//////////////////////////////////////
	/* Make each of them an xpath query */
	//////////////////////////////////////
	for (key in choices) {
		choiceXPathQueries.push("./*[@xml:id='" + choices[key] + "']")
	}
	choiceId = choice;
	loadFile();
}

function loadFile() {
	$("body").addClass("loading");
	
	setTimeout(function () {
		const file = "../mei/mozart_clarinetConcerto.xml";
		var xsl = Saxon.requestXML($xslToDisplay);
		var xml = Saxon.requestXML(file);
		var proc = Saxon.newXSLT20Processor(xsl);
		proc.setParameter(null, "voice", voice);
		loadData(Saxon.serializeXML(proc.transformToDocument(xml)));
	},
	50);
}

function initOnClickForVersionBtns() {
	$('#btn_soprano').click(function () {
		voice = 1;
		loadFile();
	});
	
	$('#btn_basset').click(function () {
		voice = 2;
		loadFile();
	});
	
	$('#btn_compare').click(function () {
		voice = 3;
		loadFile();
	});
}


///////////////////
/*Search measure*/
//////////////////
$('form').on('submit', function (event) {
	
	// Prevent the page from reloading
	event.preventDefault();
	
	
	var $input = $(this).find('input');
	var input = $input.val();
	var measuresIDslist =[ 'm1_d1e425', 'm2_d1e1285', 'm3_d1e1981', 'm4_d1e2433', 'm5_d1e2875', 'm6_d1e3451', 'm7_d1e4216', 'm8_d1e4919', 'm9_d1e6001', 'm10_d1e6843', 'm11_d1e8090', 'm12_d1e8797', 'm13_d1e9580', 'm14_d1e11079', 'm15_d1e12548', 'm16_d1e13819', 'm17_d1e15298', 'm18_d1e16653', 'm19_d1e18113', 'm20_d1e19460', 'm21_d1e21191', 'm22_d1e22847', 'm23_d1e24613', 'm24_d1e27096', 'm25_d1e27947', 'm26_d1e28151', 'm27_d1e28720', 'm28_d1e29405', 'm29_d1e30251', 'm30_d1e30917', 'm31_d1e31688', 'm32_d1e32493', 'm33_d1e33378', 'm34_d1e34324', 'm35_d1e35201', 'm36_d1e37287', 'm37_d1e38116', 'm38_d1e38743', 'm39_d1e39366', 'm40_d1e40846', 'm41_d1e42481', 'm42_d1e44279', 'm43_d1e46220', 'm44_d1e48202', 'm45_d1e49891', 'm46_d1e50864', 'm47_d1e51781', 'm48_d1e53631', 'm49_d1e55303', 'm50_d1e55910', 'm51_d1e56499', 'm52_d1e56900', 'm53_d1e57470', 'm54_d1e58475', 'm55_d1e59575', 'm56_d1e61810', 'm57_d1e62649', 'm58_d1e63019', 'm59_d1e63411', 'm60_d1e63879', 'm61_d1e64217', 'm62_d1e64693', 'm63_d1e65012', 'm64_d1e65594', 'm65_d1e66500', 'm66_d1e66987', 'm67_d1e67964', 'm68_d1e68683', 'm69_d1e69226', 'm70_d1e69731', 'm71_d1e70206', 'm72_d1e70592', 'm73_d1e70879', 'm74_d1e71855', 'm75_d1e72660', 'm76_d1e74592', 'm77_d1e75099', 'm78_d1e75408', 'm79_d1e75863', 'm80_d1e76232', 'm81_d1e76917', 'm82_d1e77488', 'm83_d1e78135', 'm84_d1e78710', 'm85_d1e79089', 'm86_d1e79457', 'm87_d1e79813', 'm88_d1e80183', 'm89_d1e80634', 'm90_d1e81010', 'm91_d1e81382', 'm92_d1e81663', 'm93_d1e82021', 'm94_d1e82565', 'm95_d1e83162', 'm96_d1e83880', 'm97_d1e84585', 'm98_d1e85351', 'm99_d1e87009', 'm100_d1e88561', 'm101_d1e89105', 'm102_d1e89427', 'm103_d1e89843', 'm104_d1e90538', 'm105_d1e91263', 'm106_d1e91840', 'm107_d1e92536', 'm108_d1e93114', 'm109_d1e93956', 'm110_d1e94729', 'm111_d1e95514', 'm112_d1e96013', 'm113_d1e96570', 'm114_d1e96965', 'm115_d1e97319', 'm116_d1e97748', 'm117_d1e98081', 'm118_d1e98460', 'm119_d1e98981', 'm120_d1e99362', 'm121_d1e99695', 'm122_d1e100074', 'm123_d1e100499', 'm124_d1e101040', 'm125_d1e101519', 'm126_d1e101986', 'm127_d1e102772', 'm128_d1e103064', 'm129_d1e103361', 'm130_d1e103878', 'm131_d1e104456', 'm132_d1e105127', 'm133_d1e105622', 'm134_d1e106203', 'm135_d1e107160', 'm136_d1e108159', 'm137_d1e109234', 'm138_d1e110414', 'm139_d1e111143', 'm140_d1e111900', 'm141_d1e112572', 'm142_d1e113166', 'm143_d1e113626', 'm144_d1e114588', 'm145_d1e115639', 'm146_d1e116249', 'm147_d1e116905', 'm148_d1e117563', 'm149_d1e118250', 'm150_d1e119029', 'm151_d1e119575', 'm152_d1e120217', 'm153_d1e121162', 'm154_d1e121582', 'm155_d1e122865', 'm156_d1e124355', 'm157_d1e125810', 'm158_d1e127245', 'm159_d1e128751', 'm160_d1e130508', 'm161_d1e132233', 'm162_d1e134176', 'm163_d1e135366', 'm164_d1e137072', 'm165_d1e137635', 'm166_d1e138230', 'm167_d1e138631', 'm168_d1e139218', 'm169_d1e140329', 'm170_d1e141345', 'm171_d1e143450', 'm172_d1e144297', 'm173_d1e144913', 'm174_d1e145418', 'm175_d1e145816', 'm176_d1e146285', 'm177_d1e146788', 'm178_d1e147292', 'm179_d1e147777', 'm180_d1e148246', 'm181_d1e148803', 'm182_d1e149422', 'm183_d1e150070', 'm184_d1e150689', 'm185_d1e151266', 'm186_d1e151842', 'm187_d1e152515', 'm188_d1e152813', 'm189_d1e153426', 'm190_d1e154076', 'm191_d1e154448', 'm192_d1e154846', 'm193_d1e156096', 'm194_d1e156822', 'm195_d1e157267', 'm196_d1e157699', 'm197_d1e157976', 'm198_d1e158659', 'm199_d1e159190', 'm200_d1e159799', 'm201_d1e160368', 'm202_d1e160720', 'm203_d1e161088', 'm204_d1e161440', 'm205_d1e161912', 'm206_d1e162279', 'm207_d1e162757', 'm208_d1e163371', 'm209_d1e163864', 'm210_d1e164548', 'm211_d1e165173', 'm212_d1e165823', 'm213_d1e166556', 'm214_d1e167244', 'm215_d1e167824', 'm216_d1e169269', 'm217_d1e169646', 'm218_d1e169952', 'm219_d1e170235', 'm220_d1e170627', 'm221_d1e171161', 'm222_d1e171693', 'm223_d1e172229', 'm224_d1e172680', 'm225_d1e173139', 'm226_d1e173735', 'm227_d1e174544', 'm228_d1e176349', 'm229_d1e178267', 'm230_d1e179186', 'm231_d1e179948', 'm232_d1e180725', 'm233_d1e181469', 'm234_d1e183408', 'm235_d1e185152', 'm236_d1e185972', 'm237_d1e186700', 'm238_d1e187544', 'm239_d1e188288', 'm240_d1e189751', 'm241_d1e191157', 'm242_d1e192735', 'm243_d1e194191', 'm244_d1e195829', 'm245_d1e197443', 'm246_d1e199226', 'm247_d1e200833', 'm248_d1e202984', 'm249_d1e203670', 'm250_d1e204264', 'm251_d1e205030', 'm252_d1e205517', 'm253_d1e206004', 'm254_d1e206369', 'm255_d1e206750', 'm256_d1e207226', 'm257_d1e207545', 'm258_d1e208128', 'm259_d1e209036', 'm260_d1e209523', 'm261_d1e210489', 'm262_d1e211209', 'm263_d1e211752', 'm264_d1e212257', 'm265_d1e212732', 'm266_d1e213121', 'm267_d1e213408', 'm268_d1e214384', 'm269_d1e215188', 'm270_d1e217097', 'm271_d1e217604', 'm272_d1e217913', 'm273_d1e218350', 'm274_d1e218674', 'm275_d1e219084', 'm276_d1e219418', 'm277_d1e219845', 'm278_d1e220177', 'm279_d1e220503', 'm280_d1e220791', 'm281_d1e221452', 'm282_d1e221730', 'm283_d1e222228', 'm284_d1e223028', 'm285_d1e223712', 'm286_d1e224475', 'm287_d1e226000', 'm288_d1e227562', 'm289_d1e228044', 'm290_d1e228364', 'm291_d1e228743', 'm292_d1e229385', 'm293_d1e230221', 'm294_d1e230774', 'm295_d1e231333', 'm296_d1e231844', 'm297_d1e232640', 'm298_d1e233506', 'm299_d1e234243', 'm300_d1e234786', 'm301_d1e235223', 'm302_d1e235715', 'm303_d1e236067', 'm304_d1e236560', 'm305_d1e237050', 'm306_d1e237585', 'm307_d1e238130', 'm308_d1e238790', 'm309_d1e239270', 'm310_d1e239716', 'm311_d1e240116', 'm312_d1e240756', 'm313_d1e241318', 'm314_d1e241773', 'm315_d1e242593', 'm316_d1e242876', 'm317_d1e243069', 'm318_d1e243575', 'm319_d1e244239', 'm320_d1e244846', 'm321_d1e245295', 'm322_d1e246017', 'm323_d1e246897', 'm324_d1e247950', 'm325_d1e248987', 'm326_d1e250097', 'm327_d1e250957', 'm328_d1e251752', 'm329_d1e252491', 'm330_d1e253003', 'm331_d1e253560', 'm332_d1e254520', 'm333_d1e255743', 'm334_d1e257339', 'm335_d1e258093', 'm336_d1e258708', 'm337_d1e259362', 'm338_d1e260344', 'm339_d1e261146', 'm340_d1e261982', 'm341_d1e262929', 'm342_d1e263850', 'm343_d1e265194', 'm344_d1e266603', 'm345_d1e268055', 'm346_d1e269515', 'm347_d1e270861', 'm348_d1e272449', 'm349_d1e273524', 'm350_d1e274472', 'm351_d1e276314', 'm352_d1e277865', 'm353_d1e278472', 'm354_d1e279153', 'm355_d1e279554', 'm356_d1e280123', 'm357_d1e281125', 'm358_d1e282222', 'm359_d1e284499'];
	
	id = measuresIDslist[input -1];
	
	run(loadFile, selectMeasure);
	
	loadFile();
	setTimeout(function () {
		selectMeasure();
	},
	60);
});

////////////////////////////////////////////
/* Inserts a rect to SVG to show a selected measure */
////////////////////////////////////////////
function selectMeasure() {
	
	/*	create rectangle*/
	var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
	/*	find coordinates of the searched measure*/
	var measure = document.getElementById(id);
	var measureCoord = measure.getBBox();
	
	/*	set the attributes to the rectangle*/
	rect.setAttribute('x', measureCoord.x);
	rect.setAttribute('y', measureCoord.y);
	rect.setAttribute('width', measureCoord.width);
	rect.setAttribute('height', measureCoord.height);
	rect.setAttribute('fill', 'rgba(179, 255, 179, 0.4)');
	
	/*	append the rectangle before the searched measure*/;
	var parentDiv = document.getElementById(id).parentNode;
	parentDiv.insertBefore(rect, measure);
	
};


function findSection() {
	id = document.getElementById('sections').value;
	loadFile();
};

function initOnClickForPageNavBtns() {
	$('#btn_first_page').click(function () {
		firstPage();
	});
	$('#btn_next_page').click(function () {
		nextPage();
	});
	$('#btn_prev_page').click(function () {
		prevPage();
	});
	$('#btn_last_page').click(function () {
		lastPage();
	});
	
	$('#btn_page_zoomin').click(function () {
		zoomIn();
	});
	
	$('#btn_page_zoomout').click(function () {
		zoomOut();
	});
}

function switchToParts() {
	$("#div_sections").hide();
	$xslToDisplay = "../xslt/parts.xsl";
	id = "m48_d1e53631";
	loadFile();
}

function switchToScore() {
	$xslToDisplay = "../xslt/score.xsl";
	$("#div_sections").show();
	id = "m1_d1e425";
	loadFile();
}

$(document).ready(function () {
	
	initOnClickForVersionBtns();
	initOnClickForPageNavBtns();
	
	/*For nav active button highlight*/
	$('ul.navbar-right > li').click(function (e) {
		// e.preventDefault();
		$('ul.navbar-right > li').removeClass('active');
		$(this).addClass('active');
	});
	$('div.btn-group > button').click(function (e) {
		// e.preventDefault();
		$('div.btn-group > button').removeClass('active');
		$(this).addClass('active');
	});
	
	$(window).keyup(function (event) {
		// Process navigation an zoom basic events
		processBasicEvents(event);
		
		/////////////////////////////////////////////
		/* Hide the overlay on ESC of reset on 'r' */
		/////////////////////////////////////////////
		if (event.keyCode == 27) {
			$("#choice_overlay").hide()
		} else if (event.keyCode == 82) {
			$("#choice_overlay").hide()
			choices = {
			};
			choiceXPathQueries =[];
			loadFile();
		}
	});
	
	$(window).resize(function () {
		applyZoom();
	});
});

var onSaxonLoad = function () {
	loadFile();
};