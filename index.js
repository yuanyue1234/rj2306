const people = [
    { name: "01陈全扬", description: "", link: "01陈全扬" },
    { name: "02陈严标", description: "", link: "02陈严标" },
    { name: "03陈宇", description: "个人商城注册", link: "03陈宇（个人商城注册）" },
    { name: "04陈宇航", description: "3+1", link: "04陈宇航3+1" },
    { name: "05戴依", description: "咖啡网站", link: "05戴依-咖啡网站" },
    { name: "06邓慧心", description: "", link: "06邓慧心" },
    { name: "07邓琪妍", description: "", link: "07邓琪妍" },
    { name: "08邓卓凡", description: "新", link: "08邓卓凡（新）" },
    { name: "09冯平安", description: "动漫主页", link: "09冯平安动漫主页" },
    { name: "10符思仪", description: "动物网站", link: "10符思仪动物网站" },
    { name: "11高佳晨", description: "", link: "11高佳晨" },
    { name: "12郭俊辉", description: "", link: "12郭俊辉" },
    { name: "13胡炳杰", description: "web商城", link: "13胡炳杰web商城" },
    { name: "14黄富成", description: "游戏页面", link: "14黄富成游戏页面" },
    { name: "15黄天宇", description: "", link: "15黄天宇" },
    { name: "16雷俊杰", description: "简易百度", link: "16简易百度-雷俊杰" },
    { name: "17李晶", description: "", link: "17李晶" },
    { name: "18李先皓", description: "创意坊", link: "18创意坊李先皓" },
    { name: "19李祥", description: "", link: "19李祥" },
    { name: "20李勇", description: "京西百货商城", link: "20李勇京西百货商城" },
    { name: "21廖阳", description: "", link: "21廖阳" },
    { name: "22刘婷", description: "", link: "22刘婷" },
    { name: "23孟翔宇", description: "", link: "23孟翔宇" },
    { name: "24桂林旅游网站", description: "", link: "24桂林旅游网站" },
    { name: "25邱思琪", description: "", link: "25邱思琪" },
    { name: "26宋政阳", description: "注册", link: "26注册宋政阳" },
    { name: "27王洪铭", description: "", link: "27王洪铭" },
    { name: "28向舟帆", description: "", link: "28向舟帆" },
    { name: "29肖思思", description: "芒果综艺", link: "29肖思思芒果综艺" },
    { name: "30肖轩", description: "旅游博客", link: "30肖轩旅游博客" },
    { name: "32鄢宏辉", description: "", link: "32鄢宏辉" },
    { name: "34杨丽莹", description: "", link: "34杨丽莹" },
    { name: "35袁越", description: "个人网页", link: "35袁越个人网页" },
    { name: "36张康", description: "小说网站", link: "36张康小说网站" },
    { name: "37张志豪", description: "项目", link: "37张志豪项目" },
    { name: "38赵裕鑫", description: "", link: "38赵裕鑫" },
    { name: "39郑翔", description: "随拍建筑", link: "39郑翔随拍建筑" },
    { name: "40周高桥", description: "", link: "40周高桥" },
    { name: "41朱海莲", description: "见习天使", link: "41见习天使-朱海莲" },
    { name: "42邹湘龙", description: "", link: "42邹湘龙" }
];

const container = document.getElementById('people-container');

people.forEach(person => {
    const personDiv = document.createElement('div');
    personDiv.className = 'person';
    personDiv.innerHTML = `
    <div class = "content-item">
            <h3><a href="${person.link}" target="_blank">${person.name}</a></h3>
            <p>${person.description}</p>
            </div>
        `;
    container.appendChild(personDiv);
});

