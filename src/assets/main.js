const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCam8T03EOFBsNdR0thrFHdQ&part=snippet%2Cid&order=date&maxResults=10';

const content = document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6981c7030bmshcafc339d0cd9798p1b5c19jsned73ac363971',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};




async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

//Este codigo lo que hace es ejecutar el codigo al cargar el archivo javascript!
(async () => {
    try{
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">

                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
                </h3>
            </div>
            </div>
        `).slice(0,10).join('')
        }
        `;
        content.innerHTML=view;
    }catch(error){
        console.log(error);
    }
})();
//==========================

/* usando npm run deploy para desplegar el script*/

