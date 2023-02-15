import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LearnMorepageService {

  constructor() { }
  learnMoreDetails = [{
    id: 'Ferrari',
    brandimage: '../assets/ferBrand/Ferrari-488.webp',
    brandName: 'Ferrari 488',
    brandPrice: '₹ 4.02 Crore',
    brandshort: 'The Ferrari 488 made its world debut at the 2019 Geneva Motor Show prior to its unveiling in March last year. The model is propelled by a 3.9-litre twin-turbocharged V8 engine that produces 710bhp and 770Nm of torque. The model can attain speeds of 100kmph from a standstill in just 2.9 seconds, all the way up to a top speed of 340kmph.',
    brandkeyspecsname: 'for Ferrari 488',
    brandfueltype: 'Petrol',
    brandEngine: '3902 cc',
    brandPower: '711 bhp and 770 Nm',
    brandDrivetrain: 'RWD',
    brandAccleration: '2.9 seconds',
    brandtopSpeed: '340 kmph',
    brandSummary: 'Ferrari 488',
    brandSumPrice: 'Ferrari 488 price is ₹ 4.02 Crore.Deliveries of the model are set to begin in the country soon. The car was unveiled by Select Cars, the official authorised dealer of the marquee in New Delhi.',
    brandSumMarket: 'The F8 Tributo is claimed to be the most aerodynamically efficient series-production mid-rear-engined berlinetta ever designed. Tipping the scales at 40kgs less than the 488 GTB, the model also features 10% more aerodynamic efficiency. The exterior design of the F8 Tributo features an S-Duct at the front (which improves downforce by 15%), reworked rear profile and a new engine compared to its predecessor.',
    brandSumVariants: 'Ferrari 488 price is ₹ 4.02 Crore (Avg. ex-showroom). 488 comes in 1 variant. 488 top model price in petrol is ₹ 4.02 Crore. Whereas the price of 488 automatic version starts from ₹ 4.02 Crore.',
    brandSumEngine: 'The 488 is claimed to be the most aerodynamically efficient series-production mid-rear-engined berlinetta ever designed. Tipping the scales at 40kgs less than the 488 GTB, the model also features 10% more aerodynamic efficiency.',
    brandSumSeating: 'The Ferrari 488 has a seating capacity of 2 occupants',
    // brandPriceTable:'	Rs: 4.63 Crore onwards',
    brandcolor1: 'https://imgd.aeplcdn.com/600x337/n/mpqvg4a_1520091.jpg?q=75',
    brandcolor2: 'https://imgd.aeplcdn.com/600x337/n/s06vg4a_1520089.jpg?q=75',
    brandcolor3: 'https://imgd.aeplcdn.com/600x337/n/0itvg4a_1520095.jpg?q=75',
    brandcolor4: 'https://imgd.aeplcdn.com/600x337/n/1un3g4a_1520057.jpg?q=75',
    brandMileageFuel: 'Petrol(3902cc)',
    brandMileageTransmission: 'Automatic(DCT)',
    brandAraiMileage: '7.7kmpl',
    brandUserMileage: '6.5kmpl'
  },
  {
    id: 'Jaguar',
    brandimage: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/19826/xf-exterior-right-front-three-quarter.jpeg?q=75',
    brandName: 'Jaguar XMF',
    brandPrice: '₹ 71.60 Lakhs',
    brandshort: 'The 2016 Jaguar XF is one of the first leaping cats in the country to get the new series of the 2.0-litre Ingenium engines.The 1999cc turbocharged four cylinder diesel engine develops 177bhp of power and 430Nm of torque while the 2.0-litre turbo-petrol develops 237bhp of power and 340Nm of torque.',
    brandfueltype: 'Petrol & Diesel',
    brandEngine: '1997 cc',
    brandPower: '250 bhp and 430 Nm',
    brandDrivetrain: 'RWD',
    brandAccleration: '6.9 to 7.6 seconds',
    brandtopSpeed: '235 to 250 kmph',
    brandSumPrice: 'Jaguar XF price ranges between ₹ 71.60 Lakh - ₹ 76.00 Lakh depending on the variant selected.',
    brandSumMarket: 'The Jaguar XF, when introduced, opened up the gates into Jaguar’s world of cars. Now with the XE holding that mantle, the XF has grown bigger and you can say, better. The new 2016 Jaguar XF, though on the same platform, is longer and lighter than its predecessor and comes with new equipment.',
    brandSumVariants: 'The Jaguar XF is available in two wheelbase options. The Jaguar has two variants XF R-Dynamic S P250 and XF R-Dynamic S D200 , lie between range 71.60 Lakhs to 76 Lakhs.',
    brandSumEngine: 'The 2016 Jaguar XF is one of the first leaping cats in the country to get the new series of the 2.0-litre Ingenium engines. The 1999cc turbocharged four cylinder diesel engine develops 177bhp of power and 430Nm of torque while the 2.0-litre turbo-petrol develops 237bhp of power and 340Nm of torque. Both the engines are mated to an eight-speed automatic gearbox that sends power to the rear wheels.',
    brandSumSeating: 'The Ferrari 488 has a seating capacity of 2 occupants',
    brandSumVerdict:'The Jaguar XF definitely stands out amongst the German rivals in terms of looks. However, it still isn"t up to the mark when it comes to pushing the envelope forward. That said, it still continues to drive well, has a comfortable cabin and makes for a nice premium executive sedan.',
    brandPriceDelhi:'	Rs: 82.86 Lakhs onwards',
    brandPriceMumbai:'	Rs: 86.16 Lakhs onwards',
    brandPriceBangalore:'	Rs: 89.98 Lakhs onwards',
    brandcolor1: 'https://imgd.aeplcdn.com/600x337/n/r4gdrsa_1477928.jpg?q=75',
    brandcolor2: 'https://imgd.aeplcdn.com/600x337/n/nfhdrsa_1477929.jpg?q=75',
    brandcolor3: 'https://imgd.aeplcdn.com/600x337/n/hfldrsa_1477934.jpg?q=75',
    brandcolor4: 'https://imgd.aeplcdn.com/600x337/n/utio3sa_1483750.jpg?q=75',
    brandMileagetalk:'Jaguar XF mileage claimed by ARAI is 14.4 to 19.2 kmpl. The petrol version has a mileage of 14.4 kmpl. The diesel version has a mileage of 19.2 kmpl.',
    brandMileageFuel: 'Petrol(3902cc)',
    brandMileageTransmission: 'Automatic(TC)',
    brandAraiMileage: '14.4kmpl',
    brandUserMileage: '10.5kmpl',
    brandMileageFuel1:'Diesel',
    brandMileageTransmission1:'Automatic(TC)',
    brandAraiMileage1:'19.2kmpl',
    brandUserMileage1:'14.3 kmpl',
  },
  {
    id: 'Lamborghini',
    brandimage: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/14054/huracan-evo-exterior-right-front-three-quarter-2.jpeg?q=75',
    brandName: 'Lamborghini Aventador',
    brandPrice: '₹ 3.22 Crore',
    brandshort: 'We expect that the Aventador will priced in the range of Rs 1.8 crore to Rs 2.5 crore and will compete with the Audi R8, BMW M6 Gran Coupe and the Porsche 911.',
    brandfueltype: 'Petrol',
    brandEngine: '5204 cc',
    brandPower: '610 bhp and 560 Nm',
    brandDrivetrain: 'RWD',
    brandAccleration: '5.4 seconds',
    brandtopSpeed: '360 kmph',
    brandSumPrice: 'Lamborghini Aventador price ranges between ₹ 3.22 Crore - ₹ 3.73 Crore depending on the variant selected.',
    brandSumMarket: "The Lamborghini Gallardo has been the Italian automaker’s most successful car to date with a total production of 14,002 units in its 10-year life span. When it announced that the Gallardo was being retired, many said that the successor had big shoes to fill and would probably have to just as crazy as the Gallardo was when it was launched. It seems that after all the hype Lamborghini has not disappointed when it launched the Aventador LP 610-4 in April of this year. It is now bringing the car to India and will launch it onSeptember 22.",
    brandSumVariants: 'The Lamborghini has two variants, Aventador RWD which is of range 3.22 Crore and Aventador AWD of range 3.73 Crore.We expect that the Aventador will priced in the range of Rs 1.8 crore to Rs 2.5 crore and will compete with the Audi R8, BMW M6 Gran Coupe and the Porsche 911.',
    brandSumEngine: 'The Aventador is powered by a 5.2-litre V10 that produces 610bhp, 560Nm of torque and sends power to all four-wheels via a four-wheel-drive system and seven-speed dual clutch gearbox. The car can sprint to 100 kmph from standstill in 3.2 seconds and the 0 to 200kmph run can be done in 9.9 seconds with a claimed top-speed of 325kmph. The Aventador features stop-start technology as standard and has CO2 emissions as low as 290 g/km.',
    brandSumSeating: 'The Aventador gets an interior very similar to that of the much larger Aventador but the layout looks a little more organised thanks to the wider size of the instrument cluster. There is a large array of toggle switches on both sides of the steering wheel while the paddles behind the wheel are massive giving the impression of an extremely busy area. If we observe the design, then we can see that the car is all about being driver oriented.',
    // brandPriceTable:'	Rs: 4.63 Crore onwards',
    brandPriceDelhi:'	Rs: 3.71 Crores onwards',
    brandPriceMumbai:'	Rs: 3.80 Crore onwards',
    brandPriceBangalore:'	Rs: 3.98 Crores onwards',
    brandcolor1: 'https://imgd.aeplcdn.com/600x337/n/38on6sa_1475628.jpg?q=75',
    brandcolor2: 'https://imgd.aeplcdn.com/600x337/n/736n6sa_1475629.jpg?q=75',
    brandcolor3: 'https://imgd.aeplcdn.com/600x337/n/wrvn6sa_1475639.jpg?q=75',
    brandcolor4: 'https://imgd.aeplcdn.com/600x337/n/neao6sa_1475641.jpg?q=75',
    brandMileagetalk:'Lamborghini Aventador mileage claimed by ARAI is 7.25 kmpl.',
    brandMileageFuel: 'Petrol',
    brandMileageTransmission: 'Automatic(DCT)',
    brandAraiMileage: '7.25kmpl',
    brandUserMileage: '6.5kmpl'
  },
  {
    id: 'Rolls-Royce',
    brandimage: 'https://imgd.aeplcdn.com/664x374/cw/ec/30181/RollsRoyce-Phantom-VIII-Exterior-124069.jpg?wm=0&q=75',
    brandName: 'Rolls-Royce Phantom II',
    brandPrice: '₹ 9.50 Crore',
    brandshort: 'There is nothing in the global car market that competes with the Phantom and for good reasons. It’s grand in appearance, has top levels of luxuries and technology along with a sofa-like rear seat. The legendary 6.75-litre V12 engine is supremely powerful and smooth at the same time. All of this comes at a price, though. It remains an unachievable dream car for many.',
    brandfueltype: 'Petrol',
    brandEngine: '6749 cc',
    brandPower: '563 bhp and 900 Nm',
    brandDrivetrain: 'RWD',
    brandAccleration: '5.4 seconds',
    brandtopSpeed: '250 kmph',
    brandSumPrice: 'Rolls-Royce Phantom VIII price is ₹ 9.50 Crore.',
    brandSumMarket: "The Rolls-Royce Phantom VIII was launched in India on 23 February 2018. This is the current flagship model made by Rolls-Royce Motor Cars.",
    brandSumVariants: 'The Rolls-Royce Phantom VIII is available in two wheelbase options. The Rolls-Royce Phantom Extended Wheelbase (EWB), or the Phantom Extended, is a special variant of the Phantom, which is 220mm longer than the standard model.',
    brandSumEngine: ' Powering the Rolls-Royce Phantom VIII is a 6.8 litre, V-12 engine that produces 650bhp and 900Nm of torque. This engine is paired with an eight-speed automatic transmission that sends power to the rear wheels.',
    brandSumSeating: 'The Rolls-Royce Phantom has a seating capacity of five occupants',
    // brandPriceTable:'	Rs: 4.63 Crore onwards',
    brandPriceDelhi:' Rs: 10.92 Crore onwards',
    brandPriceMumbai:' Rs: 11.20 Crore onward',
    brandPriceBangalore:'	Rs: 10.75 Crores onwards',
    brandPricePune:'10.75 Crore onwards',
    brandcolor1: 'https://imgd.aeplcdn.com/600x337/n/6ibqqsa_1477532.jpg?q=75',
    brandcolor2: 'https://imgd.aeplcdn.com/600x337/n/kieqqsa_1477535.jpg?q=75',
    brandcolor3: 'https://imgd.aeplcdn.com/600x337/n/lfgqqsa_1477538.jpg?q=75',
    brandcolor4: 'https://imgd.aeplcdn.com/600x337/n/f0hqqsa_1477539.jpg?q=75',
    brandMileagetalk:'',
    brandMileageFuel: 'Petrol',
    brandMileageTransmission: 'Automatic(TC)',
    brandAraiMileage: '7.1kmpl',
    brandUserMileage: '12.5kmpl'
  },]
}