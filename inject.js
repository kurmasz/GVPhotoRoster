// this is the code which will be injected into a given page...

(function() {


    /*
    let pics = document.getElementsByTagName('img');
    for (let i = 0; i < pics.length; ++i) {
	pics[i].style.height='200px';
	pics[i].style.width='200px';
	}
	*/

    
    let imageWidth = '200px';

    
    // just place a div at top right    
    var div = document.createElement('div');
    div.style.pageBreakBefore = 'always';

    /*
    div.style.position = 'fixed';
	div.style.top = 0;
	div.style.left = 0;
	div.textContent = 'Injected!';
	*/
    document.body.appendChild(div);

    let ids = document.getElementsByClassName("studentID");
    for (let i = 0; ids.length; ++i) {
	let id = ids[i].innerHTML;

	let name = ids[i].previousElementSibling.innerHTML;


	console.log('Fetching ' + id + ' for ' + name);
	let url = `https://intranet.gvsu.edu/bannerapps/files/cfc/functions.cfc?method=getStudentImage&studentID=${id}&instructors=KURMASZ%3B`;
	//fetch(url).then(data=>{return data.json()}).then(res => {console.log(res)});
	fetch(url).then(data=>{
	    // console.log("Data for " + id);
	    // console.log(data);
	    return data.text();
	}).then(encodedImg => {
	    console.log("Data for " + id);
	    // console.log(encodedImg);

	    let place = document.createElement('div');
	    place.style['text-align'] = 'justify';
	    place.style.width = imageWidth;
	    place.style.display='inline-block';;
	    
	    let img = document.createElement('img');
	    img.src = `data:img/png;base64,${encodedImg}`;
	    img.style.width = imageWidth;
	    img.style.display = 'block';
	    img.style.margin = '0';


	    let nm = document.createElement('span');
	    nm.innerHTML = name;
	    
	    place.appendChild(img);
	    place.appendChild(nm);
	    
	    
	    div.appendChild(place);
	    

	});;
    }
})();
