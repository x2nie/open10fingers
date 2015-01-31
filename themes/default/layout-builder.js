
// my little html string builder @ https://gist.github.com/1Marc/466432
buildHTML = function(tag, html, attrs) {
  // you can skip html param
  if (typeof(html) != 'string') {
    attrs = html;
    html = null;
  }
  var h = '<' + tag;
  for (attr in attrs) {
    if(attrs[attr] === false) continue;
    h += ' ' + attr + '="' + attrs[attr] + '"';
  }
  return h += html ? ">" + html + "</" + tag + ">" : "/>";
}
 
function keyboardLayout() 
{

	//return '<h1>keyboardLayout</h1>';
	var clases = '|tab|capslock|shift-left|shift-right|ctrl|enter|alt|space'.split('|');
	var lay =  [[0,0,0,0,0,0,0,0,0,0,0,0,0,3],
				[1,0,0,0,0,0,0,0,0,0,0,0,0,6],
				[2,0,0,0,0,0,0,0,0,0,0,0,0,3],
				[3,0,0,0,0,0,0,0,0,0,0,0,4],
				[5,7,7,8,7,7,7,5]];
				
	text = '';
	for (i = 0; i < lay.length; i++) { 
		row ='';
		for (j = 0; j < lay[i].length; j++) { 
			row += buildHTML('div', '<span>X</span>', {
				id : "tut_" + i + "_" + j,
				class : 'key ' + clases[ lay[i][j] ]
			});
		}
		
		text += buildHTML('span', row, {
				class : 'row'
			});
		
	}
	return text;
} 

/* 
buildHTML("a", "Marc Grabanski", {
  id: "mylink",
  href: "http://marcgrabanski.com"
});
// outputs: <a id="mylink" href="http://marcgrabanski.com">Marc Grabanski</a>
 
// or leave out the html
buildHTML("input", {
  id: "myinput",
  type: "text",
  value: "myvalue"
});
// outputs: <input id="myinput" type="text" value="myvalue" />
*/