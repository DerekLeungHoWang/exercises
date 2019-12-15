var marks = [

    { mark: 99 }, { mark: 80 }, { mark: 60 }, { mark: 70 }, { mark: 50 },

    { mark: 67.6 }, { mark: 62.4 }, { mark: 87.5 }, { mark: 55 }
    ]

    var sumOfMark = marks.reduce(function(sum, mark){

        return (sum + mark.mark)

    }, 0)

    console.log(Math.floor(sumOfMark/ marks.length));