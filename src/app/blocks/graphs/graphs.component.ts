import { Component, OnInit, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';
import * as d3 from 'd3';
import { Subscription } from 'rxjs';

@Component({
	selector: '[graph]',
	templateUrl: './graphs.component.html'
})
export class GraphsComponent {
	watchData: any;
	subscription: Subscription;
	constructor(private data: DataService) {
		//subscribe to data changes
		this.subscription = this.data.getData().subscribe((data) => {
			if (data) {
				console.log('Inside graph constructor');
				this.drawGraph(data);
			}
		});
	}
	ngOnDestroy() {
		// unsubscribe to ensure no memory leaks
		if (this.subscription) {
			this.subscription.unsubscribe();
		}
	}
	drawGraph(data) {
		// d3.select("#barChart").select("svg").remove();
		// if (d3.select('#graph').select('svg')) {
		// 	console.log('graph exists');
		// } else {
		// 	console.log('graph does not exist');
		// }
		d3.select('#graph').select('svg').remove();
		var margin = { top: 20, right: 20, bottom: 100, left: 50 },
			width = 960 - margin.left - margin.right,
			height = 500 - margin.top - margin.bottom;
		function formatTimeF(timestamp: string): Object {
			var parseTime = d3.timeParse('%m/%d/%Y, %H:%M:%S');
			return parseTime(timestamp);
		}
		data.values.forEach(function(d) {
			if (d.value != 'None') {
				d.collectedtimestamp = formatTimeF(d.collectedtimestamp);
				d.value = +d.value;
			}
		});

		var x = d3.scaleTime().range([ 0, width ]);
		var y = d3.scaleLinear().range([ height, 0 ]);
		var valueline = d3
			.line()
			.x(function(d: any) {
				formatTimeF(d.collectedtimestamp);
				return x(d.collectedtimestamp);
			})
			.y(function(d: any) {
				if (d.value != undefined) {
					return y(d.value);
				}
			});
		var tooltip = d3.select('body').append('div').attr('class', 'tooltip-scatter').style('opacity', 0);
		var svg = d3
			.select('#graph')
			.append('svg')
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom)
			.append('g')
			.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

		x.domain(<[Date, Date]>d3.extent(data.values, function(d: any) {
			return d.collectedtimestamp;
		}));
		y.domain(<[any, any]>[
			0,
			d3.max(data.values, function(d: any) {
				return +d.value;
			})
		]);

		svg.append('path').data([ data.values ]).attr('class', 'line').attr('d', valueline);

		// Add the scatterplot
		svg
			.selectAll('dot')
			.data(data.values)
			.enter()
			.append('circle')
			.attr('r', 5)
			.attr('cx', function(d: any) {
				return x(d.collectedtimestamp);
			})
			.attr('cy', function(d: any) {
				return y(d.value);
			})
			.style('fill', 'white')
			.style('stroke', '#75B9BE')
			.style('stroke-width', '3px')
			.on('mouseover', function(d: any) {
				d3.select(this).transition().duration(50).attr('opacity', '.85');
				tooltip
					.transition()
					.duration(50)
					.style('opacity', 1)
					.style('left', d3.event.pageX + 10 + 'px')
					.style('top', d3.event.pageY - 15 + 'px');
				var format = d3.timeFormat('%m/%d/%Y, %H:%M:%S');
				tooltip.html(
					'<span>Date: ' + format(d.collectedtimestamp) + '</span><br><span> Value: ' + d.value + '</span>'
				);
			})
			.on('mouseout', function(d, i) {
				d3.select(this).transition().duration(50).attr('opacity', '1');

				tooltip.transition().duration(50).style('opacity', 0);
			});

		// Add the X Axis
		svg.append('g').attr('transform', 'translate(0,' + height + ')').call(d3.axisBottom(x));

		// Add the Y Axis
		svg.append('g').call(d3.axisLeft(y));
	}
}
