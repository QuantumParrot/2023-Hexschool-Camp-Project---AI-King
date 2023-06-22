// 串接

const apiPath = 'https://2023-engineer-camp.zeabur.app';

let worksData = [];
let pagesData = {};

const data = {
    type: '',
    sort: 0,
    page: 1,
    search: '',
}

function getData({ type, sort, page, search }){
    const apiUrl = `${apiPath}/api/v1/works?sort=${sort}&page=${page}&${type ? `type=${type}&` : ''}${search ? `search=${search}` : ''}`
    // 如果 type 存在，則生成字串 `type=${type}&` ( & 用來連結後面的search ) 若不存在則生成空字串
    axios.get(apiUrl)
      .then(function(response){
        worksData = response.data.ai_works.data;
        pagesData = response.data.ai_works.page;
        renderWorks();
      })
}

getData(data);

// 渲染 - worksData

function renderWorks(){
  let works = '';
  worksData.forEach(function(item){
    works += /*html*/ `
    <div class="col-lg-4 col-md-6">
      <div class="ai-card">
        <div class="overflow-hidden">
            <img class="w-100" src="${item.imageUrl}" alt="${item.title}">
        </div>
        <h5 class="card-title px-6 pt-4">${item.title}</h5>
        <p class="card-info px-6 pb-4 flex-grow-1">${item.description}</p>
        <div class="card-section">
            <p class="fw-bold">AI 模型</p>
            <p>${item.model}</p>
        </div>
        <div class="card-section">
            <a href="#" alt=""># ${item.type}</a>
            <a target="_blank" href="${item.link}" title="${item.title}"><span class="material-icons">share</span></a>
        </div>
      </div>
    </div>`;
  });
  document.querySelector('.ai-cards-list').innerHTML = works;
}

// 渲染 - pagesData


