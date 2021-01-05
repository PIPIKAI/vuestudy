const app =new Vue({
    el : '#app',
    data : {
        books : [
            {
                id: 1,
                name:'算法导论', 
                date:'2006-9',
                price: 85.00 ,
                count: 1
            },
            {
                id: 2,
                name:'UNIX编程艺术', 
                date:'2008-3',
                price: 59.00 ,
                count: 1
            },
            {
                id: 3,
                name:'编程珠玑', 
                date:'2008-9',
                price: 39.00 ,
                count: 1
            },
            {
                id: 4,
                name:'数据结构', 
                date:'2007-12',
                price: 47.00 ,
                count: 1
            },
        ],
        message : "总价格 = "
    },
    methods :{
        getprice(price){
            return '￥' + price.toFixed(2);
        },
        decrease(index){
            this.books[index].count -- ;
        },
        increase(index){
            this.books[index].count ++ ;
        },
        removeHandle(index){
            this.books.splice(index,1) 
        }
    },
    computed :{
        TotalPrice(){
            let res=0;
            // for(let i = 0 ; i<this.books.length ; i++){
            //     res+= this.books[i].price * this.books[i].count ;
            // }
            for(let book of this.books){
                res+= book.price * book.count ;
            }
            return  res;
        }
    },
    filters :{
        showPrice(price){
            return '￥' + price.toFixed(2);
        }
    }

})