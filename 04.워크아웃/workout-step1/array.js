const items = [
    {id:10, name: '벤치프레스', count: 5},
    {id:20, name: '렛풀다운', count: 3},
    {id:30, name: '스쿼트', count: 7},
]

console.log(items[0].name, items[0].count);
console.log(items[1].name, items[1].count);
console.log(items[0].id);
console.log(items[0]['id']);

console.log(`${items[1]}`);
console.log(`${items[1]['name']}`);
console.log(`${items[2]['count']}세트`);

console.log(`운동이름:${items[2].name}, ${items[2]['count']}세트`);