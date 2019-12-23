import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';
import * as d3 from 'd3';

@Component({
	selector: 'app-graphs',
	templateUrl: './graphs.component.html'
})
export class GraphsComponent implements OnInit, AfterViewInit {
	watchData: any;
	constructor(private data: DataService) {}

	ngOnInit() {
		this.data.currentWatchData.subscribe((data) => (this.watchData = data));
		console.log('from graphs component');
		console.log(this.watchData);
	}
	ngAfterViewInit() {
		if (this.watchData != null) {
			console.log(this.watchData);
			this.drawGraph(this.watchData);
		}
	}

	drawGraph(data) {
		var margin = { top: 20, right: 20, bottom: 100, left: 50 },
			width = 960 - margin.left - margin.right,
			height = 500 - margin.top - margin.bottom;
		function formatTimeF(timestamp: string) {
			var parseTime = d3.timeParse('%m/%d/%Y, %H:%M:%S');
			// var formatTime = d3.timeFormat('%m/%d/%Y, %H:%M:%S');
			console.log(typeof parseTime(timestamp));

			return parseTime(timestamp);
		}
		var x = d3.scaleTime().range([ 0, width ]);
		var y = d3.scaleLinear().range([ height, 0 ]);
		var valueline = d3
			.line()
			.x(function(d: any) {
				// d.collectedtimestamp = formatTimeF(d.collectedtimestamp);
				// console.log(x(d.collectedtimestamp));
				formatTimeF(d.collectedtimestamp);
				return x(d.collectedtimestamp);
			})
			.y(function(d: any) {
				if (d.value != undefined) {
					return y(d.value);
				}
			});
		var svg = d3
			.select('#graph')
			.append('svg')
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom)
			.append('g')
			.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

		data.values.forEach(function(d) {
			if (d.value != 'None') {
				d.collectedtimestamp = formatTimeF(d.collectedtimestamp);
				d.value = +d.value;
			}
		});

		x.domain(<[Date, Date]>d3.extent(data.values, function(d: any) {
			return d.collectedtimestamp;
		}));
		y.domain(<[any, any]>[
			0,
			d3.max(data.values, function(d: any) {
				return +d.value;
			})
		]);

		// svg.append('path').data([ data.values ]).attr('class', 'line').attr('d', valueline);

		// Add the scatterplot
		svg
			.selectAll('dot')
			.data(data.values)
			.enter()
			.append('circle')
			.attr('r', 5)
			.attr('cx', function(d: any) {
				// d.collectedtimestamp = formatTimeF(d.collectedtimestamp);
				// console.log(x(d.collectedtimestamp));
				return x(d.collectedtimestamp);
			})
			.attr('cy', function(d: any) {
				return y(d.value);
			})
			.style('fill', 'steelblue')
			.style('stroke', 'steelblue');

		// Add the X Axis
		svg.append('g').attr('transform', 'translate(0,' + height + ')').call(d3.axisBottom(x));

		// Add the Y Axis
		svg.append('g').call(d3.axisLeft(y));
		console.log(data);
	}
}
