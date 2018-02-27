/* Created by pawan koul on 19-02-2018.
 * Keep WeatherAPI key separate and put it in git ignore for outsiders 
 * Keep static locations list in config for easy change in the list
 * Keep Chart Model separate to configure the options easily
 */

module.exports = {
	key : '279b4be6d54c8bf6ea9b12275a567156',
	locations : {
		"locations": [{
			"name": "Paris",
			"isoCode": "fr"
		}, {
			"name": "London",
			"isoCode": "gb"
		}, {
			"name": "Berlin",
			"isoCode": "de"
		}, {
			"name": "Rome",
			"isoCode": "it"
		}, {
			"name": "Amsterdam",
			"isoCode": "ned"
		}]
	},
	chartModel : {
  	type: 'line',
  	data: {
		labels: [],
		datasets: [
			{
				label: '',
				data: [],
				borderWidth: 1
			},	
			{
				label: '',
				data: [],
				borderWidth: 1
			}
		]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						reverse: false,
						autoSkip: false
					}
				}],
				xAxes: [{
					ticks: {
						reverse: false,
						autoSkip: false
					}
				}]		
			}
		}
	}
};