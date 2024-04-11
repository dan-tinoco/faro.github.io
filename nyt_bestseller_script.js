document.addEventListener('DOMContentLoaded', function() {
    var svg = document.getElementById('nyt_bestseller_ai_svg');
    var originalViewBox = svg.viewBox.baseVal;
    var zoomLevel = 1;
    var maxZoomLevel = 1.2;
    var minZoomLevel = 0.5;

    var isPanning = false;
    var startPoint = { x: 0, y: 0 };
    var endPoint = { x: 0, y: 0 };

    svg.addEventListener('wheel', function(e) {
        e.preventDefault();

        var scaleFactor = e.deltaY > 0 ? 0.98 : 1.02;
        var adj_zoomLevel = (scaleFactor === 0.98 && zoomLevel > 0.98) ? 0.98 : 
                    (scaleFactor === 1.02 && zoomLevel < 1.02) ? 1.02 : zoomLevel;
        var newZoomLevel = adj_zoomLevel * scaleFactor;
		
        newZoomLevel = Math.max(Math.min(newZoomLevel, maxZoomLevel), minZoomLevel);

        if (newZoomLevel !== zoomLevel) {
            zoomLevel = newZoomLevel;
            var newWidth = (1920 < originalViewBox.width/zoomLevel) ? 1920 : originalViewBox.width/zoomLevel;
            var newHeight = (1080 < originalViewBox.height/zoomLevel) ? 1080 : originalViewBox.height/zoomLevel;
            var newViewBoxX = originalViewBox.x + (originalViewBox.width - newWidth) / 2;
            var newViewBoxY = originalViewBox.y + (originalViewBox.height - newHeight) / 2;

            svg.setAttribute('viewBox', `${newViewBoxX} ${newViewBoxY} ${newWidth} ${newHeight}`);
        }
    });

// Mouse down event to start panning
    svg.addEventListener('mousedown', function(e) {
        e.preventDefault();
        isPanning = true;
        startPoint = { x: e.clientX, y: e.clientY };
    });

    // Mouse move event to handle panning
    svg.addEventListener('mousemove', function(e) {
        if (!isPanning) return;
        e.preventDefault();

        var dx = (e.clientX - startPoint.x) / zoomLevel;
        var dy = (e.clientY - startPoint.y) / zoomLevel;
        startPoint = { x: e.clientX, y: e.clientY };

        var newViewBoxX = svg.viewBox.baseVal.x - dx;
        var newViewBoxY = svg.viewBox.baseVal.y - dy;

        svg.setAttribute('viewBox', `${newViewBoxX} ${newViewBoxY} ${svg.viewBox.baseVal.width} ${svg.viewBox.baseVal.height}`);
    });

    // Mouse up and mouse leave events to stop panning
    svg.addEventListener('mouseup', function() {
        isPanning = false;
    });
    svg.addEventListener('mouseleave', function() {
        isPanning = false;
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class "cls-44"
    //const elements = document.querySelectorAll('.cls-44');
	const elements = document.querySelectorAll('.cls-44');
    
    // Group the elements by their associations
    const groups = {
        john_galsworthy: [elements[0]].filter(Boolean),
		charles_morgan: [elements[1]].filter(Boolean),
		harvey_allen: [elements[2]].filter(Boolean),
		startk_young: [elements[3]].filter(Boolean),
		robert_briffault: [elements[4]].filter(Boolean),
		margaret_mitchell: [elements[5]].filter(Boolean),
		kenneth_roberts: [elements[6]].filter(Boolean),
		john_steinbeck: [elements[8]].filter(Boolean),
		richard_llewellyn: [elements[9]].filter(Boolean),
		franz_werfel: [elements[11]].filter(Boolean),
		lloyd_douglas: [elements[12]].filter(Boolean),
		lillian_smith: [elements[13]].filter(Boolean),
		frederick_wakeman: [elements[15]].filter(Boolean),
		laura_hobson: [elements[16]].filter(Boolean),
		norman_mailer: [elements[17]].filter(Boolean),
		john_marquand: [elements[18]].filter(Boolean),
		henry_robinson: [elements[19]].filter(Boolean),
		amnemarie_selinko: [elements[22]].filter(Boolean),
		morton_thompson: [elements[23]].filter(Boolean),
		hamilton_basso: [elements[24]].filter(Boolean),
		edwin_oconnor: [elements[25]].filter(Boolean),
		grace_metalious: [elements[26]].filter(Boolean),
		robert_traver: [elements[27]].filter(Boolean),
		katherine_porter: [elements[31]].filter(Boolean),
		morris_west: [elements[32]].filter(Boolean),
		jaqueline_susanne: [elements[35]].filter(Boolean),
		elia_kazan: [elements[36]].filter(Boolean),
		arthur_haily: [elements[37]].filter(Boolean),
		mario_puzo: [elements[38]].filter(Boolean),
		erich_segal: [elements[39]].filter(Boolean),
		mary_stewart: [elements[43]].filter(Boolean),
		gore_vidal: [elements[44]].filter(Boolean),
		colleen_mccullough: [elements[47]].filter(Boolean),
		sidney_sheldon: [elements[48]].filter(Boolean),
		danielle_steel: [elements[57]].filter(Boolean),
		tom_clancy: [elements[58]].filter(Boolean),
		scott_turow: [elements[60]].filter(Boolean),
		jean_auel: [elements[61]].filter(Boolean),
		alexandra_ripley: [elements[62]].filter(Boolean),
		robert_waller: [elements[64]].filter(Boolean),
		joe_klein: [elements[67]].filter(Boolean),
		charles_frazier: [elements[68]].filter(Boolean),
		jk_rownling: [elements[70]].filter(Boolean),
		
		mary_clark: [elements[73]].filter(Boolean),
		james_patterson: [elements[74], elements[85], elements[93], elements[97]].filter(Boolean),
		
		clive_cussler: [elements[75]].filter(Boolean),
		alice_seabold: [elements[76]].filter(Boolean),
		mitch_albom: [elements[80]].filter(Boolean),
		khaled_hosseini: [elements[81]].filter(Boolean),
		stieg_larson: [elements[84]].filter(Boolean),
		charlaine_harris: [elements[86]].filter(Boolean),
		gillian_flynn: [elements[87]].filter(Boolean),
		paula_hawkins: [elements[90]].filter(Boolean),
		kristin_hannah: [elements[96]].filter(Boolean),
		rebecca_yarros: [elements[98]].filter(Boolean),		
		aj_cronin: [elements[7], elements[10], elements[14]].filter(Boolean),
        herman_wouk: [elements[20], elements[21]].filter(Boolean),
        leon_uris: [elements[28], elements[46]].filter(Boolean),
        irving_stone: [elements[30], elements[40]].filter(Boolean),
        john_le_carre: [elements[33], elements[53], elements[59]].filter(Boolean),
        james_michener: [elements[29], elements[34], elements[45], elements[51]].filter(Boolean),
        richard_bach: [elements[41], elements[42]].filter(Boolean),
        robert_ludlum: [elements[49], elements[50], elements[52], elements[54]].filter(Boolean),
        stephen_king: [elements[55], elements[56]].filter(Boolean),
        james_redfield: [elements[65], elements[66]].filter(Boolean),
        delia_owens: [elements[94], elements[95]].filter(Boolean),
        dan_brown: [elements[77], elements[78], elements[79], elements[83], elements[88]].filter(Boolean),
        john_grisham: [elements[63], elements[69], elements[71], elements[72], elements[99], elements[82], elements[89], elements[91], elements[92]].filter(Boolean)
    };

    // Define the function to add or remove the "hover-effect" class
    const toggleHighlight = (group, action) => {
        group.forEach(element => element.classList[action]('hover-effect'));
    };

    // Iterate over each group and apply event listeners
    Object.values(groups).forEach(group => {
        group.forEach(element => {
            element.addEventListener('mouseenter', () => toggleHighlight(group, 'add'));
            element.addEventListener('mouseleave', () => toggleHighlight(group, 'remove'));
        });
    });
});
