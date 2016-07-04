/**
 * Created by Firdoesh on 6/30/2016.
 */
'use strict';

angular.module('applicant')
    .service('QuestionService', function($http) {
        this.getQuestions = GetQuestions;
        function GetQuestions() {
            return $http.get('./data/question.json');
        }
    });