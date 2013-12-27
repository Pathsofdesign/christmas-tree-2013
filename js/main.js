var paper = Snap(".christmas-tree");
Snap.load("svg/Flaticon_15862.svg", onDrawingLoaded);

function onDrawingLoaded(d) {
	var tree = d.select('#Layer_1');
		tree.attr({"fill-opacity": '0', viewBox: '0 0 50 50', width: '100px', height: '100px' });
		tree.animate({"fill-opacity": '1'}, 1000, mina.easein);
		
	var christmasTitle = Snap('.christmas-title');
		christmasTitle.animate({"opacity": 1}, 1000, mina.easein);
					
	var treeElements = tree.selectAll('*');
		treeElements.attr({fill: '#fff'})
	
	var ornaments = tree.selectAll('circle');
	
	paper.append(tree);
					
	function randomColor() {
		var colors = [
			'#FFFFFF',
			'#FFFFFF',					
			'#F2F0D8', // Cream
			'#A11D21', // Red
			'#07078A', // Blue
			'#F2D26A'  // Yellow
		]
		return colors[Math.floor(Math.random() * colors.length)];
	}
	
	function changeColor(index) {	
		tree.select('circle:nth-child('+ index +')').animate({ fill: randomColor()}, 1000, null, function() {
			setTimeout(function() { changeColor(index) }, 2000);
		});
	}
	
	var index = ornaments.items.length;	
	function animateLoop() {
		setTimeout(function() {
			if (index >= 1) {
				changeColor(index);
				--index; 
				animateLoop();
			}
		}, 400);								
	}
	animateLoop();
}
