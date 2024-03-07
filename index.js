// GLOBAL VARIABLES STARTED

let searchInput = document.querySelector('#search');
let baseURL = "https://api.dictionaryapi.dev/api/v2";
let SearchKey = "entries/en";
let searchWrapper = document.querySelector('.search-wrapper-res');

// GLOBAL VARIABLES ENDED


// API FETCH DATA STARTED

async function fetching(word){
    let response  = await fetch (`${baseURL}/${SearchKey}/${word}`);
    let result = await response.json();
    console.log(result);
    renderdata(result)
}


// API FETCH DATA ENDED




// SEARCH PROCESSING STARTED

searchInput.addEventListener('keyup',(e)=>{
    if(e.target.value){
        if(e.keyCode == 13){
            fetching(e.target.value)
        }
    }
})

// SEARCH PROCESSING ENDED






// RENDER DATA STARTED

async function renderdata(data){
    data.forEach((e)=>{
            searchWrapper.innerHTML = '';
            let div = document.createElement('div');
            div.classList.add('search-result' ,'py-[18px]' ,'px-[32px]' ,'bg-[#fff]' ,'w-[846px]' ,'rounded-[18px]' ,'relative' ,'left-[280px]' ,'shadow-md');
            div.innerHTML = `
                    <h1 class="text-[32px] font-[700] pb-[12px]">${e.word}</h1>
                    <h3 class="text-[#8C8B8B] text-[16px] pb-[12px]"><i>exclamation, <span class="noun">${e.meanings[0].partOfSpeech}</span></i></h3>

                    <div class="flex items-center gap-[10px] pb-[12px]">
                        <audio src="${e.phonetics[0].audio}" controls></audio>
                        <p class="text-[#8C8B8B]">${e.phonetic}</p>
                    </div>

                    <div class="title text-[18px] font-[400]">
                        <a href="${e.sourceUrls[0]}" target="_blank" class="cursor-pointer text-[blue] text-[14px]">Read more</a>
                        <h4>${e.meanings[0].definitions[2].definition}</h4>
                    </div>
            
            
            `

            searchWrapper.append(div);
                })
    }

// RENDER DATA ENDED