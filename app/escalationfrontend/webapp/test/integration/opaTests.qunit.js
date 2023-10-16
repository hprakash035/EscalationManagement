sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/escalation/escalationfrontend/test/integration/FirstJourney',
		'com/escalation/escalationfrontend/test/integration/pages/EscalationsList',
		'com/escalation/escalationfrontend/test/integration/pages/EscalationsObjectPage'
    ],
    function(JourneyRunner, opaJourney, EscalationsList, EscalationsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/escalation/escalationfrontend') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEscalationsList: EscalationsList,
					onTheEscalationsObjectPage: EscalationsObjectPage
                }
            },
            opaJourney.run
        );
    }
);