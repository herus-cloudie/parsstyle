'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { staticData } from "@/constant/data";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function NavigationFilter() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const createQueryString = useCallback((name, value) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    return params.toString();
  }, [searchParams]);

  const category = searchParams.get('category');
  const color = searchParams.get('color');
  const seller = searchParams.get('seller');
  const sex = searchParams.get('sex');

  const changeHandler = (data , title) => {
    if (title == 'دسته بندی' && data != 'allCategory') router.push(`${pathname}?${createQueryString('category', data)}`);
    else if (title == 'رنگ' && data != 'allColor') router.push(`${pathname}?${createQueryString('color', data)}`);
    else if (title == 'فروشنده' && data != 'allSeller') router.push(`${pathname}?${createQueryString('seller', data)}`);
    else if (title == 'جنسیت' && data != 'allSex') router.push(`${pathname}?${createQueryString('sex', data)}`);
    else if (data === 'allCategory') router.push(`${pathname}?${createQueryString('category', '')}`);
    else if (data === 'allColor') router.push(`${pathname}?${createQueryString('color', '')}`);
    else if (data === 'allSeller') router.push(`${pathname}?${createQueryString('seller', '')}`);
    else if (data === 'allSex') router.push(`${pathname}?${createQueryString('sex', '')}`);
  };

  const dynamicValues = {
    category: {
      default: 'همه',
      shirt: 'تیشرت و پیراهن',
      coat: 'کت و شلوار',
      pants: 'شلوار و شلوارک',
      wedding: 'مجلسی زنانه',
      shoes: 'کفش',
      sport: 'ورزشی',
      winter: 'زمستانی'
    },
    color: {
      default: 'همه',
      red: 'قرمز',
      blue: 'آبی',
      white: 'سفید',
      black: 'مشکی',
      gray: 'خاکستری',
      green: 'سبز',
      brown: 'قهوه‌‌ای',
      yellow: 'زرد',
      orange: 'نارنجی',
      pink: 'صورتی',
      purple: 'بنقش'
    },
    seller: {
      default: 'همه',
      parsstyle: 'پارس استایل',
      tavana: 'توانا',
      lebasina: 'لباسینا'
    },
    sex: {
      default: 'همه',
      men: 'مردانه',
      women: 'زنانه',
      child: 'بچگانه'
    }
  };

  const dynamicValueCategory = dynamicValues.category[category] || dynamicValues.category.default;
  const dynamicValueColor = dynamicValues.color[color] || dynamicValues.color.default;
  const dynamicValueSeller = dynamicValues.seller[seller] || dynamicValues.seller.default;
  const dynamicValueSex = dynamicValues.sex[sex] || dynamicValues.sex.default;

  return (
    <>
      {staticData.map(({ title, option }) => (
        <div key={title} style={{ zIndex: '1035' }} className="flex flex-col justify-center">
          <div className="text-sm mb-2 text-zinc-800">
            {title}
          </div>
          <Select className="max-w-10" onValueChange={(e) => changeHandler(e ,title)}>
            <SelectTrigger className="w-[100px] sm:w-[150px]">
              <SelectValue
                placeholder={
                  title === 'دسته بندی' ? dynamicValueCategory :
                  title === 'رنگ' ? dynamicValueColor :
                  title === 'فروشنده' ? dynamicValueSeller :
                  title === 'جنسیت' ? dynamicValueSex :
                  null
                }
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>{title}</SelectLabel>
                {option.map(opt => (
                  <SelectItem key={opt.value} value={opt.value}>{opt.context}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      ))}
    </>
  );
}
