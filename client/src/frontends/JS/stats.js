var data = [
      { Round: 'Round 1', Score: 20},
      { Round: 'Round 2', Score: 18},
      { Round: 'Round 3', Score: 10},
      { Round: 'Round 4', Score: 26},
      { Round: 'Round 5', Score: 32},
      { Round: 'Round 6', Score: 40},
      { Round: 'Round 7', Score: 39},
      { Round: 'Round 8', Score: 21},
      { Round: 'Round 9', Score: 9},
      { Round: 'Round 10', Score: 12},
    ],
    config = {
      data: data,
      xkey: 'Round',
			xLabelAngle: '45',
      ykeys: ['Score'],
      labels: ['Total Victory Points'],
			parseTime: false,
      fillOpacity: 0.6,
      hideHover: 'auto',
      behaveLikeLine: true,
      resize: true,
			ymax: 42,
			ymin: 0,
			yLabelFormat: y => Math.round(y),
			padding: 60,
			gridTextWeight: 'bold',
      pointFillColors:['#F1F1F1'],
      pointStrokeColors: ['#222'],
      lineColors:['#d72323']
  };

config.element = 'line-chart', 'pie-chart';
Morris.Line(config);
// Morris.Donut({
//   element: 'pie-chart',
//   data: [
//     {label: "Imperium", value: 5},
//     {label: "Orks", value: 11},
//     {label: "Chaos", value: 7},
//     {label: "Aeldari", value: 12},
// 		{label: "Tyranids", value: 12},
// 		{label: "Tau", value: 12},
// 		{label: "Necrons", value: 12},
//   ],
//   			colors: ['#F1C40F', '#229954', '#d72323', '#884EA0', '#E67E22',  '#3498DB', '#808B96']
// });
