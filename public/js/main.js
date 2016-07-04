require.config({
	baseUrl:'js',
	paths:{
		examApp:'modules/ExamModule/app',
		examConfig:'modules/ExamModule/config',

		angular:'../lib/angular',
		uiRouter:'../lib/angular-ui-router.min'
	},
	shim:{
		'angular':{
			'exports':'angular'
		}
	}
});

function start(){
	require(["angular"],function(angular){
		require(['examConfig'],function(ExamConfig){
			angular.bootstrap(document,['Exam']);
		})
	});
}
start();