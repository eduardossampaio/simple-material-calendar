
var moment = require('moment');
moment.locale('pt-BR');

var app = new Vue({
    el: '#app',
    mounted:function (){

        this.refresh();
    },
    data: {

        atualDate: moment(),
        message: 'Hello Vue!',
        monthName :"",
        weekdays: moment.weekdaysShort(),
        weeks: [],
        nextMonth: function() {
            console.log("next");
            this.atualDate = this.atualDate.add(1,'months');
            this.refresh();
        },
        previousMonth : function() {
            console.log("prev");
            this.atualDate = this.atualDate.add(-1,'months');
            this.refresh();
        },

        firstDayOfMonth: function() {
            var firstDayOfMonth = moment(this.atualDate).startOf('month');
            var initialDay = firstDayOfMonth.day("Sunday"); //first sunday of week
            initialDay = initialDay.add(-1,'day');
            return initialDay;
        },

        refresh : function() {
            // var currentDate;
            this.monthName =  this.atualDate.format("MMMM")
            this.year =  this.atualDate.format("YYYY")
            var currentMonth = this.atualDate.get('month');
            var initialDay = this.firstDayOfMonth();
            this.weeks = [];

            for(var i=0; i< 5; i++){ //5 weeks
                var week = [];
                for(var j=0; j< 7; j++){
                    initialDay =initialDay.add(1, 'day');

                    week.push({
                        today: initialDay.isSame(new Date(), "day"),
                        day: initialDay.get('date'),
                        otherMonth: initialDay.get('month') !== currentMonth
                    });
                }
                this.weeks.push(week);
            }
        }
    }

  });

  console.log("Controller.js");
