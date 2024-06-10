const staticData = [
    {
        title : 'دسته بندی',
        option : [
            {value : 'allCategory' , context : 'تمامی بسته بندی ها'}
            ,{value : 'shirt' , context : 'تیشرت و پیراهن'}
            ,{value : 'coat' , context : 'کت و شلوار'}
            ,{value : 'wedding' , context : 'مجلسی زنانه'}
            ,{value : 'pants' , context : 'شلوار'}
            ,{value : 'shoes' , context :  'کفش'}
            ,{value : 'winter' , context :  'زمستانی'}
            ,{value : 'sport' , context :  'ورزشی'}
        ]
    },
    {
        title : 'رنگ',
        option : [
            {value : 'allColor' , context:'تمامی رنگ ها'},
            {value : 'white' , context:'سفید'}
            ,{value : 'black' , context:'مشکی'}
            ,{value : 'beige' , context:'بژ'}
            ,{value : 'red' , context:'قرمز'}
            ,{value : 'blue' , context:'آبی'}
            ,{value : 'gray' , context:'خاکستری'}
            ,{value : 'green' , context:'سبز'}
            ,{value : 'brown' , context:'قهوه‌‌ای'}
            ,{value : 'yellow' , context:'زرد'}
            ,{value : 'pink' , context:'صورتی'}
            ,{value : 'purple' , context:'بنقش'}
        ]
    },
    {
        title : 'فروشنده',
        option : [
            {value : 'allSeller' , context : 'تمامی فروشنده ها'}
            ,{value : 'parsstyle' , context : 'پارس استایل'}
            ,{value : 'tavana' , context : 'توانا' }
            ,{value : 'lebasina' , context : 'لباسینا'}
        ]
    },
    {
        title : 'جنسیت',
        option : [
            {value : 'allSex' , context : 'مردانه و زنانه'}
            ,{value : 'men' , context : 'مردانه'}
            ,{value : 'women' , context : 'زنانه'}
        ]
    }
];

const cityData = ['تهران' , 'کرج' , 'رشت' , 'قم' , 'اصفهان' , 'شیراز' ,'اردبیل' , 'کاشان' ,'لاهیجان' , 'پرند' , 'پردیس' , 'بندرعباس'  ,'زنجان' , 'مشهد']
const scoreData = [1 , 2 , 3 , 4 , 5];

export {staticData , cityData , scoreData }