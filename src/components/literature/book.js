const def = [{
    author: "Дубинина О.",
    title: "Новый старый кинотеатр",
    publish: "Улица Заречная",
    year: "10.10.2002",
    id: 52
},
{
    author: "Пелешко В.",
    title: "Народний дім стане найсучаснішим кінотеатром",
    publish: "Запорізька Січ",
    year: "10.02.2014",
    id: 54
},
{
    author: 'Чайка О.',
    title: 'Деятельность попечительства о народной трезвости в Александровском уезде',
    publish: 'Музейний вісник # 12',
    year: '2012',
    id: 56
}]

export let addBook = (author, title, publish, year) => {
    let newBook = {
        author: author,
        title: title,
        publish: publish,
        year: year,
        id: +new Date(),
    }
    def.push(newBook);
}

export default def
