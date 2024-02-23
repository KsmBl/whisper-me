var darkmode = 0;

function localgoto(link)
{
	window.location.href = link;
}

function togglemode()
{
	if(darkmode == 0) {
		darkmode = 1;
		//add .dark-mode to every object
	} else {
		darkmode = 0;
		//remove .dark-mode from every object
	}
}

function start()
{
	//load images
	if(document.getElementById("body").offsetWidth <= 1400) {
		document.getElementById("femboyimagebox").innerHTML += `<img style="width: 48%; margin: 1%; object-fit: contain;" src="/publicdata/images/femboy2_medium.jpg"/>
									<img style="width: 48%; margin: 1%; object-fit: contain;" src="/publicdata/images/femboy1_medium.png"/>`;
	} else {
		document.getElementById("femboyimagebox").innerHTML += `<img style="width: 31%; margin: 1%; object-fit: contain;" src="/publicdata/images/femboy2_medium.jpg"/>
									<img style="width: 31%; margin: 1% 1% 1% 2%; object-fit: contain;" src="/publicdata/images/shonky0_medium.webp"/>
									<img style="width: 31%; margin: 1%; object-fit: contain;" src="/publicdata/images/femboy1_medium.png"/>`;
	}

	if(document.getElementById("body").offsetWidth >= 1100) {
		document.getElementById("left").innerHTML += `	<img src="/publicdata/images/femboy-badge.jpg" alt="iam a little silly Femboy" class="sideimage">
								<h4> mein Femboy-Abzeichen :3 </h4>
								<img src="/publicdata/images/controller.jpg" alt="iam a little silly solder boi" class="sideimage"> 
								<h4> mein Loetabzeichen... oder so </h4>`;
	}
}

start();
