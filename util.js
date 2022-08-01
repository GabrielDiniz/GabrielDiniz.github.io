function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function toRadians (angle) {
	return angle * (Math.PI / 180);
}
function rgbToHex(color) {
	return "#"+color.r.toString(16).padStart(2, '0')+color.g.toString(16).padStart(2, '0')+color.b.toString(16).padStart(2, '0');
}

function nextRandColor(color) {
	color.r= Math.max((color.r + rand(-50,50)%254),0);
	color.g= Math.max((color.g + rand(-50,50)%254),0);
	color.b= Math.max((color.b + rand(-50,50)%254),0);
	return color;
}

function nextRainbowColor(color,steps) {
	n=256*5;
	change=n/steps;
	let r = color.r, g=color.g , b= color.b;

	if (r==255 && g>=0 && b==0) { //red to yellow
		if (g+change>255) {
			let dif = g+change-255;
			color.g=255;
			color.r-=dif;
		}else{
			color.g+=change;
		}
	}else if (r>=0 && g==255 && b==0) { //yellow to green
		if (r-change<0) {
			let dif = Math.abs(r-change);
			color.r=0;
			color.b+=dif;
		}else{
			color.r-=change;
		}
	}else if (r==0 && g==255 && b>=0) { //green to cyan
		if (b+change>255) {
			let dif = b+change-255;
			color.b=255;
			color.g-=dif;
		}else{
			color.b+=change;
		}
	}else if (r==0 && g>=0 && b==255) { //cyan to blue
		if (g-change<0) {
			let dif = Math.abs(g-change);
			color.g=0;
			color.r+=dif;
		}else{
			color.g-=change;
		}
	}
	else if (r>=0 && g==0 && b==255) { //blue to violet
		if (r+change>255) {
			let dif = r+change-255;
			color.r=255;
			color.b-=dif;
		}else{
			color.r+=change;
		}
	}else if (r==255 && g==0 && b>=0) { //violet to red
		if (b-change<0) {
			let dif = Math.abs(b-change);
			color.b=0;
			color.g+=dif;
		}else{
			color.b-=change;
		}
	}
	color.r = Math.floor(color.r);
	color.g = Math.floor(color.g);
	color.b = Math.floor(color.b);
}

function randomColor(){
	return {r:rand(0,255),g:rand(0,255),b:rand(0,255)};
}