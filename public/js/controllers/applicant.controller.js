/**
 * Created by Firdoesh on 6/30/2016.
 */
var app = angular.module("applicant");

    app.controller("ApplicantController", function($scope, QuestionService) {
        $scope.questions = [];

        QuestionService.getQuestions()
            .success(function(response) {
                $scope.questions = response;
                console.log(response);
            })
            .error(function(err) {
                console.log(err);
            });


        $scope.saveResponse = function () {
            console.log($scope.questions);
        }
    });