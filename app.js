//START R-TONE APP
alert('Please Add To Your Home Screen')
//CREATE OBJECT MOVIES
var ringtonsData =[{
   rName :"Kabir Singh Theme",
   rImg:"images/kabirsingh01.jpg",
   rAudio:"tones/kabir01.mp3",
   id01:"kabir01",
   id02:"movieimg01",
   evt:"playMusic(event,'kabir01','movieimg01')"
},{
   rName :"Kabir Singh flute",
   rImg:"images/kabir_flute.jpg",
   rAudio:"tones/kabir_singh_flute.mp3",
    id01:"kabir02",
    id02:"movieimg02",
    evt:"playMusic(event,'kabir02','movieimg02')"
},{
   rName :"Tujhe kitna Chahne",
   rImg:"images/tujheKitna.jpg",
   rAudio:"tones/tujhe_kitna_chahne.mp3",
   id01:"kabir03",
   id02:"movieimg03",
   evt:"playMusic(event,'kabir03','movieimg03')"
},{
   rName :"Tera Ban Jaunga",
   rImg:"images/terabanjaunga.jpg",
   rAudio:"tones/tera_ban_jauga.mp3",
    id01:"kabir04",
	id02:"movieimg04",
   evt:"playMusic(event,'kabir04','movieimg04')"
},{
   rName :"Kaise Hua",
   rImg:"images/kaisehua.jpg",
   rAudio:"tones/kaise_hua_ringtone.mp3",
    id01:"kabir05",
   id02:"movieimg05",
   evt:"playMusic(event,'kabir05','movieimg05')"
},{
   rName :"Tere Bin Ab Na..",
   rImg:"images/terebinabna.jpg",
   rAudio:"tones/terebin.mp3",
    id01:"kabir06",
	id02:"movieimg06",
   evt:"playMusic(event,'kabir06','movieimg06')"
},]
//CREATE OBJECT ALBUM 
var ringtonsAlbum =[{
   rName :"Vaaste (male)",
   rImg:"images/vaaste.png",
   rAudio:"tones/vaaste_love_song.mp3",
   id01:"album01",
   id02:'albumimg01',
   evt:"playMusic(event,'album01','albumimg01')"
},{
   rName :"Romantic Ringtone",
   rImg:"images/romantic.jpg",
   rAudio:"tones/romantic__ringtone.mp3",
    id01:"album02",
	id02:'albumimg02',
   evt:"playMusic(event,'album02','albumimg02')"
},{
   rName :"Pal Pal Dil K Pass",
   rImg:"images/palpal.jpg",
   rAudio:"tones/pal_pal_dil_k_pass.mp3",
    id01:"album03",
	id02:'albumimg03',
   evt:"playMusic(event,'album03','albumimg03')"
},{
   rName :"Meri Aashiqui",
   rImg:"images/meri_ashiqui.jpg",
   rAudio:"tones/meri_aashiqui.mp3",
    id01:"album04",
	id02:'albumimg04',
   evt:"playMusic(event,'album04','albumimg04')"
},{
   rName :"Taaron ke Shehar",
   rImg:"images/tarokashahar.jpg",
   rAudio:"tones/taaron_ke_shehar.mp3",
    id01:"album05",
	id02:'albumimg05',
   evt:"playMusic(event,'album05','albumimg05')"
},{
   rName :"Lut Gaye",
   rImg:"images/lut_gaye.jpg",
   rAudio:"tones/lut_gaye.mp3",
    id01:"album06",
	id02:'albumimg06',
   evt:"playMusic(event,'album06','albumimg06')"
},]


//CREATE OBJECT THEMES  
var ringtonstheme =[{
   rName :"Music Box Tone",
   rImg:"images/music_box.jpg",
   rAudio:"tones/music_box_tone.mp3",
   id01:"theme01",
   id02:'themeimg01',
   evt:"playMusic(event,'theme01','themeimg01')"
},{
   rName :"Soft Theme",
   rImg:"images/music_theme.jpg",
   rAudio:"tones/theme.mp3",
    id01:"theme02",
	id02:'themeimg02',
   evt:"playMusic(event,'theme02','themeimg02')"
},{
   rName :"wkuk theme",
   rImg:"images/crop.jpg",
   rAudio:"tones/wkuk_theme_song.mp3",
    id01:"theme03",
	id02:'themeimg03',
   evt:"playMusic(event,'theme03','themeimg03')"
},{
   rName :"Super Mario Theme",
   rImg:"images/super_mario_theme.jpg",
   rAudio:"tones/super_mario_theme.mp3",
    id01:"theme04",
	id02:'themeimg04',
   evt:"playMusic(event,'theme04','themeimg04')"
},{
   rName :"Theme F Flm Ordinary",
   rImg:"images/romantic-theme-fz11.jpg",
   rAudio:"tones/theme_f_flm_ordinary.mp3",
    id01:"theme05",
	id02:'themeimg05',
   evt:"playMusic(event,'theme05','themeimg05')"
},{
   rName :"Run Theme",
   rImg:"images/run.jpg",
   rAudio:"tones/run_theme.mp3",
    id01:"theme06",
	id02:'themeimg06',
   evt:"playMusic(event,'theme06','themeimg06')"
},]


