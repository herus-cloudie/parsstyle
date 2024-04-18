const staticData = [
    {
        title : 'سایز',
        option : [
            {value : 'allSize' , context : 'تمامی سایزها'}
            ,{value : 'S' , context : 'S'}
            ,{value : 'M' , context : 'M'}
            ,{value : 'L' , context : 'L'}
            ,{value : 'XL' , context :  'XL'}
            ,{value : '2XL' , context : '2XL'}
        ]
    },
    {
        title : 'رنگ',
        option : [
            {value : 'allColor' , context:'تمامی رنگ ها'}
            ,{value : 'red' , context:'قرمز'}
            ,{value : 'blue' , context:'آبی'}
            ,{value : 'white' , context:'سفید'}
            ,{value : 'black' , context:'مشکی'}
            ,{value : 'gray' , context:'خاکستری'}
            ,{value : 'green' , context:'سبز'}
            ,{value : 'brown' , context:'قهوه‌‌ای'}
            ,{value : 'yellow' , context:'زرد'}
            ,{value : 'orange' , context:'نارنجی'}
            ,{value : 'purple' , context:'بنقش'}
        ]
    },
    // {
    //     title : 'دسته بندی',
    //     option : [
    //         {value : 'allCategory' , context : 'همه'}
    //         ,{value : 'men' , context : 'مردانه'}
    //         ,{value : 'women' , context : 'زنانه'}
    //         ,{value : 'child' , context : 'بچگانه'}
    //     ]
    // },
    {
        title : 'فروشنده',
        option : [
            {value : 'allSeller' , context : 'تمامی فروشنده ها'}
            ,{value : 'parsstyle' , context : 'پارس استایل'}
            ,{value : 'calzino' , context : 'کالزینو' }
            ,{value : 'lebasina' , context : 'لباسینا'}
        ]
    },
    {
        title : 'جنسیت',
        option : [
            {value : 'allSex' , context : 'همه'}
            ,{value : 'men' , context : 'مردانه'}
            ,{value : 'women' , context : 'زنانه'}
            ,{value : 'child' , context : 'بچگانه'}
        ]
    }
]
const cityData = ['تهران' , 'کرج' , 'رشت' , 'قم' , 'اصفهان' , 'شیراز' ,'اردبیل' , 'کاشان' ,'لاهیجان' , 'پرند' , 'پردیس' , 'بندرعباس'  ,'زنجان' , 'مشهد']
export {staticData , cityData}