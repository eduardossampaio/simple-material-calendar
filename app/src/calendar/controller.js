
var moment = require('moment');
var app = new Vue({
    el: '#app',
    mounted:function (){
console.log('monted: ', this);
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

        refresh : function() {
            this.monthName =  this.atualDate.format("MMMM")
            var currentMonth = this.atualDate.get('month');
            // console.log('currentMonth: ',currentMonth);
            var firstDayOfMonth = moment(this.atualDate).startOf('month'); //this.atualDate.set(1, 'day');
            var lastDayOfMonth = moment(this.atualDate).endOf('month');
            var initialDay = firstDayOfMonth.day("Sunday"); //first sunday of week
            var finalDay = lastDayOfMonth.day("Saturday"); //last sunday of week
            initialDay = initialDay.add(-1,'day');
            console.log(initialDay.format('DD MM YYYY') + ': '+  initialDay.dayOfYear());
            console.log(finalDay.format('DD MM YYYY') + ': '+ finalDay.dayOfYear());

            this.weeks = [];

            //while(initialDay.dayOfYear() < finalDay.dayOfYear()){
            for(var i=0; i< 5; i++){ //5 weeks
                var week = [];
                for(var j=0; j< 7; j++){
                    initialDay =initialDay.add(1, 'day');

                    week.push({
                        day: initialDay.get('date'),
                        otherMonth: initialDay.get('month') !== currentMonth
                    });
                }
                this.weeks.push(week);
            }
            // console.log(this.weeks);
        }
    }

  });

  console.log("Controller.js");
