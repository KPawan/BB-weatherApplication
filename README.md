# BB-weatherApplication

Component based angular 1.5 weather app example\
#project setup

Technologies used:\
#Server                    |  #Client
:-------------------------:|:-------------------------:

Node					   | webpack  
Express					   | Angular 1.5  						                 							

:-------------------------:|:-------------------------:
							  	
#Steps to set up the project locally\
Clone repository: https://github.com/KPawan/BB-weatherApplication.git\
#app-server: To create and expose API's to client side\

	Under folder app-server, run following commands,

		npm install      --  Load all node modules
		npm run dev      --  This command will bundle all scripts into app.bundle.js and vendor.js under folder js.
		npm run start    --  It will start the client project on localhost:8080

		npm run test     --  Optional) To check the test Coverage (Unit tests in .spec files is not yet in this project)

#weather-forecast-app\
	Under folder weather-forecast-app, run following command

			npm start        -- It will run node server on localhost:7000

#What's left?\
	1. ng-docs\
	2. unit tests\
	3. include node-saas and add separate scss files for the components\