//SHOWING ITEMS LENGTH 
document.querySelector('.total01').innerHTML+=`
   ${ringtonsData.length}
`;
document.querySelector('.total02').innerHTML+=`
   ${ringtonsAlbum.length}
`;
document.querySelector('.total03').innerHTML+=`
   ${ringtonsAlbum.length}
`;

//INTRIGATION WITH JASON OBJECTS ADD VALUE 

//ADD VALUE IN MOVIES SECTION
for(var i in ringtonsData){
	document.querySelector('.movies>.container>.row').innerHTML+=`
	        
			    <div class="col-md-3">
				    <div class="main">
					      <div class="toneData text-center">
					   <img src="${ringtonsData[i].rImg}" class="rinImg" id="${ringtonsData[i].id02}">   
						<h4>${ringtonsData[i].rName}</h4>
						
					</div>
				
					<div class="data">
					    <audio src="${ringtonsData[i].rAudio}" class="audio" id="${ringtonsData[i].id01}" controls></audio>
					</div> 
					<div class="cntrls text-center">
						
						<a class="pause" onclick="pauseSong()"><i class="fas fa-pause"></i></a>
						<a class="play" onclick="${ringtonsData[i].evt}"><i class="fas fa-play"></i></a>
						<a href="${ringtonsData[i].rAudio}" class="download" download><i class="far fa-arrow-alt-circle-down"></i></a>
					</div>
					</div>
				</div>
	`;
}


//ADD VALUE IN ALBUMS SECTION
for(var i in ringtonsAlbum){
	document.querySelector('.albums>.container>.row').innerHTML+=`
	        
			    <div class="col-md-3">
				    <div class="main">
					      <div class="toneData text-center">
					   <img src="${ringtonsAlbum[i].rImg}" class="rinImg"  id="${ringtonsAlbum[i].id02}">   
						<h4>${ringtonsAlbum[i].rName}</h4>
						
					</div>
					<div class="data">
					    <audio src="${ringtonsAlbum[i].rAudio}" class="audio" id="${ringtonsAlbum[i].id01}" controls></audio>
					</div> 
					<div class="cntrls text-center">
						
						<a class="pause" onclick="pauseSong()"><i class="fas fa-pause"></i></a>
						<a class="play" onclick="${ringtonsAlbum[i].evt}"><i class="fas fa-play"></i></a>
						<a href="${ringtonsAlbum[i].rAudio}" class="download" download><i class="far fa-arrow-alt-circle-down"></i></a>
					</div>
					</div>
				</div>
	`;
}

//ADD VALUE IN THEMES SECTION
for(var i in ringtonstheme){
	document.querySelector('.music>.container>.row').innerHTML+=`
	        
		<div class="col-md-3">
			<div class="main">
				  <div class="toneData text-center">
			   <img src="${ringtonstheme[i].rImg}" class="rinImg"  id="${ringtonstheme[i].id02}">   
				<h4>${ringtonstheme[i].rName}</h4>
				
			</div>
			<div class="data">
				<audio src="${ringtonstheme[i].rAudio}" class="audio" id="${ringtonstheme[i].id01}" controls></audio>
			</div> 
			<div class="cntrls text-center">
				
				<a class="pause" onclick="pauseSong()"><i class="fas fa-pause"></i></a>
				<a class="play" onclick="${ringtonstheme[i].evt}"><i class="fas fa-play"></i></a>
				<a href="${ringtonstheme[i].rAudio}" class="download" download><i class="far fa-arrow-alt-circle-down"></i></a>
			</div>
			</div>
		</div>
		
	`;
}

//CODE FOR PLAY SONG
playMusic=(evt,playrRigtone,circle)=>{
	var audio  = document.querySelector('audio');
    var play = document.querySelector('.play');
	for(var i in play){		
	}
	document.getElementById(playrRigtone).play();
	document.getElementById(circle).classList.add('anim');
	
	//CODE FOR PAUSE SONG
	pauseSong = () => {
    var audio = document.getElementsByClassName('audio');
    for (var i in audio) {
        audio[i].pause();
	  document.getElementById(circle).classList.remove('anim');
      }
   }
}


//SEARCH FILTER WITH FULL SECTION
var input = document.getElementById('myInput').onkeyup = function(){
	var i,input,filter,section,txtValue;
	input =  document.getElementById('myInput');
     filter = input.value.toUpperCase();
	 section = document.querySelectorAll('section');
	 for(var i in section){
		 if(section[i]){
			 txtValue =  section[i].textContent;
             if(txtValue.toUpperCase().indexOf(filter) > -1){
				 section[i].style.display = ""; 
				 document.querySelector('.default').innerHTML=`Nothing Items founds`;
			 }
			else{
				section[i].style.display = "none";
				document.querySelector('.default').innerHTML=`Nothing Items founds`;
			}			 
		}
	 }
}
